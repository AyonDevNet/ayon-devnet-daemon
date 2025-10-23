import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-6">
            <a
              href="https://github.com/AyonDevNet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahamed-ayon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mohammedayon2021@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground font-mono">
              Built with <span className="text-primary">React</span>, <span className="text-primary">TypeScript</span>, and <span className="text-primary">Tailwind CSS</span>
            </p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} R-Rafi Mohammed Ayon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
