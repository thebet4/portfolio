export default function ContactSection() {
  const calendly = "https://calendly.com/barros-vinicius0103/30min";
  const linkedIn =
    "https://www.linkedin.com/in/vinicius-barros-da-silva-915082192/";
  const github = "https://github.com/thebet4";
  const email = "barros.vinicius0103@gmail.com";
  return (
    <section
      id="contact"
      className="h-full w-full flex flex-col items-center justify-center snap-center text-center"
    >
      <h1 className="font-bold text-8xl text-content">Let's Connect</h1>
      <p className="mt-8 text-lg font-light text-content max-w-[70vw]">
        Have a project in mind or just want to chat about tech? I’d love to hear
        from you! Whether it's building high-performance applications,
        discussing the latest in React, TypeScript, and AI, or brainstorming new
        ideas—let’s talk.
      </p>

      <ul className="text-content text-start mt-4">
        <li>📧 Email: {email}</li>
        <li>💼 LinkedIn: {linkedIn}</li>
        <li>🐙 GitHub: {github}</li>
      </ul>

      <p className="mt-8 max-w-[70vw]">
        Or just book a call through the button below—I’ll get back to you as
        soon as possible! 🚀
      </p>

      <a
        href={calendly}
        className="
          p-4 w-40
          border border-content rounded-lg
          text-content
          bg-background/20
          shadow-lg
          ring-1
          ring-black/5
          backdrop-blur-xs
          mt-16
        "
      >
        Book a call
      </a>
    </section>
  );
}
