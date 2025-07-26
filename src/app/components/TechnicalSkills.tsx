'use client';

import { useTranslations } from '../context/TranslationsContext';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDocker,
  FaAws,
  FaDatabase,
  FaCode,
  FaMobile,
  FaServer,
  FaCloud,
  FaShieldAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaNpm,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaLaravel,
  FaPhp,
  FaAngular,
  FaVuejs,
  FaFigma,
  FaSketch,
  FaAd,
  FaChartLine,
  FaRobot,
  FaMicrochip,
  FaNetworkWired,
  FaLock,
  FaUserShield,
  FaBug,
  FaTerminal,
  FaKeyboard,
  FaDesktop,
  FaTabletAlt,
  FaGlobe,
  FaSearch,
  FaCogs,
  FaTools,
  FaWrench,
  FaHammer,
  FaPuzzlePiece,
  FaLightbulb,
  FaBrain,
  FaRocket,
  FaFire,
  FaStar,
  FaHeart,
  FaMagic,
  FaHandSparkles,
  FaWind
} from 'react-icons/fa';
import { SiSharp, SiCplusplus, SiDotnet, SiTailwindcss, SiJquery, SiGraphql, SiJira, SiPostgresql, SiJenkins, SiR, SiLinux, SiUbuntu } from 'react-icons/si';

// Create a mapping of technical skills to icons
const technicalSkillIcons: { [key: string]: React.ReactNode } = {
  // Frontend
  'React': <FaReact className="text-2xl text-[#61DAFB] group-hover:text-primary transition-colors" />,
  'HTML': <FaHtml5 className="text-2xl text-[#E34F26] group-hover:text-primary transition-colors" />,
  'CSS': <FaCss3Alt className="text-2xl text-[#1572B6] group-hover:text-primary transition-colors" />,
  'JavaScript': <FaJs className="text-2xl text-[#F7DF1E] group-hover:text-primary transition-colors" />,
  'TypeScript': <FaCode className="text-2xl text-[#3178C6] group-hover:text-primary transition-colors" />,
  'Angular': <FaAngular className="text-2xl text-[#DD0031] group-hover:text-primary transition-colors" />,
  'Vue Js': <FaVuejs className="text-2xl text-[#4FC08D] group-hover:text-primary transition-colors" />,
  'Bootstrap': <FaBootstrap className="text-2xl text-[#7952B3] group-hover:text-primary transition-colors" />,
  'Sass': <FaSass className="text-2xl text-[#CC6699] group-hover:text-primary transition-colors" />,
  'Tailwind CSS': <SiTailwindcss className="text-2xl text-[#06B6D4] group-hover:text-primary transition-colors" />,
  'Angular Material': <FaAngular className="text-2xl text-[#DD0031] group-hover:text-primary transition-colors" />,
  'JQuery': <SiJquery className="text-2xl text-[#0769AD] group-hover:text-primary transition-colors" />,
  
  // Backend
  'Ruby / Ruby on Rails': <FaCode className="text-2xl text-[#CC0000] group-hover:text-primary transition-colors" />,
  'Javascript / TypeScript': <FaJs className="text-2xl text-[#F7DF1E] group-hover:text-primary transition-colors" />,
  'Next.js': <FaCode className="text-2xl text-[#000000] group-hover:text-primary transition-colors" />,
  '.NET Framework / ASP.net': <SiDotnet className="text-2xl text-[#512BD4] group-hover:text-primary transition-colors" />,
  'C# / C / C++': <SiSharp className="text-2xl text-[#239120] group-hover:text-primary transition-colors" />,
  'Python / Django': <FaPython className="text-2xl text-[#3776AB] group-hover:text-primary transition-colors" />,
  'PHP': <FaPhp className="text-2xl text-[#777BB4] group-hover:text-primary transition-colors" />,
  'Laravel': <FaLaravel className="text-2xl text-[#FF2D20] group-hover:text-primary transition-colors" />,
  'Database': <FaDatabase className="text-2xl text-[#336791] group-hover:text-primary transition-colors" />,
  'MySQL': <FaDatabase className="text-2xl text-[#4479A1] group-hover:text-primary transition-colors" />,
  'PostgreSQL': <SiPostgresql className="text-2xl text-[#336791] group-hover:text-primary transition-colors" />,
  
  // DevOps & Cloud
  'Docker': <FaDocker className="text-2xl text-[#2496ED] group-hover:text-primary transition-colors" />,
  'AWS': <FaAws className="text-2xl text-[#FF9900] group-hover:text-primary transition-colors" />,
  'Github / Gitlab': <FaGitAlt className="text-2xl text-[#F05032] group-hover:text-primary transition-colors" />,
  'NPM': <FaNpm className="text-2xl text-[#CB3837] group-hover:text-primary transition-colors" />,
  'Cloud': <FaCloud className="text-2xl text-[#4285F4] group-hover:text-primary transition-colors" />,
  'Azure DevOps': <FaCloud className="text-2xl text-[#0078D7] group-hover:text-primary transition-colors" />,
  'Jira': <SiJira className="text-2xl text-[#0052CC] group-hover:text-primary transition-colors" />,
  'Jenkins': <SiJenkins className="text-2xl text-[#D24939] group-hover:text-primary transition-colors" />,
  
  // Other
  'Backend': <FaServer className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Frontend': <FaCode className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Security': <FaShieldAlt className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Networking': <FaNetworkWired className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'AI/ML': <FaRobot className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Data Science': <FaChartLine className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'WordPress': <FaWordpress className="text-2xl text-[#21759B] group-hover:text-primary transition-colors" />,
  'Testing': <FaBug className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'DevOps': <FaCogs className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'API': <FaGlobe className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'GraphQL': <SiGraphql className="text-2xl text-[#E10098] group-hover:text-primary transition-colors" />,
  'Microservices': <FaMicrochip className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Authentication': <FaLock className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Authorization': <FaUserShield className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'CLI': <FaTerminal className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Keyboard': <FaKeyboard className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Search': <FaSearch className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Tools': <FaTools className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Wrench': <FaWrench className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Hammer': <FaHammer className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Puzzle': <FaPuzzlePiece className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Lightbulb': <FaLightbulb className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Brain': <FaBrain className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Rocket': <FaRocket className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Fire': <FaFire className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Star': <FaStar className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Heart': <FaHeart className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Magic': <FaMagic className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Wand': <FaWind className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Sparkles': <FaHandSparkles className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Ad': <FaAd className="text-2xl text-[#6C757D] group-hover:text-primary transition-colors" />,
  'Rxjs': <FaCode className="text-2xl text-[#B7178C] group-hover:text-primary transition-colors" />,
  'AJAX / Postman': <FaGlobe className="text-2xl text-[#FF6C37] group-hover:text-primary transition-colors" />,
  'Microsoft Office': <FaDesktop className="text-2xl text-[#D83B01] group-hover:text-primary transition-colors" />,
  'R Language': <SiR className="text-2xl text-[#276DC3] group-hover:text-primary transition-colors" />,
  'PgAdmin / DBeaver': <FaDatabase className="text-2xl text-[#336791] group-hover:text-primary transition-colors" />,
  'Linux / Ubuntu': <SiLinux className="text-2xl text-[#FCC624] group-hover:text-primary transition-colors" />
};

export function TechnicalSkills() {
  const { t } = useTranslations();

  return (
    <section id="technical-skills" className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-gradient">{t.technicalSkills.title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {t.technicalSkills.items.map((skill, index) => (
          <div
            key={index}
            className="card p-4 text-center group hover:border-primary/20 transition-all duration-300 hover:scale-105"
          >
            <div className="flex flex-col items-center gap-2">
              {technicalSkillIcons[skill] || <FaCode className="text-2xl text-primary group-hover:text-accent transition-colors" />}
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{skill}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 