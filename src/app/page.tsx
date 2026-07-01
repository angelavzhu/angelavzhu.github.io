import CaseStudies from "./CaseStudies";
import Navigation from "./Navigation";
import { Karla } from "next/font/google";

const karla = Karla({
  subsets: ['latin'],
})

export default function App() {
  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#maincontent">
        Skip to main content
      </a>
      <Navigation />

      <main id="maincontent" className="karla.className">
        <CaseStudies />
      </main>
    </>
  );
}