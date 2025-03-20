import ContactSection from "~/shared/components/ContactSection";
import TechSection from "~/shared/components/TechsSection";
import ExpertiseSection from "~/shared/components/ExpertiseSection";
import HomeSection from "~/shared/components/HomeSection";

export function Welcome() {
  return (
    <main
      className="
          background-grid
          h-screen
          snap-y snap-mandatory overflow-y-auto
      "
    >
      <HomeSection />

      <ExpertiseSection />

      <TechSection />

      <ContactSection />
    </main>
  );
}
