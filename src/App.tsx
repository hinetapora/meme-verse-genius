
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet, arbitrum } from 'viem/chains';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'YOUR_PROJECT_ID';

// 2. Create wagmiConfig
const metadata = {
  name: 'NFTVerse',
  description: 'NFTVerse Web3 App',
  url: 'https://nftverse.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
        <Toaster />
      </ThemeProvider>
    </WagmiConfig>
  );
}

export default App;

