import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  ChevronDown,
  MapPin,
  Briefcase,
  Calendar,
  Code,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const Index = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "TypeScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Material UI", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "ASP.NET", category: "Backend" },
    { name: "Django", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "MySQL", category: "Database" },
    { name: "Python", category: "Tools" },
    { name: "C", category: "Tools" },
    { name: "Git", category: "Tools" },
    { name: "Vercel", category: "Tools" },
  ];

  const projects = [
    {
      title: "Presentation Prefix (AI-Driven)",
      description:
        "Full-stack MERN application with AI-driven video analysis featuring facial expression detection, body language analysis, and voice modulation using machine learning models.",
      tech: ["React.js", "Node.js", "MongoDB", "Python", "Material UI"],
      link: "#",
      github: "https://github.com/AMoizKhan",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Real-time chat application supporting 100+ concurrent users with secure messaging, user authentication, and deployed on Vercel.",
      tech: ["React.js", "Node.js", "Socket.IO", "MongoDB"],
      link: "#",
      github: "https://github.com/AMoizKhan",
    },
    {
      title: "E-Commerce Platform Frontend",
      description:
        "Responsive e-commerce frontend with product filtering and search functionality, improving page load time by 15% and enhancing user experience.",
      tech: ["Next.js", "Material UI", "TypeScript"],
      link: "#",
      github: "https://github.com/AMoizKhan",
    },
    {
      title: "Pet Food Recommendation UI",
      description:
        "Intuitive UI for a pet food recommendation platform with integrated recommendation algorithms, increasing user engagement by 10%.",
      tech: ["React.js", "Material UI", "JavaScript"],
      link: "#",
      github: "https://github.com/AMoizKhan",
    },
  ];

  const experience = [
    {
      title: "Frontend Developer",
      company: "Fiverr | Upwork",
      period: "Jan 2021 - Present",
      description:
        "Developed 15+ responsive web applications using React.js, Next.js, and Material UI. Deployed 10+ projects on Vercel, reducing site errors by 40% through debugging and optimization.",
    },
    {
      title: "Junior Software Developer",
      company: "Siccotel",
      period: "Aug 2024 - Nov 2024",
      description:
        "Built dynamic web applications using React.js, Node.js, and MongoDB, improving user engagement by 25%. Reduced application bugs by 30% through TypeScript optimizations.",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleResumeDownload = () => {
    // Download the actual resume file
    const resumeUrl =
      "https://cdn.builder.io/api/v1/assets/19abc20a9b22447183d41b2dafed2e08/software-engineer-ii-467cf5";

    // Create a temporary link element and trigger download
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Abdul_Moiz_Khan_Resume.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {["about", "skills", "experience", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="capitalize hover:text-primary transition-colors font-medium"
                  >
                    {item}
                  </button>
                ),
              )}
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90"
                onClick={handleResumeDownload}
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden mt-4 py-4 border-t bg-background/95 backdrop-blur-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-col gap-4">
                {["about", "skills", "experience", "projects", "contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="capitalize hover:text-primary transition-colors font-medium text-left"
                    >
                      {item}
                    </button>
                  ),
                )}
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 w-fit"
                  onClick={handleResumeDownload}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <motion.p
                  className="text-lg text-muted-foreground font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hello, I'm
                </motion.p>
                <motion.h1
                  className="text-5xl lg:text-7xl font-bold tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Abdul Moiz Khan
                </motion.h1>
                <motion.p
                  className="text-xl lg:text-2xl text-muted-foreground max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Frontend Developer | MERN Stack | React.js | Node.js | Next.js
                </motion.p>
              </div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open("https://github.com/AMoizKhan", "_blank")
                  }
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open(
                      "https://linkedin.com/in/abdul-moiz-khan-3835141b3",
                      "_blank",
                    )
                  }
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="hover:bg-primary hover:text-primary-foreground"
                  onClick={() =>
                    window.open("mailto:kabdulmoiz087@gmail.com", "_blank")
                  }
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-6" />
                <div className="absolute inset-0 bg-gradient-to-tr from-accent to-primary rounded-3xl transform -rotate-6 opacity-60" />
                <img
                  src="https://cdn.builder.io/api/v1/assets/19abc20a9b22447183d41b2dafed2e08/1746167394944-3a9e54?format=webp&width=800"
                  alt="Abdul Moiz Khan - Professional Portrait"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Front-end developer with over 3 years of experience building
              responsive, user-friendly web applications using React.js,
              Next.js, Node.js, and MongoDB. Proficient in creating seamless
              user experiences with modern frameworks like Material UI and
              deployment platforms like Vercel. Successfully delivered 20+
              projects, including e-commerce platforms and AI-driven
              applications.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">Karachi, Pakistan</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Experience</h3>
                  <p className="text-muted-foreground">3+ Years</p>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0 text-center space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold">Availability</h3>
                  <p className="text-muted-foreground">Open to work</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Skills & Technologies
              </h2>
              <p className="text-xl text-muted-foreground">
                Technologies I work with to bring ideas to life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "Frontend")
                    .map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="py-1 px-3"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "Backend")
                    .map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="py-1 px-3"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Database</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "Database")
                    .map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="py-1 px-3"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Tools</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills
                    .filter((skill) => skill.category === "Tools")
                    .map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className="py-1 px-3"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">Experience</h2>
              <p className="text-xl text-muted-foreground">
                My professional journey and key achievements
              </p>
            </div>

            <div className="space-y-8">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{job.title}</h3>
                          <p className="text-primary font-medium">
                            {job.company}
                          </p>
                        </div>
                        <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                          {job.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Featured Projects
              </h2>
              <p className="text-xl text-muted-foreground">
                Some of my recent work and side projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                onClick={() =>
                  window.open("mailto:kabdulmoiz087@gmail.com", "_blank")
                }
              >
                <Mail className="h-5 w-5 mr-2" />
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("tel:+923021587532", "_blank")}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Call Me
              </Button>
            </div>
            <div className="flex justify-center gap-6 pt-8">
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() =>
                  window.open("https://github.com/AMoizKhan", "_blank")
                }
              >
                <Github className="h-6 w-6" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/abdul-moiz-khan-3835141b3",
                    "_blank",
                  )
                }
              >
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() =>
                  window.open("mailto:kabdulmoiz087@gmail.com", "_blank")
                }
              >
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Abdul Moiz Khan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
