import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink, Server, Cloud, Code2, Database, Lock, GitBranch } from "lucide-react";

export default function App() {
  const [terminalComplete, setTerminalComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  const terminalLines = [
    "$ docker build -t vipin-portfolio .",
    "Building image... ✓",
    "$ docker run -d -p 80:80 vipin-portfolio",
    "Container started ✓",
    "$ kubectl apply -f deployment.yaml",
    "deployment.apps/vipin-portfolio created ✓",
    "$ CI/CD pipeline triggered...",
    "Deployment successful ✓"
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalComplete(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-blue)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_var(--color-orange)_0%,_transparent_50%)] opacity-20 pointer-events-none" />

      <Hero
        terminalLines={terminalLines}
        terminalComplete={terminalComplete}
        heroOpacity={heroOpacity}
        heroY={heroY}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />

      <About />
      <Skills />
      <Experience />
      <Projects />
      <DevOpsSection />
      <Achievements />
      <Contact />

      <footer className="relative border-t border-white/10 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          Built with React, Tailwind & Motion • Deployed with Docker & Kubernetes
        </div>
      </footer>
    </div>
  );
}

function Hero({ terminalLines, terminalComplete, heroOpacity, heroY, scrollToProjects, scrollToContact }: any) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="absolute inset-0 bg-gradient-to-br from-orange/5 to-blue/5" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-orange/20 to-blue/20 border border-orange/30 mb-6"
            >
              <span className="bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent font-mono">
                Available for Opportunities
              </span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent tracking-tight" style={{ fontWeight: 700, lineHeight: 1.1 }}>
              Vipin Sharma
            </h1>

            <p className="text-2xl lg:text-3xl mb-6 text-muted-foreground" style={{ fontWeight: 500 }}>
              BTech CSE Student | DevOps Enthusiast | Founder
            </p>

            <p className="text-xl mb-4 text-orange" style={{ fontWeight: 600 }}>
              "Building scalable systems, automating workflows, and shipping real-world tech products."
            </p>

            <p className="text-lg mb-8 text-muted-foreground max-w-xl leading-relaxed">
              Final-year BTech CSE student (CGPA: 8.33) focused on DevOps and system design, combining engineering with startup execution to build and deploy real-world applications.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 107, 53, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToProjects}
                className="px-8 py-3 bg-gradient-to-r from-orange to-orange/80 rounded-lg transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/30 to-blue/30 rounded-2xl blur-3xl" />
                <div className="relative bg-gradient-to-br from-orange/10 to-blue/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-orange to-blue flex items-center justify-center text-8xl">
                    VS
                  </div>
                </div>
              </div>

              <FloatingCard delay={0.6} className="absolute -top-4 -right-4">
                <div className="text-sm text-muted-foreground">CGPA</div>
                <div className="text-3xl bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent" style={{ fontWeight: 700 }}>8.33</div>
              </FloatingCard>

              <FloatingCard delay={0.8} className="absolute -bottom-4 -left-4">
                <div className="text-sm text-muted-foreground">Graduating</div>
                <div className="text-3xl bg-gradient-to-r from-blue to-orange bg-clip-text text-transparent" style={{ fontWeight: 700 }}>2026</div>
              </FloatingCard>

              <FloatingCard delay={1} className="absolute top-1/2 -right-8 -translate-y-1/2">
                <div className="text-sm text-muted-foreground">Founder @</div>
                <div className="text-xl text-white" style={{ fontWeight: 600 }}>Duoverse</div>
              </FloatingCard>
            </div>

            {!terminalComplete && (
              <TerminalOverlay lines={terminalLines} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalOverlay({ lines }: { lines: string[] }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    lines.forEach((line, index) => {
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, line]);
      }, index * 500);
    });
  }, [lines]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute inset-0 bg-black/90 backdrop-blur-md rounded-2xl p-6 font-mono text-sm z-20"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-2 text-muted-foreground">terminal</span>
      </div>
      <div className="space-y-2">
        {displayedLines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={line.includes("✓") ? "text-green-400" : "text-blue-400"}
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function FloatingCard({ children, delay, className }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`bg-glass-bg backdrop-blur-md border border-glass-border rounded-xl p-4 ${className}`}
    >
      {children}
    </motion.div>
  );
}

function About() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl mb-8 text-center" style={{ fontWeight: 700 }}>About</h2>
          <GlassCard>
            <p className="text-lg leading-relaxed text-muted-foreground">
              BTech CSE student focused on <span className="text-orange">DevOps</span>, <span className="text-blue">cloud</span>, and <span className="text-white">scalable systems</span>. Founder & CEO of <span className="text-orange" style={{ fontWeight: 600 }}>Duoverse Technologies Pvt Ltd</span> with experience building real-world solutions from idea to deployment. Strong focus on ownership, execution, and practical learning.
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function Skills() {
  const skillCategories = [
    {
      title: "DevOps",
      icon: <Server className="w-6 h-6" />,
      skills: ["Docker", "Kubernetes (Basics)", "CI/CD"],
      color: "orange"
    },
    {
      title: "Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS EC2", "S3", "IAM"],
      color: "blue"
    },
    {
      title: "Backend",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Node.js", "Express.js"],
      color: "orange"
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6" />,
      skills: ["MongoDB"],
      color: "blue"
    },
    {
      title: "Auth/APIs",
      icon: <Lock className="w-6 h-6" />,
      skills: ["REST APIs", "JWT", "OAuth"],
      color: "orange"
    },
    {
      title: "Tools",
      icon: <GitBranch className="w-6 h-6" />,
      skills: ["Git", "GitHub", "Linux"],
      color: "blue"
    }
  ];

  return (
    <section className="relative py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl mb-16 text-center"
          style={{ fontWeight: 700 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="h-full">
                <div
                  className="inline-flex p-3 rounded-lg mb-4"
                  style={{
                    backgroundColor: category.color === "orange" ? "rgba(255, 107, 53, 0.1)" : "rgba(59, 130, 246, 0.1)",
                    borderWidth: "1px",
                    borderColor: category.color === "orange" ? "rgba(255, 107, 53, 0.2)" : "rgba(59, 130, 246, 0.2)"
                  }}
                >
                  <div style={{ color: category.color === "orange" ? "#ff6b35" : "#3b82f6" }}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl mb-3" style={{ fontWeight: 600 }}>{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      title: "Founder & CEO",
      company: "Duoverse Technologies",
      points: [
        "Built and led tech solutions from idea to deployment",
        "Worked on backend systems and integrations",
        "Experience in system design and real-world execution"
      ]
    },
    {
      title: "Operations & Execution",
      company: "CredResolve",
      points: [
        "Contributed to operations and execution workflows",
        "Improved efficiency and team coordination",
        "Exposure to real-world business systems"
      ]
    },
    {
      title: "Promotion & Marketing Head",
      company: "Coding Blocks",
      points: [
        "Led campaigns, outreach, and team coordination",
        "Increased engagement and participation"
      ]
    }
  ];

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl mb-16 text-center"
          style={{ fontWeight: 700 }}
        >
          Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover>
                <h3 className="text-2xl mb-2" style={{ fontWeight: 600 }}>{exp.title}</h3>
                <p className="text-lg text-orange mb-4" style={{ fontWeight: 500 }}>{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-orange mt-1">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "SCOPE (Android App)",
      description: "Real-time bus tracking system with multi-module architecture including attendance, safety, and tracking features. Built for scalability and real-world deployment.",
      tech: ["Android", "Real-time Tracking", "Multi-module Architecture"],
      gradient: "from-orange to-orange/60"
    },
    {
      title: "Restaurant Platform",
      description: "Full-stack restaurant management and ordering platform with integrated payment processing and location services.",
      tech: ["React", "Node.js", "MongoDB", "Razorpay", "Google Places API", "JWT", "OAuth"],
      gradient: "from-blue to-blue/60"
    },
    {
      title: "TryHackMe Lab",
      description: "Comprehensive multi-step attack simulation demonstrating web exploitation, lateral movement, and Active Directory privilege escalation.",
      tech: ["Web Exploitation", "Lateral Movement", "AD Escalation"],
      gradient: "from-orange to-blue"
    }
  ];

  return (
    <section id="projects" className="relative py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl mb-16 text-center"
          style={{ fontWeight: 700 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: any) {
  const getGradientStyle = (gradient: string) => {
    if (gradient.includes("orange to orange")) {
      return { backgroundImage: "linear-gradient(to right, #ff6b35, rgba(255, 107, 53, 0.6))" };
    } else if (gradient.includes("blue to blue")) {
      return { backgroundImage: "linear-gradient(to right, #3b82f6, rgba(59, 130, 246, 0.6))" };
    } else {
      return { backgroundImage: "linear-gradient(to right, #ff6b35, #3b82f6)" };
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <GlassCard className="h-full flex flex-col group">
        <div
          className="h-2 w-full rounded-t-xl -mt-6 -mx-6 mb-6"
          style={getGradientStyle(project.gradient)}
        />

        <h3 className="text-2xl mb-3 group-hover:text-orange transition-colors duration-300" style={{ fontWeight: 600 }}>
          {project.title}
        </h3>

        <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

function DevOpsSection() {
  const devopsSkills = [
    "CI/CD pipelines",
    "Docker containerization",
    "Kubernetes basics",
    "AWS deployments",
    "Infrastructure and scalability"
  ];

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl mb-8 text-center" style={{ fontWeight: 700 }}>DevOps Journey</h2>
          <GlassCard>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-r from-orange to-blue">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl" style={{ fontWeight: 600 }}>Currently Exploring</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {devopsSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange to-blue" />
                  <span className="text-muted-foreground">{skill}</span>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function Achievements() {
  const achievements = [
    { title: "CGPA", value: "8.33", icon: "🎓" },
    { title: "Founder of Duoverse", value: "Tech Leader", icon: "🚀" },
    { title: "Leadership Roles", value: "Multiple", icon: "👥" },
    { title: "Organized Funtech Event", value: "Success", icon: "🎉" }
  ];

  return (
    <section className="relative py-24 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl mb-16 text-center"
          style={{ fontWeight: 700 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="text-center">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="text-lg mb-2 text-muted-foreground">{achievement.title}</h3>
                <p className="text-2xl bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent" style={{ fontWeight: 700 }}>
                  {achievement.value}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "vipinkaushik612@gmail.com",
      href: "mailto:vipinkaushik612@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "vipin-sharma0102",
      href: "https://www.linkedin.com/in/vipin-sharma0102/"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "vipin612",
      href: "https://github.com/vipin612"
    }
  ];

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl mb-8" style={{ fontWeight: 700 }}>Let's Connect</h2>
          <p className="text-3xl mb-12 bg-gradient-to-r from-orange to-blue bg-clip-text text-transparent" style={{ fontWeight: 600 }}>
            "Let's build scalable systems together."
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="block"
              >
                <GlassCard hover className="text-center group">
                  <div className="inline-flex p-4 rounded-lg bg-gradient-to-r from-orange/10 to-blue/10 border border-orange/20 mb-4 group-hover:from-orange/20 group-hover:to-blue/20 transition-all duration-300">
                    <div className="text-orange group-hover:text-blue transition-colors duration-300">
                      {link.icon}
                    </div>
                  </div>
                  <h3 className="text-lg mb-2 text-muted-foreground">{link.label}</h3>
                  <p className="text-white break-all" style={{ fontWeight: 500 }}>{link.value}</p>
                  <ExternalLink className="w-4 h-4 inline ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </GlassCard>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GlassCard({ children, className = "", hover = false }: any) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, boxShadow: "0 20px 60px rgba(255, 107, 53, 0.2)" } : {}}
      className={`bg-glass-bg backdrop-blur-md border border-glass-border rounded-xl p-6 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
