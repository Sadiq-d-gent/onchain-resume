import { motion } from 'framer-motion';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiWagmi,
  SiEthereum,
  SiSolidity,
  SiTelegraph,
  SiGit,
  SiFigma,
} from 'react-icons/si';
import { FaRainbow } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

interface Skill {
  name: string;
  icon: JSX.Element;
  category: 'frontend' | 'web3' | 'tools';
  level: number;
}

const skills: Skill[] = [
  { name: 'React', icon: <SiReact />, category: 'frontend', level: 95 },
  { name: 'TypeScript', icon: <SiTypescript />, category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, category: 'frontend', level: 95 },
  { name: 'Next.js', icon: <SiNextdotjs />, category: 'frontend', level: 85 },

  { name: 'Wagmi', icon: <SiWagmi />, category: 'web3', level: 90 },
  { name: 'Viem', icon: <HiLightningBolt />, category: 'web3', level: 85 },
  { name: 'RainbowKit', icon: <FaRainbow />, category: 'web3', level: 90 },
  { name: 'Ethers.js', icon: <SiEthereum />, category: 'web3', level: 80 },
  { name: 'Solidity', icon: <SiSolidity />, category: 'web3', level: 70 },
  { name: 'The Graph', icon: <SiTelegraph />, category: 'web3', level: 75 },

  { name: 'Git', icon: <SiGit />, category: 'tools', level: 90 },
  { name: 'Figma', icon: <SiFigma />, category: 'tools', level: 80 },
];

const categories = [
  { id: 'frontend', label: 'Frontend', color: 'primary' },
  { id: 'web3', label: 'Web3', color: 'secondary' },
  { id: 'tools', label: 'Tools', color: 'accent' },
];

export const SkillsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Tech Stack</span> & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated toolkit for building exceptional Web3 experiences.
            From frontend frameworks to blockchain primitives.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className={`w-3 h-3 rounded-full ${
                  category.id === 'frontend'
                    ? 'bg-primary'
                    : category.id === 'web3'
                    ? 'bg-secondary'
                    : 'bg-accent'
                }`}
              />
              <h3 className="text-xl font-semibold text-foreground">
                {category.label}
              </h3>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skills
                .filter((skill) => skill.category === category.id)
                .map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={item}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group relative glass rounded-xl p-4 border border-border/50 hover:border-primary/50 transition-all duration-300"
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-secondary/5" />

                    <div className="relative flex items-center gap-3">
                      <span className="text-2xl text-muted-foreground group-hover:text-foreground transition">
                        {skill.icon}
                      </span>

                      <div className="flex-1">
                        <div className="font-medium text-foreground">
                          {skill.name}
                        </div>

                        <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full ${
                              category.id === 'frontend'
                                ? 'bg-primary'
                                : category.id === 'web3'
                                ? 'bg-secondary'
                                : 'bg-accent'
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
