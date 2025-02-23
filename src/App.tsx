
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { WagmiConfig, wagmiConfig, queryClient } from '@/lib/web3';
import { QueryClientProvider } from '@tanstack/react-query';

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
