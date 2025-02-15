import useMousePosition from "~/shared/utils/useMousePosition";
import { motion } from "framer-motion";
import { useState } from "react";
import "./index.css";

export default function HomeSection() {
  const { x, y } = useMousePosition();
  const [maskIsHovered, setMaskIsHovered] = useState(false);
  const maskSize = maskIsHovered ? 400 : 40;

  return (
    <section
      id="home"
      className="
        relative
        h-full w-full 
        flex flex-col 
        items-center justify-center 
        snap-center 
        text-center 
        cursor-default"
    >
      <div className="body w-full h-full flex flex-col items-center justify-center">
        <h1 className="font-bold text-8xl text-content">Hey, I'm Vini!</h1>
        <p className="mt-4 text-lg font-light text-content max-h">
          I'm passionate about creating experiences that are engaging,
          accessible, and user-centric.
        </p>
      </div>

      <motion.div
        className="mask background-grid-reverse w-full h-full flex flex-col items-center justify-center"
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
        }}
      >
        <div
          onMouseEnter={() => setMaskIsHovered(true)}
          onMouseLeave={() => setMaskIsHovered(false)}
        >
          <h1 className="font-bold text-8xl text-content-inverse">
            Hey, I'm Vini!
          </h1>
          <p className="mt-4 text-lg font-light text-content-inverse">
            I'm passionate about creating experiences that are engaging,
            accessible, and user-centric.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
