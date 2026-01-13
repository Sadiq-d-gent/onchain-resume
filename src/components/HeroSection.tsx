import { motion } from 'framer-motion';
import { useAccount } from 'wagmi';
import { BadgeCheck, Copy, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export const HeroSection = () => {
  const { address, isConnected } = useAccount();
  const [copied, setCopied] = useState(false);

  const displayAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '0x...';

  const copyAddress = () => {
    if (address) {
      navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              {/* Animated ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              />
              
              {/* Glow effect */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl" />
              
              {/* Avatar container */}
              <motion.div
                className="absolute inset-4 rounded-full bg-card border-2 border-primary/50 overflow-hidden animate-float"
                whileHover={{ scale: 1.05 }}
              >
                <img src="degent.jpg" alt="" />
              </motion.div>

              {/* Verified badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
                className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-primary flex items-center justify-center glow-primary animate-verified"
              >
                <BadgeCheck className="w-6 h-6 text-primary-foreground" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-border/50 mb-6"
            >
              <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-cyber-green' : 'bg-muted-foreground'}`} />
              <span className="text-sm font-mono text-muted-foreground">
                {isConnected ? 'Wallet Connected' : 'Connect to verify'}
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-foreground">Web3 </span>
              <span className="text-gradient">Frontend Engineer</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl">
              Building the decentralized future, one dApp at a time. Specialized in 
              crafting beautiful, performant, and wallet-native experiences.
            </p>

            {/* Wallet address display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={copyAddress}
                disabled={!isConnected}
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg border border-border/50 hover:border-primary/50 transition-all group disabled:opacity-50"
              >
                <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground">
                  {displayAddress}
                </span>
                <Copy className={`w-4 h-4 ${copied ? 'text-cyber-green' : 'text-muted-foreground'}`} />
              </button>

              <a
                href="https://etherscan.io"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <span>View on Etherscan</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { label: 'Projects Shipped', value: '12+' },
                { label: 'Smart Contracts', value: '5' },
                { label: 'NFTs Minted', value: '100+' },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
