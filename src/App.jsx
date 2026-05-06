import "./App.css";
import profile from "./assets/profile.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import { motion, useInView, useMotionValueEvent, useScroll } from "framer-motion";
import { 
  FaLinkedin, FaReact, FaJava, FaJs, FaChevronRight, 
  FaNodeJs, FaGithub, FaPython 
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiTypescript, SiExpo, SiNestjs 
} from "react-icons/si";
import { TbBrandFlutter } from "react-icons/tb";
import { TailwindIcon } from './components/TailwindIcon.jsx';
import { Mail, MapPin, Briefcase, Sparkles, Send, Code2, Bot, Brain, Database, ExternalLink, ArrowUp } from "lucide-react";
import { useRef, useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const scrollUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  }
};

function AnimatedSection({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      variants={scrollUpVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    title: "Gimnasio Corpore Sano",
    description: "Plataforma de gestión de gimnasio con control de usuarios, pagos, deudas y horarios, con un chatbot con ia.",
    image: project1,
    tech: ["React", "Tailwind", "Node.js", "IA", "MongoDB", "Typescript", "Firebase"],
    link: "#https://corporesano-app.web.app/clients"
  },
  {
    title: "Click Market",
    description: "App móvil para compra de productos en supermercados.",
    image: project2,
    tech: ["React", "Firebase", "Typescript", "Node.js", "MongoDB", "Tailwind"],
    link: "#"
  }
];

function SkillIcon({ icon: Icon, label, color, index = 0 }) {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 group cursor-default"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.05 }}
    >
      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 ${color} group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]`} />
      <span className="text-[10px] text-white/50 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{label}</span>
    </motion.div>
  );
}

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen p-3 sm:p-4 md:p-8 lg:px-24 lg:py-16 selection:bg-indigo-500/30 relative">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-80 h-80 bg-emerald-600/5 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 auto-rows-min md:auto-rows-[120px]"
        >
          {/* --- ROW 1: HERO --- */}
          <motion.div 
            variants={itemVariants}
            className="glass-card col-span-1 md:col-span-4 lg:col-span-4 row-span-2 md:row-span-2 p-5 sm:p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 md:gap-8"
          >
            <motion.div 
              className="relative group shrink-0"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <img
                src={profile}
                alt="profile"
                className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/10"
              />
            </motion.div>
            <div className="flex-1 space-y-3 md:space-y-4 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                Hola, soy <span className="text-gradient">Franco</span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light">
                Soy <span className="text-white font-semibold">Técnico Superior en Desarrollo de Software</span> con cuatro años de experiencia. A mis 23 años, viviendo en Mendoza, busco constantemente nuevos desafíos para crecer profesionalmente y contribuir con soluciones innovadoras.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/50">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Mendoza, AR</span>
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> 4 años exp.</span>
              </div>
            </div>
          </motion.div>

          {/* --- SKILLS --- */}
          <motion.div 
            variants={itemVariants}
            className="glass-card col-span-1 md:col-span-2 lg:col-span-2 row-span-4 md:row-span-4 p-5 sm:p-8 flex flex-col gap-4 sm:gap-6 bg-indigo-500/5 group"
          >
            <h3 className="text-lg sm:text-xl font-bold text-white/80 border-b border-white/5 pb-2">Tecnologías</h3>
            <div className="grid grid-cols-4 sm:grid-cols-3 gap-y-4 sm:gap-y-6 md:gap-y-10 gap-x-4 sm:gap-x-6 place-items-center grow py-2 sm:py-4">
              <SkillIcon icon={FaReact} label="React" color="text-cyan-400" index={0} />
              <SkillIcon icon={SiExpo} label="Expo" color="text-white" index={1} />
              <SkillIcon icon={SiTypescript} label="TS" color="text-blue-500" index={2} />
              <SkillIcon icon={FaNodeJs} label="Node.js" color="text-green-500" index={3} />
              <SkillIcon icon={SiNestjs} label="NestJS" color="text-red-600" index={4} />
              <SkillIcon icon={SiExpress} label="Express" color="text-white/70" index={5} />
              <SkillIcon icon={SiMongodb} label="MongoDB" color="text-emerald-500" index={6} />
              <SkillIcon icon={FaPython} label="Python" color="text-blue-400" index={7} />
              <SkillIcon icon={TbBrandFlutter} label="Flutter" color="text-sky-400" index={8} />
              <SkillIcon icon={FaJava} label="Java" color="text-red-500" index={9} />
              <SkillIcon icon={FaJs} label="JS" color="text-yellow-400" index={10} />
              <motion.div
                className="flex flex-col items-center gap-2 group cursor-default"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 11 * 0.05 }}
              >
                <TailwindIcon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] text-white/40 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-tighter">Tailwind</span>
              </motion.div>
            </div>
          </motion.div>

          {/* --- MOTIVATION --- */}
          <motion.div 
            variants={itemVariants}
            className="glass-card col-span-1 md:col-span-2 lg:col-span-3 row-span-1 p-4 sm:p-6 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Enfoque</span>
            </div>
            <p className="text-base sm:text-lg text-white/90 leading-snug font-light italic">
              "Mi principal motivación es la <span className="text-indigo-400 font-medium">lógica</span> y la resolución de problemas técnicos."
            </p>
          </motion.div>

          {/* --- SOCIALS --- */}
          <motion.div 
            variants={itemVariants}
            className="glass-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 p-4 flex items-center justify-around bg-white/[0.02]"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
              <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <div className="w-px h-8 bg-white/10" />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors group">
              <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform text-blue-400" />
            </a>
          </motion.div>

          {/* --- STATUS --- */}
          <motion.div 
            variants={itemVariants}
            className="glass-card col-span-1 md:col-span-1 lg:col-span-1 row-span-1 p-4 flex flex-col items-center justify-center gap-1 border-emerald-500/20"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Disponible</span>
            </div>
            <span className="text-[10px] text-white/30 uppercase tracking-tighter text-center">Open to work</span>
          </motion.div>

          {/* --- AI & BOTS --- */}
          <motion.div 
            variants={itemVariants}
            className="glass-card col-span-1 md:col-span-3 lg:col-span-3 row-span-1 p-4 sm:p-5 md:px-8 flex items-center gap-4 sm:gap-6 overflow-hidden group"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/40 transition-colors" />
              <Bot className="w-8 h-8 text-indigo-400 relative z-10 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex-1 space-y-1">
              <h4 className="text-sm font-bold text-white/90 flex items-center gap-2">
                IA & Automatización
                <div className="flex gap-1">
                  <Brain className="w-3 h-3 text-indigo-400/50" />
                  <Database className="w-3 h-3 text-indigo-400/50" />
                </div>
              </h4>
              <p className="text-xs text-white/60 leading-relaxed max-w-sm">
                Desarrollo de <span className="text-white">bots inteligentes</span> integrados con <span className="text-white">IA</span> y conexiones robustas a <span className="text-white">bases de datos</span> para flujos de trabajo autónomos.
              </p>
            </div>
          </motion.div>

          {/* --- PROJECTS TITLE --- */}
          <AnimatedSection className="col-span-1 md:col-span-4 lg:col-span-6 mt-8 sm:mt-12 mb-2 px-2">
            <div className="flex items-end gap-3">
              <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
              <h2 className="text-2xl sm:text-3xl font-bold">Proyectos <span className="text-white/20 font-light">Destacados</span></h2>
            </div>
          </AnimatedSection>

          {/* --- PROJECTS --- */}
          {projects.map((project, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.15} className="col-span-1 md:col-span-2 lg:col-span-3">
              <div className="glass-card relative group overflow-hidden h-full">
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-700 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
                </div>
                
                <div className="absolute inset-0 z-10 p-5 sm:p-8 flex flex-col justify-end gap-3">
                  {/* Tech tags - always visible on mobile, slide on desktop */}
                  <div className="flex flex-wrap gap-1.5 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                    {project.tech.map(t => (
                      <span key={t} className="px-2 py-0.5 text-[9px] uppercase font-bold tracking-wider bg-indigo-500/20 backdrop-blur-md rounded-md border border-white/10 text-indigo-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold group-hover:text-indigo-300 transition-colors uppercase tracking-tight">{project.title}</h3>
                  {/* Description - always visible on mobile, hover reveal on desktop */}
                  <p className="text-white/50 text-xs line-clamp-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-100 md:transform md:translate-y-2 md:group-hover:translate-y-0">
                    {project.description}
                  </p>
                  {/* Button - always visible on mobile, hover reveal on desktop */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 md:mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 w-max md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 delay-200 md:transform md:translate-y-4 md:group-hover:translate-y-0 shadow-lg shadow-indigo-600/20 active:scale-95"
                  >
                    Ver Proyecto <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* --- CONTACT CTA --- */}
          <AnimatedSection className="col-span-1 md:col-span-4 lg:col-span-6 mt-4">
            <div className="glass-card p-5 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/20">
              <div className="text-center md:text-left space-y-2">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">¿Tienes un proyecto?</h3>
                <p className="text-white/50 text-base sm:text-lg">Hablemos sobre cómo puedo ayudarte a construir tu próxima plataforma.</p>
              </div>
              
              <a
                href="mailto:franconicolasgaldame@gmail.com"
                className="w-full sm:w-auto group flex items-center gap-3 sm:gap-6 p-2 pr-4 sm:pr-6 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/5 cursor-pointer hover:border-indigo-500/30"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Envíame un mail</span>
                  <span className="text-xs sm:text-sm md:text-base text-white/80 font-mono truncate">franconicolasgaldame@gmail.com</span>
                </div>
                <Send className="hidden md:block w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            </div>
          </AnimatedSection>

        </motion.div>
        
        <footer className="max-w-7xl mx-auto mt-12 sm:mt-20 pb-8 sm:pb-12 flex flex-col items-center gap-4 text-white/20">
          <div className="h-px w-24 bg-white/10" />
          <p className="text-[10px] uppercase tracking-[0.4em] font-light text-center">
            Franco Galdame • Mendoza, Argentina • © 2026
          </p>
        </footer>
      </div>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors shadow-lg"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }}
        transition={{ duration: 0.2 }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </div>
  );
}

export default App;
