import { useTheme } from "../contexts/themeContext";

export default function NavBar() {
  const { handleUpdateTheme, getTheme } = useTheme();

  return (
    <header
      className="
          z-20
          flex justify-center items-center 
          w-full h-20 
          fixed top-0 
          bg-background/20
          shadow-lg
          ring-1
          ring-black/5
          backdrop-blur-md
        "
    >
      <div className="flex gap-12">
        <a className="cursor-pointer text-content" href="#home">
          Home
        </a>
        <a className="cursor-pointer text-content" href="#expertise">
          Expertise
        </a>
        <a className="cursor-pointer text-content" href="#experience">
          Experience
        </a>
        <a className="cursor-pointer text-content" href="#contact">
          Contact
        </a>
      </div>

      <button
        onClick={handleUpdateTheme}
        className="
            cursor-pointer 
            fixed right-10 
            p-4 
            border rounded-lg border-border hover:bg-card
            text-content
          "
      >
        {getTheme()}
      </button>
    </header>
  );
}
