import { useTheme } from "~/shared/contexts/themeContext";
import { motion as m } from "framer-motion";

export default function ThemeButton() {
  const { handleUpdateTheme, getTheme } = useTheme();
  const theme = getTheme();

  const sunPath =
    "M47 65.3333C57.1252 65.3333 65.3334 57.1252 65.3334 47C65.3334 36.8748 57.1252 28.6667 47 28.6667C36.8748 28.6667 28.6667 36.8748 28.6667 47C28.6667 57.1252 36.8748 65.3333 47 65.3333Z";

  const moonPath =
    "M47 65.3333C57.1252 65.3333 65.3334 57.1252 65.3334 47C48.3928 53.5521 39.4327 46.0853 47 28.6667C36.8748 28.6667 28.6667 36.8748 28.6667 47C28.6667 57.1252 36.8748 65.3333 47 65.3333Z";

  const raysVariants = {
    hidden: {
      strokeOpacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    visible: {
      strokeOpacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const rayVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
      scale: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        pathLength: { durantion: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.3 },
      },
    },
  };

  const shineVariant = {
    hidden: {
      opacity: 0,
      scale: 2,
      strokeDasharray: "20, 1000",
      strokeDashoffset: 0,
      filter: "blur(0px)",
    },
    visible: {
      opacity: [0, 1, 0],
      strokeDashoffset: [0, -50, -100],
      filter: ["blur(2px)", "blur(2px)", "blur(0px)"],
      transition: {
        duration: 0.75,
        ease: "linear",
      },
    },
  };

  return (
    <button
      onClick={handleUpdateTheme}
      className="
        cursor-pointer 
        fixed right-10 
        border-1
        border-border
        rounded-md
        p-2
      "
    >
      <m.svg
        strokeWidth="4"
        strokeLinecap="round"
        width={32}
        height={32}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <m.path
          variants={shineVariant}
          d={moonPath}
          className={"absolute top-0 left-0 stroke-blue-100 "}
          initial="hidden"
          animate={theme === "dark" ? "visible" : "hidden"}
        />

        <m.g
          variants={raysVariants}
          initial="hidden"
          animate={theme === "light" ? "visible" : "hidden"}
          className="stroke-6 stroke-yellow-600 "
          style={{ strokeLinecap: "round" }}
        >
          <m.path
            className="origin-center"
            variants={rayVariants}
            d="M50 2V11"
          />
          <m.path variants={rayVariants} d="M85 15L78 22" />
          <m.path variants={rayVariants} d="M98 50H89" />
          <m.path variants={rayVariants} d="M85 85L78 78" />
          <m.path variants={rayVariants} d="M50 98V89" />
          <m.path variants={rayVariants} d="M23 78L16 84" />
          <m.path variants={rayVariants} d="M11 50H2" />
          <m.path variants={rayVariants} d="M23 23L16 16" />
        </m.g>

        <m.path
          d={sunPath}
          fill="transparent"
          transition={{ duration: 1, type: "spring" }}
          initial={{ fillOpacity: 0, strokeOpacity: 0 }}
          animate={
            theme === "dark"
              ? {
                  d: moonPath,
                  rotate: -360,
                  scale: 2,
                  stroke: "var(--color-blue-400)",
                  fill: "var(--color-blue-400)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                  transition: { delay: 0.1 },
                }
              : {
                  d: sunPath,
                  rotate: 0,
                  stroke: "var(--color-yellow-600)",
                  fill: "var(--color-yellow-600)",
                  fillOpacity: 0.35,
                  strokeOpacity: 1,
                }
          }
        />
      </m.svg>
    </button>
  );
}
