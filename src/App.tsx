
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';
import Token from './pages/Token';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { WagmiConfig, config } from '@/lib/web3';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/web3';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiConfig config={config}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Router>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/token/:tokenId" element={<Token />} />
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
