
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'
import { WagmiConfig } from 'wagmi'
import { QueryClient } from '@tanstack/react-query'
import { createPublicClient, http } from 'viem'

// Initialize QueryClient
const queryClient = new QueryClient()

// Your project ID from WalletConnect Cloud
const projectId = '9a5ba03e8f6b772aa7042c0dd46cb735'

const metadata = {
  name: 'RugTron3000',
  description: 'RugTron3000 Web3 Platform',
  url: 'https://rugtron3000.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Configure supported chains with custom RPC URLs
const chains = [mainnet, polygon, optimism, arbitrum, base]

// Create public client for each chain
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

// Create wagmi config
export const config = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata,
  publicClient 
})

// Initialize web3modal
createWeb3Modal({ 
  wagmiConfig: config, 
  projectId, 
  chains,
  defaultChain: mainnet 
})

export { WagmiConfig }
export { queryClient }
