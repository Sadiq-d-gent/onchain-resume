import { motion } from 'framer-motion';
import { Mail, Twitter, Github, Linkedin, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useAccount } from 'wagmi';

export const ContactSection = () => {
  const { address } = useAccount();
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const socials = [
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com', handle: '@web3dev' },
    { icon: Github, label: 'GitHub', url: 'https://github.com', handle: 'web3builder' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com', handle: 'Web3 Developer' },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Build Together</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Looking for a Web3 frontend engineer? Let's create something amazing. 
              Reach out through any channel below.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground text-sm mb-3">For business inquiries</p>
                  <button
                    onClick={() => copyToClipboard('hello@web3dev.eth', 'email')}
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="font-mono text-sm">hello@web3dev.eth</span>
                    {copied === 'email' ? (
                      <Check className="w-4 h-4 text-cyber-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Wallet */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass rounded-2xl p-6 border border-border/50 hover:border-secondary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <span className="text-xl">💰</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">Hire Me On-Chain</h3>
                  <p className="text-muted-foreground text-sm mb-3">Send a tip or proposal</p>
                  <button
                    onClick={() => copyToClipboard(address || 'web3dev.eth', 'wallet')}
                    className="flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
                  >
                    <span className="font-mono text-sm">web3dev.eth</span>
                    {copied === 'wallet' ? (
                      <Check className="w-4 h-4 text-cyber-green" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 glass rounded-xl border border-border/50 hover:border-primary/50 transition-all group"
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-foreground font-medium">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <motion.a
              href="mailto:hello@web3dev.eth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold rounded-xl glow-primary text-lg"
            >
              <span>Start a Conversation</span>
              <span className="text-xl">→</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
