import { Card } from './ui/card';
import { 
  Network, 
  Cloud, 
  Server, 
  Container, 
  Globe 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Network,
      title: 'Network Design & Configuration',
      description: 'Expert setup and configuration of enterprise networks using MikroTik and Cisco equipment. Specializing in VLANs, VPNs, OSPF/BGP routing, NAT, Firewall, and DMZ implementation.',
      technologies: ['MikroTik', 'Cisco', 'OSPF', 'BGP', 'VPN'],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps Solutions',
      description: 'Build and optimize CI/CD pipelines with Jenkins and GitHub Actions. Deploy scalable applications on AWS with infrastructure as code using Terraform.',
      technologies: ['AWS', 'Jenkins', 'Terraform', 'GitHub'],
    },
    {
      icon: Server,
      title: 'System Administration & Security',
      description: 'Comprehensive Linux system administration, Bash scripting automation, and security hardening with Trivy vulnerability scanning and best practices implementation.',
      technologies: ['Linux', 'Bash', 'Trivy', 'Security'],
    },
    {
      icon: Container,
      title: 'Containerization & Orchestration',
      description: 'Design and manage containerized applications with Docker. Orchestrate complex deployments using Kubernetes for high availability and scalability.',
      technologies: ['Docker', 'Kubernetes', 'EKS', 'Helm'],
    },
    {
      icon: Globe,
      title: 'Web & Server Management',
      description: 'Deploy and manage web applications with Nginx and Apache. Expert in WordPress, PHP, and database administration with MySQL, PostgreSQL, and MongoDB.',
      technologies: ['Nginx', 'Apache', 'WordPress', 'MySQL'],
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Comprehensive solutions for modern infrastructure challenges
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary inline-block mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
