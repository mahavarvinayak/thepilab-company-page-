'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Send, ChevronDown, Settings, Layers, Brain, ArrowRight, MessageSquare, Sparkles, Star, Rocket } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const piRef = useRef<HTMLDivElement>(null);

  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    // Simple mouse tracking for cursor light only
    const handleMouseMove = (e: MouseEvent) => {
      // Update CSS variables for cursor light
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:thepilab77@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    console.log('Email opened with form data:', formData);
  };

  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden relative">
      {/* Simplified Space Background - No Purple */}
      <div className="fixed inset-0 z-0">
        {/* Deep space gradient - only black to gray */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-black" />
        
        {/* Simple stars only */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Simple silver nebula effects - no purple */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Simple cursor light effect - no text movement */}
      <div className="fixed w-96 h-96 rounded-full pointer-events-none z-10"
           style={{
             background: 'radial-gradient(circle, rgba(192, 192, 192, 0.1) 0%, transparent 70%)',
             left: 'var(--mouse-x, 0px)',
             top: 'var(--mouse-y, 0px)',
             transform: 'translate(-50%, -50%)',
             filter: 'blur(20px)',
           }} 
      />

      {/* HERO SECTION - Square Layout with π Icon Only */}
      <motion.section
        className="relative min-h-screen w-screen flex items-center justify-center z-20"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* π Symbol Only - Floating - No Background */}
          <motion.div
            ref={piRef}
            className="relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-8"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-6xl font-black"
                 style={{
                   color: '#c0c0c0',
                   textShadow: '0 10px 30px rgba(192, 192, 192, 0.5), 0 0 60px rgba(192, 192, 192, 0.3)',
                 }}>
              π
            </div>
          </motion.div>

          {/* Static text - no cursor movement */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            style={{
              textShadow: '0 5px 15px rgba(192, 192, 192, 0.3)',
            }}
          >
            <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              The Π Lab
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl mt-4 block font-light tracking-wider text-gray-400">
              Intelligence Engineered.
            </span>
          </motion.h1>

          <motion.p
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We design AI systems, automation frameworks, and digital experiences that think before they act.
          </motion.p>

          {/* Three pillars */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 text-gray-300 text-sm md:text-base tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {["AUTOMATION", "DESIGN", "INTELLIGENCE"].map((text, index) => (
              <div key={text} className="border-l border-gray-500 pl-4 md:pl-8">
                <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent font-medium">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <Button 
              onClick={() => {
                const projectsSection = document.querySelector('[data-section="projects"]');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 text-black hover:from-gray-200 hover:via-gray-300 hover:to-gray-500 px-8 py-6 text-base font-bold rounded-xl transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:scale-105"
              style={{
                boxShadow: '0 10px 25px rgba(192, 192, 192, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
              }}
            >
              <Rocket className="mr-3 w-5 h-5" />
              Explore Our Work
              <ArrowRight className="ml-3 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-gray-400 text-black hover:bg-gray-700 hover:text-white px-8 py-6 text-base font-bold rounded-xl transition-all duration-500 transform hover:scale-105"
              onClick={() => window.open('https://www.linkedin.com/company/the-%CF%80-lab/', '_blank')}
            >
              Connect on LinkedIn
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.section>

      {/* ABOUT SECTION - Black, White, Silver Only */}
      <section className="relative py-24 z-20 bg-gradient-to-b from-black via-gray-900/10 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-300 text-sm md:text-base tracking-widest uppercase mb-8">Built by creators. Powered by code.</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Who We Are
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 p-8 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-xl">
                <div className="aspect-square bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl flex items-center justify-center border border-gray-600/30 backdrop-blur-sm">
                  <img
                    src="https://i.postimg.cc/KzNVDmD8/Gemini-Generated-Image-pnntc2pnntc2pnnt.png"
                    alt="The Π Lab Logo"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                The Π Lab is an independent automation and AI collective — merging human creativity and artificial intelligence into powerful, intelligent systems. We build adaptive platforms, SaaS tools, and agents that automate digital complexity for startups, creators, and organizations.
              </p>
              <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 p-6 rounded-xl border-l-4 border-gray-400 backdrop-blur-sm">
                <p className="text-gray-200 italic text-lg font-medium">
                  <strong>Our Mission:</strong> We believe in automation that liberates humans — not replaces them. Our vision is to create tools that extend human potential, making technology work for people rather than against them.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION - KEEP COLORFUL AS REQUESTED */}
      <section className="relative py-24 z-20 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                What We Build
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Automation Systems",
                description: "We design AI-powered workflows that remove repetitive tasks, integrating intelligence directly into business operations.",
                color: "from-blue-400 to-blue-600"
              },
              {
                icon: Layers,
                title: "SaaS & Web Platforms",
                description: "From design to deployment, we build scalable software platforms with seamless UX, clean architecture, and API precision.",
                color: "from-purple-400 to-purple-600"
              },
              {
                icon: Brain,
                title: "AI Integration",
                description: "We connect large-scale AI models, data pipelines, and real-time automations to transform businesses.",
                color: "from-pink-400 to-pink-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.3 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-400 backdrop-blur-xl">
                  <CardContent className="p-8">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-200 mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION - Black, White, Silver Only */}
      <section data-section="projects" className="relative py-24 z-20 bg-gradient-to-b from-black via-gray-900/10 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300">Intelligent Systems, Designed & Delivered.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Card className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border-gray-700/50 rounded-2xl overflow-hidden backdrop-blur-xl">
              <div className="md:flex">
                <div className="md:w-1/2 p-8 md:p-12">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">Chatflow AI</h3>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      Chatflow AI is our flagship automation tool developed by The Π Lab. This intelligent platform seamlessly integrates with Instagram and WhatsApp through Meta Graph API, automatically managing DMs, comments, and customer engagement. Built with cutting-edge AI technology, it transforms social media management by handling responses, tracking interactions, and optimizing engagement strategies - allowing businesses to focus on growth while Chatflow AI handles the complexity of digital communication.
                    </p>
                    <Button 
                      onClick={() => window.open('https://chatflowai.vly.site/', '_blank')}
                      className="bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 text-black hover:from-gray-200 hover:via-gray-300 hover:to-gray-500 px-6 py-3 text-lg font-bold rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105"
                      style={{
                        boxShadow: '0 10px 25px rgba(192, 192, 192, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                      }}
                    >
                      View Project
                      <ArrowRight className="ml-3 w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex items-center justify-center bg-gradient-to-br from-gray-800/30 to-gray-900/30">
                  <img
                    src="https://i.postimg.cc/ydLKYm5Y/Screenshot-2025-11-09-103620.png"
                    alt="Chatflow AI Dashboard"
                    className="w-full aspect-square object-contain rounded-xl border border-gray-600/30 backdrop-blur-sm shadow-xl"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* VISION SECTION - Black, White, Silver Only */}
      <section className="relative py-24 z-20 bg-gradient-to-b from-black via-gray-900/20 to-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(192, 192, 192, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 80%, rgba(192, 192, 192, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.05) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <blockquote className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-200 mb-12 uppercase tracking-tight"
                         style={{
                           textShadow: '0 10px 25px rgba(192, 192, 192, 0.2)',
                         }}>
              "We believe in automation that liberates humans — not replaces them."
            </blockquote>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our vision is to create tools that extend human potential. At The Π Lab, AI is not a replacement; it's an enhancement of intuition, creativity, and decision-making.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION - Black, White, Silver Only */}
      <section className="relative py-24 z-20 bg-gradient-to-b from-black via-gray-900/10 to-black">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-16 relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                The Collective
              </span>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 text-black px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                Collectives
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {[
              { 
                initials: 'VM', 
                name: 'Vincent', 
                title: 'Founder', 
                image: 'https://i.postimg.cc/RFKPg41H/Vincent-Image.png'
              },
              { 
                initials: 'SA', 
                name: 'Sahil', 
                title: 'Design Executive',
                image: 'https://i.postimg.cc/QMVFcqGZ/In-Shot-20251110-132642788.jpg'
              },
              { 
                initials: 'HT', 
                name: 'Himanshu', 
                title: 'AI Engineer',
                image: 'https://i.postimg.cc/5tjX8mdj/In-Shot-20251110-132703679.jpg'
              },
              { 
                initials: 'RP', 
                name: 'Rudra', 
                title: 'Systems Developer',
                image: 'https://i.postimg.cc/vmD45vFT/In-Shot-20251110-132642788.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                }}
                className="group cursor-pointer"
              >
                <Card className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 hover:border-gray-400 backdrop-blur-xl">
                  <CardContent className="p-8 text-center relative">
                    <img 
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/60 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <div>
                        <span className="text-white text-lg md:text-xl font-bold drop-shadow-lg">
                          {member.name}
                        </span>
                        <span className="text-gray-300 text-sm md:text-base ml-2">
                          {member.title}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center text-gray-300 text-lg italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            A synergy of creators, coders, and thinkers — connected by one constant: precision.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION - Black, White, Silver Only */}
      <section className="relative py-24 z-20 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
                Let's Build The Future Together.
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We collaborate with creators, developers, and businesses to bring intelligent systems to life. Let's automate what slows the world down.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-gray-900/50 border-gray-700/50 text-gray-200 placeholder-gray-500 rounded-xl focus:border-gray-400 transition-all duration-300 backdrop-blur-sm h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Business Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-gray-900/50 border-gray-700/50 text-gray-200 placeholder-gray-500 rounded-xl focus:border-gray-400 transition-all duration-300 backdrop-blur-sm h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="bg-gray-900/50 border-gray-700/50 text-gray-200 placeholder-gray-500 rounded-xl focus:border-gray-400 transition-all duration-300 backdrop-blur-sm resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-600 text-black hover:from-gray-200 hover:via-gray-300 hover:to-gray-500 py-4 text-lg font-bold rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  style={{
                    boxShadow: '0 10px 25px rgba(192, 192, 192, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                  }}
                >
                  <Send className="mr-3 w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div className="bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 p-8 rounded-2xl border border-gray-700/50 backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-gray-200 mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <a href="mailto:thepilab77@gmail.com" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                      thepilab77@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Linkedin className="w-5 h-5 text-black" />
                    </div>
                    <a href="https://www.linkedin.com/company/the-%CF%80-lab/" className="text-gray-300 hover:text-gray-200 transition-colors duration-300">
                      linkedin.com/company/the-π-lab
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER - Black, White, Silver Only */}
      <footer className="relative py-12 z-20 bg-gradient-to-b from-black via-gray-900/20 to-black border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-xl mx-auto mb-6 flex items-center justify-center text-xl font-bold text-black shadow-xl"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.8 }}
                style={{
                  boxShadow: '0 10px 25px rgba(192, 192, 192, 0.3), inset 0 2px 4px rgba(255,255,255,0.3)',
                }}
              >
              π
            </motion.div>
            <p className="text-gray-400 mb-4">© 2025 The Π Lab. All Rights Reserved.</p>
            <p className="text-gray-500 text-sm mb-8">Automation • Design • AI</p>
            <div className="flex justify-center space-x-6">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/the-pi-lab" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/the-%CF%80-lab/" },
                { icon: Mail, label: "Email", href: "mailto:thepilab77@gmail.com" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="text-gray-500 hover:text-gray-300 transition-all duration-300 transform hover:scale-110"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}