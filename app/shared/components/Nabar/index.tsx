import ThemeButton from "../ThemeButton";

export default function NavBar() {
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
          backdrop-blur-xs
        "
    >
      <div className="flex gap-12">
        <a className="cursor-pointer text-content" href="#home">
          Home
        </a>
        <a className="cursor-pointer text-content" href="#expertise">
          Expertise
        </a>
        <a className="cursor-pointer text-content" href="#techs">
          Techs
        </a>
        <a className="cursor-pointer text-content" href="#contact">
          Contact
        </a>
      </div>

      <ThemeButton />
    </header>
  );
}
