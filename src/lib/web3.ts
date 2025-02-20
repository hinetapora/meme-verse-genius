
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains'
import { WagmiConfig } from 'wagmi'

const projectId = '9a5ba03e8f6b772aa7042c0dd46cb735'

const metadata = {
  name: 'RugTron3000',
  description: 'RugTron3000 Web3 Platform',
  url: 'https://rugtron3000.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, polygon, optimism, arbitrum, base]
export const config = defaultWagmiConfig({ chains, projectId, metadata })

createWeb3Modal({ wagmiConfig: config, projectId, chains })

export { WagmiConfig }
