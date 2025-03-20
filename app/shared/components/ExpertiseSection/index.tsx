export default function ExpertiseSection() {
  const CARDS = [
    {
      title: "Web Development",
      description:
        "Crafting fast, modern, and scalable web applications using React.js, Next.js, and TypeScript. I specialize in performance optimization, SSR/SSG, and user-friendly interfaces, ensuring an exceptional experience across all devices. Passionate about a11y, animations, and UX best practices.",
    },
    {
      title: "Mobile Development",
      description:
        "Building seamless, high-performance mobile experiences with React Native. From intuitive UI to optimized performance, I create scalable apps that feel native across iOS and Android. Focused on accessibility, smooth animations, and state management with Redux, Zustand, and React Query.",
    },
  ];

  return (
    <section
      id="expertise"
      className="h-full w-full flex flex-col items-center justify-center snap-center text-center"
    >
      <h1 className="font-bold text-8xl text-content">Expertise</h1>
      <p className="mt-4 text-lg font-light text-content max-w-[70vw]">
        I specialize in crafting high-performance, user-centric web and mobile
        applications using modern JavaScript technologies. With over five years
        of experience, I have built scalable and optimized solutions across
        diverse industries.
      </p>

      <li className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-4">
        {CARDS.map(({ title, description }) => {
          return (
            <ul
              key={title}
              className="
                  w-[40vw] p-4 rounded-lg
                  hover:scale-105 duration-300
                  bg-background/20
                  shadow-lg
                  ring-1
                  ring-black/5
                  backdrop-blur-xs
                "
            >
              <p
                className="
                    text-content text-2xl font-bold
                  "
              >
                {title}
              </p>
              <p
                className="
                  text-content text-sm
                "
              >
                {description}
              </p>
            </ul>
          );
        })}
      </li>
    </section>
  );
}
