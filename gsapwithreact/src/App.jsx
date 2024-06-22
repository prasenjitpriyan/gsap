import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const App = () => {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.from(boxRef.current, {
      duration: 1,
      delay: 1,
      rotate: 360,
    });
  });

  return (
    <main>
      <div className="container">
        <div className="circle"></div>
        <div ref={boxRef} className="box"></div>
      </div>
      <div className="kuch">
        <div className="circle"></div>
        <div className="box"></div>
      </div>
    </main>
  );
};

export default App;
