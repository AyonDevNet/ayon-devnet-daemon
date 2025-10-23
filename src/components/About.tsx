import { Card } from './ui/card';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '50+' },
    { label: 'Technologies', value: '20+' },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate DevOps, Cloud, and Network Engineer with deep expertise in 
              automation, CI/CD pipelines, and building scalable, secure, and resilient 
              infrastructures.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience spans across network protocols like <span className="text-primary font-mono">OSPF</span>, 
              <span className="text-primary font-mono"> BGP</span>, and <span className="text-primary font-mono">VLANs</span>, 
              cloud platforms like <span className="text-primary font-mono">AWS</span> and 
              <span className="text-primary font-mono"> Azure</span>, and container orchestration with 
              <span className="text-primary font-mono"> Docker</span> and <span className="text-primary font-mono"> Kubernetes</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on solving complex infrastructure challenges and optimizing deployment 
              workflows. Whether it's designing enterprise networks, implementing automated 
              CI/CD pipelines, or architecting cloud-native solutions, I bring precision and 
              innovation to every project.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-bold text-primary group-hover:text-secondary transition-colors">
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                  <div className="w-2 h-16 bg-primary group-hover:bg-secondary transition-colors rounded-full"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
