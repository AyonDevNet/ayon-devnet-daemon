import { Button } from './ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-muted-foreground text-lg font-mono">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="text-[hsl(var(--cyber-cyan))]">R-Rafi Mohammed</span>{" "}
                <span className="text-foreground">Ayon</span>
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              DevOps, Cloud & Network Engineer
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl">
              Automating and Optimizing Modern Infrastructures with expertise in CI/CD, Cloud Architecture, and Network Design.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/AyonDevNet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ahamed-ayon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:mohammedayon2021@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-glow-pulse"></div>
              <div className="relative rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-cyber-cyan animate-float">
                <img
                  src={profilePicture}
                  alt="R-Rafi Mohammed Ayon"
                  className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 opacity-60">
          {['Docker', 'Kubernetes', 'AWS', 'Jenkins', 'Linux', 'MikroTik', 'Cisco'].map((tech) => (
            <span key={tech} className="text-sm font-mono text-muted-foreground">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
