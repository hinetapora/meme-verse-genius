
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
import { mainnet, arbitrum } from 'viem/chains';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
const queryClient = new QueryClient()

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
