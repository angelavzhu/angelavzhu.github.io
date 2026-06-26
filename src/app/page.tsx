import styles from "./page.module.css";
import { Button } from "@/components/ui/button"
import Nav from "@/components/ui/navbar"

const COMPANIES = ["SageSure", "NYBG", "Google (DCC)", "Evallos"] as const;
type Company = typeof COMPANIES[number];

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-white flex flex-col items-center justify-center gap-[40px] px-[60px] snap-start relative overflow-hidden"
    >
      {/* put background here */}

      <p className="font-['Karla',sans-serif] font-bold text-[clamp(30px,4vw,50px)] text-black text-center leading-tight max-w-[860px] relative" style={{ zIndex: 1 }}>
        Angela is turning bold ideas into experiences that remain{" "}
        <span className="text-[#070]">thoughtful</span> and{" "}
        <span className="text-[#070]">scalable.</span>
      </p>

      {/* In-flow hero pills */}
      <div className="flex flex-wrap gap-[20px] items-center justify-center relative" style={{ zIndex: 1 }}>
        <div className="flex items-center justify-center h-[57px]">
          <div className="-rotate-6">
            <div className="bg-[#59ac64] flex h-[40px] items-center px-[20px] py-[8px] rounded-[12px]">
              <span className="font-['Karla',sans-serif] font-bold text-[20px] text-black whitespace-nowrap">Designed at:</span>
            </div>
          </div>
        </div>
        {COMPANIES.map((name, i) => {
          const tilt = i % 2 === 0 ? "-rotate-6" : "rotate-6";
          return (
            <button
              key={name}
              // onClick={() => scrollTo(COMPANY_TO_SECTION[name])}
              className="group cursor-pointer flex items-center justify-center h-[50px]"
            >
              <div className={`transition-transform duration-200 rotate-0 group-hover:${tilt}`}>
                <div className="bg-[#cde3c9] group-hover:bg-[#59ac64] group-hover:scale-105 transition-all duration-200 flex h-[40px] items-center px-[20px] py-[8px] rounded-[12px]">
                  <span className="font-['Karla',sans-serif] font-normal text-[20px] text-black whitespace-nowrap">{name}</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
    </>

    //  <Nav />
    //       <FixedPillsBar activeSection={activeSection} />
    //       <NavIndicator activeSection={activeSection} isTransitioning={isTransitioning} />
    //       <div id="scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory">
    //         <Hero />
    //         {COMPANIES.map((company, i) => (
    //           <CaseStudyCard key={company} company={company} showFooter={i === COMPANIES.length - 1} />
    //         ))}
    //       </div>

    // <div className={styles.page}>
    //   <main className={styles.main}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className={styles.intro}>
    //       <h1>To get started, edit the page.tsx file.</h1>
    //       <p>
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className={styles.ctas}>
    //       <a
    //         className={styles.primary}
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className={styles.logo}
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className={styles.secondary}
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
