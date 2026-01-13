import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-8 border-t border-border/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">OR</span>
            </div>
            <span className="text-sm text-muted-foreground">
              Built with 💙 on the blockchain
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span>Powered by</span>
            <div className="flex items-center gap-3">
              {['React', 'Wagmi', 'RainbowKit'].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted/30 rounded text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} • All rights reserved
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
