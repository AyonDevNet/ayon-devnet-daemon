import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Amazon Prime Clone',
      subtitle: 'Fullstack + DevOps Automation',
      description: 'Complete full-stack clone with comprehensive DevOps pipeline including Docker containerization, Kubernetes orchestration on EKS, automated CI/CD with Jenkins, infrastructure as code with Terraform, and monitoring with Prometheus and Grafana. Includes security scanning with Trivy.',
      technologies: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'AWS EKS', 'Prometheus', 'Grafana', 'Trivy'],
      github: 'https://github.com/AyonDevNet/amazon-prime-Clone',
      highlight: true,
    },
    {
      title: 'WordPress Deployment',
      subtitle: 'Nginx, SSL & Custom Domain',
      description: 'Step-by-step production-ready WordPress deployment on Ubuntu 22.04 with Nginx web server, MySQL database, PHP configuration, SSL certificate implementation, and custom domain setup. Deployed on VMware for high availability.',
      technologies: ['WordPress', 'Nginx', 'MySQL', 'PHP', 'SSL', 'Ubuntu', 'VMware'],
      github: 'https://github.com/AyonDevNet/-WordPress_Nginx_Ubuntu-22.04',
      highlight: false,
    },
    {
      title: 'MikroTik IKEv2 VPN Server',
      subtitle: 'Secure VPN Infrastructure',
      description: 'Complete VPN infrastructure setup with MikroTik RouterOS configured as IKEv2 VPN server and Ubuntu StrongSwan client configuration. Includes certificate management, secure tunnel establishment, and routing configuration.',
      technologies: ['MikroTik', 'RouterOS', 'IKEv2', 'StrongSwan', 'Ubuntu', 'VPN', 'Network Security'],
      github: 'https://github.com/AyonDevNet/mikrotik-vpn-ikev2-Ubuntu-server',
      highlight: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real-world implementations showcasing DevOps, Cloud, and Network expertise
        </p>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-8 bg-card border-border hover:border-primary transition-all duration-300 animate-fade-in ${
                project.highlight ? 'border-primary/50' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-4">
                  <div>
                    {project.highlight && (
                      <span className="inline-block px-3 py-1 text-xs font-mono bg-primary/20 text-primary rounded-full mb-2">
                        Featured Project
                      </span>
                    )}
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary font-mono text-sm">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-mono bg-muted text-foreground rounded border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-3">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 w-full"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10"
          >
            <a href="https://github.com/AyonDevNet" target="_blank" rel="noopener noreferrer">
              View All Projects on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
