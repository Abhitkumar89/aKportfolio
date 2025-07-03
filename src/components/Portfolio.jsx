import React, { useState, useEffect } from 'react';
import TypingAnimation from '../components/TypingAnimation';
import AbhitImg from '../assets/Abhit_Image.jpg';
import { motion } from 'framer-motion';

import { Github, Linkedin, Instagram, Mail, ExternalLink, Code, User, Briefcase, MessageCircle, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const fullText = "Hi, I'm Abhit Kumar";

  useEffect(() => {
    window.scrollTo(0, 0);

    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowSubtitle(true), 500);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    if (sectionId === 'resume') {
      window.open('https://drive.google.com/file/d/1wb59e0J_8ty_m6hQ4Tbu94FrMghxCpgg/view?usp=drive_link', '_blank');
      return;
    }

    if (sectionId === 'about-me') {
      sectionId = 'about';
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }
  };

  const techStack = [
    { name: 'HTML5', color: 'from-orange-500 to-orange-600', icon: '🌐' },
    { name: 'CSS3', color: 'from-blue-500 to-blue-600', icon: '🎨' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', icon: '⚡' },
    { name: 'React.js', color: 'from-cyan-400 to-cyan-500', icon: '⚛️' },
    { name: 'Next.js', color: 'from-gray-800 to-black', icon: '🚀' },
    { name: 'Tailwind CSS', color: 'from-teal-400 to-teal-500', icon: '💨' },
    { name: 'Express.js', color: 'from-green-500 to-green-600', icon: '🖥️' },
    { name: 'MongoDB', color: 'from-green-400 to-green-500', icon: '🍃' },
    { name: 'Git', color: 'from-red-500 to-red-600', icon: '📝' },
    { name: 'GitHub', color: 'from-gray-700 to-gray-800', icon: '🐱' },
    { name: 'VS Code', color: 'from-blue-500 to-blue-600', icon: '💻' },
    { name: 'DSA', color: 'from-pink-500 to-rose-500', icon: '🧠' }
  ];

  // const projects = [
  //   {
  //     name: "MoveOn-The Ride Sharing",
  //     Image:"https://img.freepik.com/free-vector/taxi-app-concept_23-2148485646.jpg",
  //     description: "MoveOn - Uber Clone Full-stack ride-sharing app built with MERN stack and Tailwind CSS. Features Google Maps integration for live tracking and route plotting, Socket.IO for real-time ride updates, JWT authentication, and GSAP animations for smooth user experience.",
  //     technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
  //     liveDemo: "#",
  //     github: "https://github.com/Abhitkumar89/MoveOn"
  //   },
  //   {
  //     name: "Password Generator",
  //     Image:"https://camo.githubusercontent.com/fb3697588afd8a0089f496768316da8d29ab1eecea920e41bde36d63ff870785/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3151435964475f58723363684e65444865704d374265335a7646676a4470647836",
  //     description: "Password Generator JavaScript-based tool with customizable length, special character options, and one-click copy functionality. Features responsive design for optimal user experience across devices.",
  //     technologies: ["JavaScript", "HTML", "CSS"],
  //     liveDemo: "https://unrivaled-marshmallow-e87e14.netlify.app/",
  //     github: "https://github.com/Abhitkumar89/PassWordGenerator"
  //   },
  //   {
  //     name: "Razorpay Clone",
  //     Image:"https://media.licdn.com/dms/image/v2/D4D12AQHOUIZww-P8_A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703780349476?e=2147483647&v=beta&t=vfTqyjuz75mDKCWLqhlQV0mCcPUgd9Blb8yMQmueEhI",
  //     description: "Modern chat application with AI integration, real-time messaging, beautiful UI/UX, and smart conversation features.",
  //     technologies: ["HTML", "TailwindCSS"],
  //     liveDemo: "#",
  //     github: "https://github.com/Abhitkumar89/Razor_Pay_Clone_Tailwind"
  //   },
  // ];

  const projects = [
  {
    name: "MoveOn-The Ride Sharing",
    Image: "https://img.freepik.com/free-vector/taxi-app-concept_23-2148485646.jpg",
    description: "A full-stack ride-sharing app like Uber with live tracking, real-time updates, JWT auth, and smooth animations.",
    technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    liveDemo: "#",
    github: "https://github.com/Abhitkumar89/MoveOn"
  },
  {
    name: "Password Generator",
    Image: "https://camo.githubusercontent.com/fb3697588afd8a0089f496768316da8d29ab1eecea920e41bde36d63ff870785/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d3151435964475f58723363684e65444865704d374265335a7646676a4470647836",
    description: "A responsive password generator with custom length, special characters, and one-click copy feature.",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveDemo: "https://unrivaled-marshmallow-e87e14.netlify.app/",
    github: "https://github.com/Abhitkumar89/PassWordGenerator"
  },
  {
    name: "Razorpay Clone",
    Image: "https://media.licdn.com/dms/image/v2/D4D12AQHOUIZww-P8_A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1703780349476?e=2147483647&v=beta&t=vfTqyjuz75mDKCWLqhlQV0mCcPUgd9Blb8yMQmueEhI",
    description: "A sleek Razorpay landing page clone using Tailwind CSS for styling and responsiveness.",
    technologies: ["HTML", "TailwindCSS"],
    liveDemo: "#",
    github: "https://github.com/Abhitkumar89/Razor_Pay_Clone_Tailwind"
  }
  ];


  const navigationItems = [
    { name: 'Tech Stack', id: 'tech-stack' },
    { name: 'Projects', id: 'projects' },
    { name: 'Resume', id: 'resume' },
    { name: 'Ping Me', id: 'ping-me' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 z-50 shadow-xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo/Brand */}
            <div className="flex items-center">

            <button
              onClick={() => scrollToSection('about-me')}
              className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 
                bg-gradient-to-br from-cyan-700/20 via-purple-800/20 to-pink-700/20 
                hover:from-cyan-600/30 hover:to-pink-600/30 
                border border-purple-500/30 
                backdrop-blur-md shadow-md group"
            >
              <span className="relative z-10">About Me</span>

              {/* Underline on hover */}
              <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full group-hover:w-6 transition-all duration-300"></span>
            </button>


            </div>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center space-x-3 rounded-full px-6 py-3 ">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-6 py-3 text-lg font-semibold text-white rounded-full overflow-hidden transition-all duration-300 
                      bg-gradient-to-br from-cyan-700/20 via-purple-800/20 to-pink-700/20 
                      hover:from-cyan-600/30 hover:to-pink-600/30 
                      border border-purple-500/30 
                      backdrop-blur-md shadow-md group"
                  >
                    <span className="relative z-10">{item.name}</span>

                    {/* Underline on hover */}
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 
                      bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full 
                      group-hover:w-6 transition-all duration-300">
                    </span>
                  </button>
                ))}

              </div>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-3 rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-purple-500/20 py-4">
              <div className="flex flex-col space-y-2 px-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          className="space-y-8 pl-6 md:pl-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {typedText}
                <span className="animate-pulse text-cyan-400">|</span>
              </span>
            </h1>

            <motion.div
              className={`transition-all duration-1000 ease-out ${
                showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <TypingAnimation />
            </motion.div>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
            Passionate about creating beautiful, functional web applications that solve real-world problems.
            I transform complex challenges into elegant, user-friendly solutions through innovative code.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Abhitkumar89"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 border border-white/10 hover:border-white/20"
            >
              <Github size={28} className="text-white group-hover:text-cyan-400 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/abhit-kumar-56314b261/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-blue-600/20 to-blue-800/10 hover:from-blue-500/30 hover:to-blue-700/20 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 border border-blue-500/20 hover:border-blue-400/40"
            >
              <Linkedin size={28} className="text-white group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="https://www.instagram.com/abhit.kumar.106/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-gradient-to-br from-pink-600/20 to-rose-800/10 hover:from-pink-500/30 hover:to-rose-700/20 rounded-xl transition-all duration-300 hover:scale-110 hover:rotate-3 border border-pink-500/20 hover:border-pink-400/40"
            >
              <Instagram size={28} className="text-white group-hover:text-pink-400 transition-colors" />
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-80 h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              <img
                src={AbhitImg}
                alt="Abhit Kumar"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer rounded-full"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>
      </section>


      {/* About Me Section */}
      <section id="about" className="py-24 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>

            {/* About Me Box */}
            <div
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20 overflow-hidden mb-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
              <div className="relative text-left space-y-6">
                <p className="text-xl text-gray-200 leading-relaxed">
                  I'm a passionate developer who enjoys building full-stack web applications that solve real-world challenges. 
                  I take pride in writing clean, efficient code and crafting elegant, user-friendly interfaces that enhance the overall user experience.
                </p>
              </div>
            </div>

            {/* Education Box */}
            {/* Education */}
            <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"></div>
            <div className="relative text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-8 flex items-center justify-center gap-3">
                <span className="text-2xl">🎓</span>
                Education
              </h3>


              <div className="relative pl-10 border-l-4 border-purple-500/30 space-y-12">
                {/* DTU */}
                <div className="relative pl-6">
                  <div className="absolute left-[-1.65rem] top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-base">
                    🎓
                  </div>
                  <h4 className="text-xl font-semibold text-white">Delhi Technological University</h4>
                  <p className="text-gray-300">B.Tech in Information Technology — 2022 to 2026</p>
                  <p className="text-gray-400">CGPA: 7.645 (currently)</p>
                </div>

                {/* Class XII */}
                <div className="relative pl-6">
                  <div className="absolute left-[-1.65rem] top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-base">
                    🎓
                  </div>
                  <h4 className="text-xl font-semibold text-white">S.B.M Senior Secondary School</h4>
                  <p className="text-gray-300">Class XII — 2020 to 2021</p>
                  <p className="text-gray-400">Percentage: 94%</p>
                </div>

                {/* Class X */}
                <div className="relative pl-6">
                  <div className="absolute left-[-1.65rem] top-1 w-8 h-8 rounded-full flex items-center justify-center text-white text-base">
                    🎓
                  </div>
                  <h4 className="text-xl font-semibold text-white">S.B.M Senior Secondary School</h4>
                  <p className="text-gray-300">Class X — 2018 to 2019</p>
                  <p className="text-gray-400">Percentage: 89.8%</p>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="py-24 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:-rotate-1 border border-white/10 hover:border-white/20 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className="relative text-center space-y-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <div className={`h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        
        <div className="grid lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative space-y-6">
              {/* 🖼️ Image if exists */}
              {project.Image && (
                <img
                  src={project.Image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-xl border border-white/10 mb-4"
                />
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {project.name}
                </h3>
                <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg">
                  <Code size={24} className="text-cyan-400" />
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-sm font-medium text-cyan-200 border border-cyan-500/30 hover:border-cyan-400/50 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-6">
                <a
                  href={project.liveDemo}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <ExternalLink size={18} />
                  <span className="font-medium text-gray-300">Live Demo</span>
                </a>

                <a
                  href={project.github}
                  className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 border border-white/20 hover:border-white/30"
                >
                  <Github size={18} />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          ))}
        </div>

      </section>

      

      {/* Contact Section */}
      <section id="ping-me" className="py-24 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Ready to collaborate?</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  I'm always excited to work on new projects and discuss innovative ideas. 
                  Whether you have a project in mind or just want to chat about tech, feel free to reach out!
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-300">
                  <Mail className="text-cyan-400" size={24} />
                  <span className="text-lg">Open to opportunities</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-300">
                  <MessageCircle className="text-purple-400" size={24} />
                  <span className="text-lg">Quick response guaranteed</span>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <a
                  href="https://www.instagram.com/abhit.kumar.106/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
                >
                  <Instagram size={28} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhit-kumar-56314b261/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-blue-300 to-blue-400 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                >
                  <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/Abhitkumar89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-gray-700/25"
                >
                  <Github size={28} className="group-hover:scale-110 transition-transform" />
                </a>

                <a
                 href="mailto:abhitkumar42955@gmail.com"
                 className="group p-4 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                <Mail size={28} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="text-8xl mb-6 animate-bounce">🎉</div>
                  <h3 className="text-3xl font-bold text-green-400 mb-4">Message Sent Successfully!</h3>
                  <p className="text-xl text-gray-300">Thanks for reaching out! I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center mb-8">Send me a message</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none text-white placeholder-gray-400 text-lg backdrop-blur-sm"
                      ></textarea>
                    </div>
                    
                    <button
                      onClick={handleFormSubmit}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/20 shadow-lg hover:shadow-cyan-500/25"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xl text-gray-300">
            Crafted with <span className="text-red-400 animate-pulse">❤️</span> and <span className="text-cyan-400">code</span> by{' '}
            <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-bold">
              Abhit Kumar
            </span>
          </p>
          <p className="text-gray-500 mt-2">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;



//Claude Code->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
