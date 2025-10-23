import { Card } from './ui/card';
import { 
  Network, 
  Cloud, 
  Container, 
  Server, 
  Database, 
  GitBranch, 
  Shield, 
  Workflow 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Networking',
      icon: Network,
      skills: ['CCNA & CCNP', 'MikroTik (MTCNA, MTCRE, MTCSE)', 'OSPF, BGP, VLANs', 'VPN, Firewall, NAT', 'DMZ, IP Whitelisting'],
      color: 'text-primary',
    },
    {
      title: 'CI/CD & Automation',
      icon: Workflow,
      skills: ['Jenkins', 'GitHub Actions', 'SonarQube', 'Trivy', 'Terraform'],
      color: 'text-secondary',
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS (EKS, EC2, S3)', 'Azure', 'VMware', 'Synology NAS'],
      color: 'text-cyber-cyan',
    },
    {
      title: 'Containerization',
      icon: Container,
      skills: ['Docker', 'Kubernetes', 'Container Orchestration', 'Helm Charts'],
      color: 'text-primary',
    },
    {
      title: 'System Administration',
      icon: Server,
      skills: ['Linux (Ubuntu, CentOS)', 'Bash Scripting', 'Nginx, Apache', 'System Security'],
      color: 'text-secondary',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Optimization'],
      color: 'text-cyber-cyan',
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'GitLab', 'Branching Strategies'],
      color: 'text-primary',
    },
    {
      title: 'Security',
      icon: Shield,
      skills: ['Vulnerability Scanning', 'SSL/TLS', 'Security Hardening', 'Network Security'],
      color: 'text-secondary',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="text-primary">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for modern infrastructure and DevOps excellence
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">▹</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
