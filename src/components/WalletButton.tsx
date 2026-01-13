import { motion } from 'framer-motion';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { Wallet, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const WalletButton = () => {
  const { address, isConnected, chain } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const [showConnectors, setShowConnectors] = useState(false);

  const displayAddress = address 
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : '';

  if (isConnected) {
    return (
      <motion.button
        onClick={() => disconnect()}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary"
      >
        <Wallet className="w-4 h-4" />
        <span className="font-mono text-sm">{displayAddress}</span>
        {chain && (
          <span className="text-xs opacity-80">({chain.name})</span>
        )}
      </motion.button>
    );
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowConnectors(!showConnectors)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={isPending}
        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg glow-primary transition-all duration-300 hover:shadow-lg disabled:opacity-50"
      >
        <Wallet className="w-4 h-4" />
        <span>{isPending ? 'Connecting...' : 'Connect Wallet'}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${showConnectors ? 'rotate-180' : ''}`} />
      </motion.button>

      {showConnectors && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full right-0 mt-2 w-56 glass rounded-xl border border-border/50 overflow-hidden z-50"
        >
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => {
                connect({ connector });
                setShowConnectors(false);
              }}
              className="w-full px-4 py-3 text-left hover:bg-primary/10 transition-colors flex items-center gap-3 text-foreground"
            >
              <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                {connector.name === 'MetaMask' && <span>🦊</span>}
                {connector.name === 'Coinbase Wallet' && <span>🔵</span>}
                {connector.name === 'Injected' && <span>💉</span>}
                {!['MetaMask', 'Coinbase Wallet', 'Injected'].includes(connector.name) && <Wallet className="w-4 h-4" />}
              </div>
              <span className="font-medium">{connector.name}</span>
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
};
