"use client"
import { useEffect, useRef, useState } from "react";
import sketch from "@/assets/sketch.jpg";
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const BRUSH_RADIUS = 200;


export default function App() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    function handleButton() {
        var x = document.getElementById("backgroundVideo") as HTMLVideoElement;
        if (!x.paused) {
            setIsPaused(true);
            x.pause();
        } else {
            setIsPaused(false);
            x.play();
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = new Image();
        imgRef.current = img;
        img.src = sketch.src;

        // Compute the object-fit: cover source rect for a given canvas size
        const coverRect = (cw: number, ch: number) => {
            const iw = img.naturalWidth;
            const ih = img.naturalHeight;
            const imgAspect = iw / ih;
            const canvasAspect = cw / ch;
            let sx = 0, sy = 0, sw = iw, sh = ih;
            if (imgAspect > canvasAspect) {
                sw = canvasAspect * ih;
                sx = (iw - sw) / 2;
            } else {
                sh = iw / canvasAspect;
                sy = (ih - sh) / 2;
            }
            return { sx, sy, sw, sh };
        };

        const drawGrayscale = () => {
            if (!img.naturalWidth) return;
            const w = canvas.width;
            const h = canvas.height;
            const { sx, sy, sw, sh } = coverRect(w, h);
            ctx.globalCompositeOperation = "source-over";
            ctx.filter = "grayscale(1) blur(4px)";
            ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
            ctx.filter = "none";
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawGrayscale();
        };

        img.onload = resize;
        if (img.complete && img.naturalWidth) resize();

        window.addEventListener("resize", resize);

        let last = { x: -999, y: -999 };

        const eraseAt = (x: number, y: number) => {
            ctx.globalCompositeOperation = "destination-out";
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, BRUSH_RADIUS);
            gradient.addColorStop(0, "rgba(0,0,0,1)");
            gradient.addColorStop(0.5, "rgba(0,0,0,0.85)");
            gradient.addColorStop(1, "rgba(0,0,0,0)");
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, BRUSH_RADIUS, 0, Math.PI * 2);
            ctx.fill();
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Interpolate between last and current point for smooth strokes
            const dx = e.clientX - last.x;
            const dy = e.clientY - last.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const steps = Math.max(1, Math.floor(dist / 8));
            for (let i = 0; i <= steps; i++) {
                eraseAt(
                    last.x + (dx * i) / steps,
                    last.y + (dy * i) / steps
                );
            }
            last = { x: e.clientX, y: e.clientY };
        };

        const handleMouseEnter = (e: MouseEvent) => {
            last = { x: e.clientX, y: e.clientY };
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, []);

    return (
        <>
            <div className="absolute w-full h-screen overflow-hidden bg-white">
                <video id="backgroundVideo" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                    {/* video in src folder */}
                    <source src="/animated.mp4" type="video/mp4" />
                </video>

                {/* Grayscale canvas*/}
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 block"
                    style={{ width: "100%", height: "100%" }}
                />
            </div>
            <button onClick={handleButton} className="absolute bottom-8 right-[4%] z-100 primarybutton"
                style={{ padding: "8px", borderRadius: "50%" }}>
                {isPaused ? <PlayArrowIcon /> : <PauseIcon />}
            </button>
        </>
    );
}
