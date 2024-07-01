import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App: React.FC = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,
      },
    });
    tl.to("#page2 h1", {
      transform: "translateX(-150%)",
    });
  });
  return (
    <main className="w-screen min-h-[100svh] overflow-x-hidden">
      <div id="page2" className="h-full w-full bg-teal-700 p-[5vw]">
        <h1 className="text-[34vw] font-semibold uppercase text-amber-100">
          Experiences
        </h1>
      </div>
    </main>
  );
};

export default App;
