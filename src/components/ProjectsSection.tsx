import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  status: 'Completed' | 'MVP' | 'In Progress';
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: 'DeFi Dashboard',
    description: 'A comprehensive portfolio tracker for DeFi positions across multiple chains. Real-time price feeds and yield aggregation.',
    tech: ['React', 'Wagmi', 'The Graph', 'Tailwind'],
    status: 'Completed',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'NFT Marketplace',
    description: 'Full-featured NFT marketplace with lazy minting, royalties, and collection management. Built on ERC-721A.',
    tech: ['Next.js', 'Solidity', 'IPFS', 'RainbowKit'],
    status: 'Completed',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    name: 'DAO Governance Portal',
    description: 'On-chain governance interface with proposal creation, voting, and delegation. Snapshot integration included.',
    tech: ['React', 'Viem', 'Snapshot', 'TypeScript'],
    status: 'MVP',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Token Swap Interface',
    description: 'DEX aggregator frontend with best route finding, slippage protection, and MEV awareness.',
    tech: ['React', 'Wagmi', '0x API', 'Tailwind'],
    status: 'Completed',
    githubUrl: '#',
  },
  {
    name: 'Wallet Analytics',
    description: 'On-chain analytics tool for tracking wallet behavior, token flows, and transaction patterns.',
    tech: ['Next.js', 'Dune Analytics', 'D3.js', 'Viem'],
    status: 'In Progress',
    githubUrl: '#',
  },
  {
    name: 'Smart Contract Templates',
    description: 'Curated library of production-ready smart contract templates with full test coverage.',
    tech: ['Solidity', 'Hardhat', 'OpenZeppelin', 'TypeScript'],
    status: 'Completed',
    githubUrl: '#',
  },
];

const statusColors = {
  'Completed': 'bg-cyber-green/20 text-cyber-green border-cyber-green/30',
  'MVP': 'bg-primary/20 text-primary border-primary/30',
  'In Progress': 'bg-secondary/20 text-secondary border-secondary/30',
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of Web3 projects I've built. From DeFi dashboards to NFT marketplaces, 
            each project pushes the boundaries of what's possible on-chain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center glow-primary">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
              )}

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>

              <div className="relative">
                {/* Status */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                  {project.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-mono bg-muted/50 text-muted-foreground rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
