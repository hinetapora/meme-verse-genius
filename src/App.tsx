
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { Toaster } from '@/components/ui/toaster';
import { WagmiConfig, config } from '@/lib/web3';

function App() {
  return (
    <WagmiConfig config={config}>
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
