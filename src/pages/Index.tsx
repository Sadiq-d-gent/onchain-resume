import { ParticleBackground } from '@/components/ParticleBackground';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { OnchainSection } from '@/components/OnchainSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background */}
      <ParticleBackground />
      
      {/* Background grid overlay */}
      <div className="fixed inset-0 bg-grid opacity-30 pointer-events-none" />
      
      {/* Gradient orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <OnchainSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
