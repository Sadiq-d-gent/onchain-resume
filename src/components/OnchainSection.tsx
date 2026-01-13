import { motion } from 'framer-motion';
import { useAccount, useBalance } from 'wagmi';
import { Coins, Image as ImageIcon, Activity, Wallet } from 'lucide-react';
import { formatUnits } from 'viem';

export const OnchainSection = () => {
  const { address, isConnected } = useAccount();
  const { data: balance } = useBalance({ address });

  const formattedBalance = balance 
    ? parseFloat(formatUnits(balance.value, balance.decimals)).toFixed(4)
    : null;

  const stats = [
    {
      icon: Wallet,
      label: 'ETH Balance',
      value: formattedBalance ? `${formattedBalance} ETH` : '---',
      connected: isConnected,
    },
    {
      icon: Coins,
      label: 'ERC-20 Tokens',
      value: isConnected ? '12' : '---',
      connected: isConnected,
    },
    {
      icon: ImageIcon,
      label: 'NFTs Owned',
      value: isConnected ? '47' : '---',
      connected: isConnected,
    },
    {
      icon: Activity,
      label: 'Transactions',
      value: isConnected ? '1,234' : '---',
      connected: isConnected,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">On-Chain</span> Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time blockchain data from your connected wallet. 
            Connect your wallet to see your on-chain footprint.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative glass rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-secondary/5" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>

                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.connected ? (
                    stat.value
                  ) : (
                    <span className="text-muted-foreground">---</span>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NFT Preview Row */}
        {isConnected && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-primary" />
              <span>NFT Collection Preview</span>
            </h3>

            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-border/50 hover:border-primary/50 transition-all cursor-pointer overflow-hidden"
                >
                  <div className="w-full h-full flex items-center justify-center text-2xl">
                    {['🎨', '🖼️', '🎭', '🌈', '💎', '🚀', '🔮', '✨'][i]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Connect prompt */}
        {!isConnected && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg border border-primary/30">
              <Wallet className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                Connect wallet to view on-chain data
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
