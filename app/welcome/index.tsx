import ContactSection from "~/shared/components/ContactSection";
import ExperienceSection from "~/shared/components/ExperienceSection";
import ExpertiseSection from "~/shared/components/ExpertiseSection";
import HomeSection from "~/shared/components/HomeSection";

export function Welcome() {
  return (
    <main
      className="
          background-grid
          bg-cover bg-center bg-fixed bg-repeat
          px-10 py-6
          h-screen
          snap-y snap-mandatory overflow-y-auto
      "
    >
      <HomeSection />

      <ExpertiseSection />

      <ExperienceSection />

      <ContactSection />
    </main>
  );
}
