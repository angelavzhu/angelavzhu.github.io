"use client"
import React from "react";
import placeholder from "../../assets/placeholder.png";

type NavItem = { label: string; sectionId: string };

const navItems: NavItem[] = [
    { label: "Overview", sectionId: "section-overview" },
    { label: "Context", sectionId: "section-context" },
    { label: "Approach", sectionId: "section-approach" },
    { label: "Solution", sectionId: "section-solution" },
    { label: "Reflection", sectionId: "section-reflection" },
];

function scrollTo(id: string) {
    if (id === "section-overview") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        document
            .getElementById(id)
            ?.scrollIntoView({ behavior: "smooth" });
    }
}

function SideNav({ active }: { active: string }) {
    return (
        <div className="flex flex-col gap-5 items-start">
            {navItems.map(({ label, sectionId }) => {
                const isActive = active === sectionId;
                return (
                    <button
                        key={label}
                        onClick={() => scrollTo(sectionId)}
                        className="group flex items-center justify-center cursor-pointer h-[54px]"
                    >
                        <div className={`transition-transform duration-200 ${isActive ? "-rotate-6" : `rotate-0 group-hover:${"rotate-6"}`}`}>
                            <div style={{ padding: "8px 8px", backgroundColor: isActive ? "#2d62ff" : "#ccd8ff" }}
                                className="flex h-[40px] items-center py-[8px] rounded-[12px] primarybutton"
                            >
                                <span
                                    style={{
                                        fontWeight: isActive ? 700 : 400,
                                        fontSize: 14,
                                        color: isActive ? "#fff" : "#000",
                                        whiteSpace: "nowrap",
                                        lineHeight: "normal",
                                    }}
                                >
                                    {label}
                                </span>
                            </div>
                        </div>
                    </button >


                );
            })}
        </div >
    );
}

function SectionLabel({ children }: { children: string }) {
    return (
        <div className="relative w-full bg-[#ccd8ff]">
            <div
                aria-hidden
                className="absolute inset-0 border-l-8 border-solid border-[#2d62ff] pointer-events-none"
            />
            <div className="flex flex-col items-start px-5 py-2">
                <p
                    style={{
                        fontWeight: 400,
                        fontSize: 20,
                        lineHeight: "normal",
                        color: "#000",
                    }}
                >
                    {children}
                </p>
            </div>
        </div>
    );
}

// function Divider() {
//     return <div className="w-full border-t-2 border-[#c1c1c1]" />;
// }

// function MetaRow({
//     label,
//     value,
// }: {
//     label: string;
//     value: string;
// }) {
//     return (
//         <div
//             className="flex items-start justify-between w-full gap-4"
//             style={{ fontSize: 18 }}
//         >
//             <p
//                 style={{
//                     fontWeight: 700,
//                     color: "#2d62ff",
//                     whiteSpace: "nowrap",
//                 }}
//             >
//                 {label}
//             </p>
//             <p
//                 style={{
//                     fontWeight: 400,
//                     color: "#000",
//                     textAlign: "right",
//                 }}
//             >
//                 {value}
//             </p>
//         </div>
//     );
// }

// function MetaTable() {
//     return (
//         <div className="flex flex-col gap-4 w-2/5 shrink-0">
//             <MetaRow
//                 label="PRODUCT"
//                 value="Qualitative recruiting software (early stage VC)"
//             />
//             <Divider />
//             <MetaRow label="ROLE" value="Product Design Intern" />
//             <Divider />
//             <MetaRow
//                 label="TEAM"
//                 value="Engineering, Design, Product"
//             />
//             <Divider />
//             <MetaRow label="YEAR" value="May - Aug 2025" />
//             <Divider />
//             <MetaRow label="TOOLS" value="Figma" />
//         </div>
//     );
// }

// function OverviewSection() {
//     return (
//         <div
//             id="section-overview"
//             className="flex items-start justify-between w-full gap-12"
//         >
//             <div className="flex flex-col gap-8 flex-1 min-w-0">
//                 <p
//                     style={{
//                         fontWeight: 500,
//                         fontSize: 32,
//                         color: "#000",
//                         lineHeight: "normal",
//                     }}
//                 >
//                     Creating genuine professional connection @ Evallos
//                     Labs
//                 </p>
//                 <p
//                     style={{
//                         fontWeight: 400,
//                         fontSize: 20,
//                         color: "#000",
//                         lineHeight: "normal",
//                     }}
//                 >
//                     In my internship at Evallos Labs, a workforce and
//                     career development product, fhjajksndjkasndkad
//                 </p>
//             </div>
//             <MetaTable />
//         </div>
//     );
// }

// function ImpactCard({
//     num,
//     text,
// }: {
//     num: string;
//     text: string;
// }) {
//     return (
//         <div className="flex-1 min-w-0 relative rounded-lg self-stretch">
//             <div
//                 aria-hidden
//                 className="absolute inset-0 border-2 border-[#c1c1c1] border-solid pointer-events-none rounded-lg"
//             />
//             <div className="flex flex-col items-center gap-10 p-10 h-full">
//                 <div className="bg-[#ccd8ff] flex items-center justify-center rounded-full w-20 h-20 shrink-0">
//                     <p
//                         style={{
//                             fontWeight: 400,
//                             fontSize: 40,
//                             color: "#000",
//                         }}
//                     >
//                         {num}
//                     </p>
//                 </div>
//                 <p
//                     style={{
//                         fontWeight: 400,
//                         fontSize: 18,
//                         color: "#000",
//                         lineHeight: "normal",
//                     }}
//                 >
//                     {text}
//                 </p>
//             </div>
//         </div>
//     );
// }

// function ImpactSection() {
//     return (
//         <div className="flex flex-col gap-12 w-full">
//             <SectionLabel>Impact</SectionLabel>
//             <div className="flex gap-12 items-stretch w-full">
//                 <ImpactCard
//                     num="1"
//                     text="Designed 6 features including a jobs dashboard, messaging, profile, and data visualization."
//                 />
//                 <ImpactCard
//                     num="2"
//                     text="Audited and restructured the job applicant user flow, removing 4 layers of unnecessary tabulation."
//                 />
//                 <ImpactCard
//                     num="3"
//                     text="Navigated through company pivot by communicating directly with CEOs to distill PRDs into actionable designs."
//                 />
//             </div>
//         </div>
//     );
// }


// function HmwRow({ text }: { text: string }) {
//     return (
//         <div className="flex gap-4 items-start w-full">
//             <p
//                 style={{
//                     fontWeight: 400,
//                     fontSize: 18,
//                     color: "#000",
//                     lineHeight: "normal",
//                     flex: 1,
//                 }}
//             >
//                 {text}
//             </p>
//         </div>
//     );
// }

// function ContextSection() {
//     return (
//         <div
//             id="section-context"
//             className="flex flex-col gap-12 w-full"
//         >
//             <SectionLabel>Problem Space</SectionLabel>
//             <p
//                 style={{
//                     fontWeight: 500,
//                     fontSize: 32,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 Simplifying features and designing for growth
//             </p>
//             <p
//                 style={{
//                     fontWeight: 400,
//                     fontSize: 18,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 When I joined the team, Evallos Labs was preparing for
//                 beta testing, and my task was to finalize the Jobs page
//                 for launch. However, an audit revealed that the page was
//                 incredibly feature-heavy and nearly impossible to pick
//                 up. At the same time, the founders wanted to
//                 differentiate the product in a crowded market by
//                 focusing on intelligent matching and professional
//                 networking.
//             </p>
//             <HmwRow text="How might we emphasize AlgoLink's unique functionality to allow for long term scalability and growth, while maintaining an intuitive user experience?" />
//             <img className="h-[455px]" src={placeholder.src} />
//         </div>
//     );
// }


// function FindingCard({
//     title,
//     quote,
// }: {
//     title: string;
//     quote: string;
// }) {
//     return (
//         <div className="flex-1 min-w-0 relative rounded-lg self-stretch">
//             <div
//                 aria-hidden
//                 className="absolute inset-0 border-2 border-[#c1c1c1] border-solid pointer-events-none rounded-lg"
//             />
//             <div className="flex flex-col gap-5 items-center p-10 h-full relative">
//                 <p
//                     style={{
//                         fontWeight: 400,
//                         fontSize: 18,
//                         color: "#000",
//                         lineHeight: "normal",
//                         alignSelf: "flex-start",
//                     }}
//                 >
//                     {title}
//                 </p>
//                 <div className="relative w-full bg-[#ccd8ff] rounded-xl">
//                     <div className="flex items-center justify-center p-5 w-full">
//                         <p
//                             style={{
//                                 fontWeight: 700,
//                                 fontSize: 18,
//                                 color: "#000",
//                                 flex: 1,
//                             }}
//                         >
//                             {quote}
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// function UserFindingCards() {
//     return (
//         <div className="flex gap-12 items-stretch w-full">
//             <FindingCard
//                 title="Networking features and benefits were unclear"
//                 quote='"I would probably just hit apply."'
//             />
//             <FindingCard
//                 title="Job Board was cluttered and confusing"
//                 quote='"Not sure why... 3 search bars on one page."'
//             />
//             <FindingCard
//                 title="Messages feature was rarely used"
//                 quote='"... pretty barebones"'
//             />
//         </div>
//     );
// }

// function ApproachSection() {
//     return (
//         <div
//             id="section-approach"
//             className="flex flex-col gap-12 w-full"
//         >
//             <SectionLabel>Approach</SectionLabel>
//             <p
//                 style={{
//                     fontWeight: 400,
//                     fontSize: 18,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 I began by taking a step back and evaluating the full
//                 product, which could be split into education (Profile,
//                 Test) and connection (Jobs, Messaging). For the Jobs
//                 page, I wanted to focus on the key feature of
//                 intelligent matching between recruiters and candidates.
//             </p>
//             <img className="h-[455px]" src={placeholder.src} />
//             <p
//                 style={{
//                     fontWeight: 500,
//                     fontSize: 32,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 Current features forced action and didn&apos;t work with
//                 user goals
//             </p>
//             <p
//                 style={{
//                     fontWeight: 400,
//                     fontSize: 18,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 As an unreleased product, formal usability testing was
//                 still pending. However, we initiated internal testing
//                 sessions with other interns and new team members to
//                 gather early feedback, which highlighted:
//             </p>
//             <HmwRow
//                 text={`Features were unequally distributed: the Job Board was flooded with tabs and actions, while Messages was basically untouched. Users were not incentivized to network at all, and could simply hit "Apply" and end their flow.`}
//             />
//             <UserFindingCards />
//         </div>
//     );
// }

// // Before cards: 1 highlighted + 2 plain = 3 total
// // After cards: 2 plain cards
// const redesignBeforeCards = [
//     {
//         text: "Overwhelming amount of tabs with unclear names",
//         highlighted: true,
//     },
//     { text: "Confusing search bars", highlighted: false },
//     {
//         text: "Users prioritize applying over rating interest",
//         highlighted: false,
//     },
// ];

// const redesignAfterCards = [
//     { text: "Streamlined discovery flow", highlighted: false },
//     { text: "Dedicated networking page", highlighted: false },
// ];

// function SideCard({
//     text,
//     highlighted,
// }: {
//     text: string;
//     highlighted: boolean;
// }) {
//     return (
//         <div
//             className={`relative rounded-lg w-full ${highlighted ? "bg-[#ccd8ff]" : ""}`}
//         >
//             <div
//                 aria-hidden
//                 className={`absolute inset-0 border-2 border-solid pointer-events-none rounded-lg ${highlighted ? "border-[#0059ec]" : "border-[#c1c1c1]"
//                     }`}
//             />
//             <div className="flex flex-col items-center p-8">
//                 <p
//                     style={{
//                         fontWeight: 400,
//                         fontSize: 18,
//                         color: "#000",
//                         lineHeight: "normal",
//                     }}
//                 >
//                     {text}
//                 </p>
//             </div>
//         </div>
//     );
// }

// function RedesignBlock({ label }: { label: string }) {
//     const [view, setView] = React.useState<"before" | "after">(
//         "before",
//     );
//     const cards =
//         view === "before"
//             ? redesignBeforeCards
//             : redesignAfterCards;

//     return (
//         <div className="flex gap-3 items-start w-full">
//             {/* Main image — fills remaining space */}
//             <div
//                 className="flex-1 min-w-0 bg-[#7f7f7f]"
//                 style={{ height: 455 }}
//             />

//             {/* Side panel */}
//             <div className="flex flex-col gap-3 items-start w-[280px] shrink-0">
//                 {/* Before / After toggle */}
//                 <div className="flex gap-3 items-start">
//                     {(["before", "after"] as const).map((v) => (
//                         <button
//                             key={v}
//                             onClick={() => setView(v)}
//                             className="flex h-10 items-center px-3 py-2 rounded-xl border-none cursor-pointer transition-colors"
//                             style={{
//                                 background: view === v ? "#ccd8ff" : "#fff",
//                                 outline:
//                                     view === v ? "none" : "2px solid #e5e5e5",
//                             }}
//                         >
//                             <span
//                                 style={{
//                                     fontWeight: 400,
//                                     fontSize: 14,
//                                     color: "#000",
//                                 }}
//                             >
//                                 {v.charAt(0).toUpperCase() + v.slice(1)}
//                             </span>
//                         </button>
//                     ))}
//                 </div>

//                 {/* Cards */}
//                 <div className="flex flex-col gap-3 w-full">
//                     {cards.map((c, i) => (
//                         <SideCard
//                             key={`${label}-${view}-${i}`}
//                             text={c.text}
//                             highlighted={c.highlighted}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function SolutionSection() {
//     return (
//         <div
//             id="section-solution"
//             className="flex flex-col gap-12 w-full"
//         >
//             <SectionLabel>Solution</SectionLabel>
//             <p
//                 style={{
//                     fontWeight: 500,
//                     fontSize: 32,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 Redistributing tasks into an intuitive flow between
//                 pages
//             </p>
//             <p
//                 style={{
//                     fontWeight: 400,
//                     fontSize: 18,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 {`The key insight in my redesign was that the current organization of tabs could be split into 2 actions (and therefore, 2 pages). This aligned perfectly with the product goal of emphasizing Evallos' unique market proposition in forging intentional connection within a curated user base.`}
//             </p>
//             <div className="flex flex-col gap-3 w-full">
//                 <img className="h-[184px]" src={placeholder.src} />
//                 <p
//                     style={{
//                         fontWeight: 400,
//                         fontSize: 18,
//                         color: "#424242",
//                         lineHeight: "normal",
//                     }}
//                 >
//                     Job board tabs could be split into 2 key actions:
//                     discovery and networking.
//                 </p>
//             </div>

//             <p
//                 style={{
//                     fontWeight: 500,
//                     fontSize: 32,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 <span>Jobs </span>
//                 <span style={{ color: "#2d62ff" }}>// Redesign 1</span>
//             </p>
//             <RedesignBlock label="jobs" />

//             <p
//                 style={{
//                     fontWeight: 500,
//                     fontSize: 32,
//                     color: "#000",
//                     lineHeight: "normal",
//                 }}
//             >
//                 <span>Connections </span>
//                 <span style={{ color: "#2d62ff" }}>// Redesign 2</span>
//             </p>
//             <RedesignBlock label="connections" />
//         </div>
//     );
// }

// function ReflectionCard({
//     label,
//     children,
// }: {
//     label: string;
//     children: React.ReactNode;
// }) {
//     return (
//         <div className="flex-1 min-w-0 relative rounded-lg">
//             <div
//                 aria-hidden
//                 className="absolute inset-0 border-2 border-[#c1c1c1] border-solid pointer-events-none rounded-lg"
//             />
//             <div className="flex flex-col gap-3 items-start p-10">
//                 <p
//                     style={{
//                         fontWeight: 700,
//                         fontSize: 18,
//                         color: "#2d62ff",
//                         whiteSpace: "nowrap",
//                     }}
//                 >
//                     {label}
//                 </p>
//                 <div
//                     style={{
//                         fontWeight: 400,
//                         fontSize: 18,
//                         color: "#000",
//                         lineHeight: "normal",
//                     }}
//                 >
//                     {children}
//                 </div>
//             </div>
//         </div>
//     );
// }

// function ReflectionSection() {
//     return (
//         <div
//             id="section-reflection"
//             className="flex flex-col gap-12 w-full"
//         >
//             <SectionLabel>Reflection</SectionLabel>
//             <div className="flex gap-12 items-start w-full">
//                 <ReflectionCard label="DESIGN AS BUSINESS">
//                     <p>
//                         Within an early-stage startup, I was able to
//                         directly discuss and{" "}
//                         <strong>
//                             contribute to AlgoLink&apos;s business decisions
//                             and company goals
//                         </strong>
//                         . It was incredibly engaging to work at the
//                         intersection of business and design, and made me
//                         realize the importance creating a valuable concept
//                         that will succeed in the market.
//                     </p>
//                 </ReflectionCard>
//                 <ReflectionCard label="DESIGN AS COMMUNICATION">
//                     <p>
//                         Prior to finalizing investors and funding, my team
//                         and I were working on tight deadlines to provide
//                         visuals and functionality for pitchdecks. One key
//                         takeaway I gained from this experience was the
//                         necessity of taking initiative to clarify concepts
//                         and drive projects forward.
//                     </p>
//                 </ReflectionCard>
//             </div>
//         </div>
//     );
// }

function TagPill({
    label,
    bg,
    border,
    textColor,
}: {
    label: string;
    bg: string;
    border: string;
    textColor: string;
}) {
    return (
        <div
            className="relative flex h-10 items-center px-3 py-2 shrink-0"
            style={{ background: bg, borderRadius: 80 }}
        >
            <div
                aria-hidden
                className="absolute inset-0 border-2 border-solid pointer-events-none"
                style={{ borderColor: border, borderRadius: 80 }}
            />
            <span
                style={{
                    fontWeight: 400,
                    fontSize: 14,
                    color: textColor,
                    whiteSpace: "nowrap",
                }}
            >
                {label}
            </span>
        </div>
    );
}

function UpNextCard() {
    return (
        <div className="flex flex-col gap-12 items-center flex-1 min-w-0">
            <img className="h-[284px]" src={placeholder.src} />
            <div className="flex gap-2.5 items-center flex-wrap justify-center">
                <TagPill
                    label="Enterprise Design"
                    bg="#9add8e"
                    border="#070"
                    textColor="#000"
                />
                <TagPill
                    label="Design Ops"
                    bg="#59ac64"
                    border="#070"
                    textColor="#000"
                />
                <TagPill
                    label="Design Systems"
                    bg="#0b4e14"
                    border="#070"
                    textColor="#fff"
                />
            </div>
        </div>
    );
}

function UpNextSection() {
    return (
        <div className="flex flex-col gap-12 w-full">
            {/* <SectionLabel>Up next</SectionLabel> */}
            <div className="flex gap-12 items-start w-full">
                <div className="h-[200px] w-[200px] bg-[#ccc]"> hello </div>
                <div className="h-[200px] w-[200px] bg-[#ccc]" />
                {/* <UpNextCard />
                <UpNextCard /> */}
            </div>
        </div>
    );
}

function StickyNav() {
    const [active, setActive] = React.useState(
        "section-overview",
    );

    React.useEffect(() => {
        const sectionIds = navItems.map((n) => n.sectionId);
        function onScroll() {
            if (window.scrollY < 100) {
                setActive("section-overview");
                return;
            }
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActive(sectionIds[i]);
                    return;
                }
            }
        }
        window.addEventListener("scroll", onScroll, {
            passive: true,
        });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed left-2 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-[15px] items-start">
            <SideNav active={active} />
        </div>
    );
}

export default function Evallos() {
    return (
        <div >
            <div style={{
                backgroundColor: "rgba(155, 21, 21, 0.95)",
                boxShadow: "0 0 36px 84px rgba(255, 255, 255, 0.8)",
                zIndex: 1,
            }}>
                <p className="font-['Karla',sans-serif] font-bold text-[3rem] text-black text-center leading-tight max-w-[860px] relative" style={{ zIndex: 1 }}>
                    Site under construction.<br /> Come back soon ~
                </p>
            </div>
            <div
                className="w-full bg-[#7f7f7f]"
                style={{ height: 455 }}
            />


            <div className="pl-32 pr-10 pb-16">
                <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                    {/* <OverviewSection />
                    <ImpactSection /> */}
                    <img className="h-[455px]" src={placeholder.src} />
                    {/* <ContextSection />
                    <ApproachSection />
                    <SolutionSection />
                    <ReflectionSection /> */}

                    <div className="relative flex items-center justify-center p-3 self-center">
                        <div
                            aria-hidden
                            className="absolute inset-0 border-b-4 border-[#0059ec] border-solid pointer-events-none"
                        />
                        <p
                            style={{
                                fontWeight: 500,
                                fontSize: 40,
                                color: "#000",
                                lineHeight: "normal",
                                whiteSpace: "nowrap",
                            }}
                        >
                            Thank you for reading!
                        </p>
                    </div>

                    <UpNextSection />
                </div>
            </div>

            <StickyNav />
        </div>
    );
}