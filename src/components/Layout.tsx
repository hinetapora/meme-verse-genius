import { 
  Home, 
  Search, 
  Brain, 
  Image as ImageIcon, 
  Bell, 
  MessageSquare,
  MoreHorizontal,
  Sun,
  Moon,
  Languages,
  Wallet,
  ChevronRight
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "zh", label: "中文" },
  { code: "hi", label: "हिंदी" },
  { code: "ar", label: "العربية" },
  { code: "pt", label: "Português" },
  { code: "bn", label: "বাংলা" },
  { code: "ru", label: "Русский" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" }
];

const CURRENCIES = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CNY", symbol: "¥" }
];

const AnnouncementBar = ({ tokenData }: { tokenData: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % tokenData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [tokenData.length]);

  const data = tokenData[currentIndex];

  return (
    <div className="announcement-bar shake-flash">
      <div className="announcement-content">
        <span className="emoji">{data.emoji}</span>
        <span className="user">{data.user}</span> bought
        <span className="quantity">{data.quantity}</span> of
        <span className="token">{data.token}</span>
        <span className="market-cap">market cap: {data.marketCap}</span>
        <span className="replies">replies: {data.replies}</span>
      </div>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const isActive = (path: string) => location.pathname === path;

  const [mounted, setMounted] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const tokenData = [
    {
      emoji: "🚀",
      user: "77TQRY",
      quantity: "0.0116 SOL",
      token: "CHILLTATE",
      marketCap: "$47.2K",
      replies: "1",
    },
    // ... keep existing code (token data array)
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-16">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000" />
              <AvatarFallback>P</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 flex justify-center">
              <span className="text-2xl font-bold">𝓟</span>
            </div>

            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Global preferences</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        <span>Theme</span>
                      </div>
                      <Select onValueChange={setTheme} defaultValue={theme}>
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">Auto</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Languages className="h-4 w-4" />
                        <span>Language</span>
                      </div>
                      <Select defaultValue="en">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          {LANGUAGES.map((lang) => (
                            <SelectItem key={lang.code} value={lang.code}>
                              {lang.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        <span>Currency</span>
                      </div>
                      <Select defaultValue="USD">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="Currency" />
                        </SelectTrigger>
                        <SelectContent>
                          {CURRENCIES.map((currency) => (
                            <SelectItem key={currency.code} value={currency.code}>
                              {currency.code}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Dialog open={showWalletModal} onOpenChange={setShowWalletModal}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs px-3 py-1">
                    Connect
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Connect a wallet</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white" size="lg">
                      Get NFTVerse Wallet
                    </Button>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-between" size="lg">
                        <div className="flex items-center gap-2">
                          <img src="/metamask.png" alt="MetaMask" className="w-6 h-6" />
                          MetaMask
                        </div>
                        <span className="text-muted-foreground">Detected</span>
                      </Button>
                      <Button variant="outline" className="w-full justify-between" size="lg">
                        <div className="flex items-center gap-2">
                          <img src="/walletconnect.png" alt="WalletConnect" className="w-6 h-6" />
                          WalletConnect
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-2 bg-primary/5">
          <AnnouncementBar tokenData={tokenData} />
          <AnnouncementBar tokenData={[...tokenData].reverse()} />
        </div>

        <div className="border-t">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="for-you" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b">
                <TabsTrigger value="for-you" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  For You
                </TabsTrigger>
                <TabsTrigger value="following" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Following
                </TabsTrigger>
                <TabsTrigger value="spaces" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  Spaces
                </TabsTrigger>
                <TabsTrigger value="onbase" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  onBase
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-3">
            {[
              { icon: <Home size={24} />, label: "Home", path: "/" },
              { icon: <Search size={24} />, label: "Search", path: "/search" },
              { icon: <Brain size={24} />, label: "AI", path: "/ai" },
              { icon: <ImageIcon size={24} />, label: "Media", path: "/media" },
              { icon: <Bell size={24} />, label: "Alerts", path: "/alerts" },
              { icon: <MessageSquare size={24} />, label: "Messages", path: "/messages" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center space-y-1 transition-colors ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
