
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains'
import { WagmiConfig } from 'wagmi'
import { QueryClient } from '@tanstack/react-query'

// Initialize QueryClient
const queryClient = new QueryClient()

// Your project ID from WalletConnect Cloud
const projectId = '9a5ba03e8f6b772aa7042c0dd46cb735'

const metadata = {
  name: 'Web3Modal Example',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// Configure supported chains
const chains = [mainnet, polygon, optimism, arbitrum]

// Create wagmi config
export const config = defaultWagmiConfig({ 
  chains, 
  projectId, 
  metadata
})

// Initialize modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  chains,
  defaultChain: mainnet
})

export { WagmiConfig }
export { queryClient }
