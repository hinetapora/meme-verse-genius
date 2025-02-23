
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { WagmiConfig } from 'wagmi';
import { QueryClient } from '@tanstack/react-query';

// Initialize QueryClient
const queryClient = new QueryClient();

// WalletConnect Project ID
const projectId = '9a5ba03e8f6b772aa7042c0dd46cb735';

const metadata = {
  name: 'NFTVerse',
  description: 'NFTVerse Web3 Platform',
  url: 'https://nftverse.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// Configure supported chains
const chains = [mainnet, polygon, optimism, arbitrum];

// Create wagmi config
const wagmiConfig = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata,
});

// Initialize modal
createWeb3Modal({
  wagmiConfig,
  projectId,
  chains,
  defaultChain: mainnet,
  themeMode: 'dark'
});

export { wagmiConfig };
export { WagmiConfig };
export { queryClient };
