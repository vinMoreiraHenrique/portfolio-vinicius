import AboutSection from "@/components/AboutSection";
import Header from "@/components/Header";
import ProjectsSection from "@/components/ProjectsSection";
import WelcomeSection from "@/components/WelcomeSection";

export default function Home() {
  return (
    <main>
        <Header />
        <WelcomeSection />
        <AboutSection />  
        <ProjectsSection />
    </main>
  );
}
