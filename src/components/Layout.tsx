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
  ChevronRight,
  User,
  Crown,
  Users,
  Bookmark,
  Briefcase,
  List,
  Hash,
  DollarSign,
  Settings,
  HelpCircle
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTranslation } from 'react-i18next';
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
  const { t, i18n } = useTranslation();
  const isActive = (path: string) => location.pathname === path;

  const [mounted, setMounted] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const tokenData = [
    {
      emoji: "🚀",
      user: "77TQRY",
      quantity: "0.0116 SOL",
      token: "CHILLTATE",
      marketCap: "$47.2K",
      replies: "1",
    },
    {
      emoji: "💎",
      user: "XYZ123",
      quantity: "0.5 BTC",
      token: "BITCOIN",
      marketCap: "$60K",
      replies: "5",
    },
    {
      emoji: "🔥",
      user: "ABC456",
      quantity: "10 ETH",
      token: "ETHEREUM",
      marketCap: "$25K",
      replies: "2",
    },
    {
      emoji: "🚀",
      user: "DEF789",
      quantity: "50 ADA",
      token: "CARDANO",
      marketCap: "$0.3K",
      replies: "10",
    },
    {
      emoji: "💰",
      user: "GHI012",
      quantity: "20 DOGE",
      token: "DOGECOIN",
      marketCap: "$0.08K",
      replies: "3",
    },
    {
      emoji: "🌕",
      user: "JKL345",
      quantity: "2 AVAX",
      token: "AVALANCHE",
      marketCap: "$10K",
      replies: "7",
    },
    {
      emoji: "🌍",
      user: "MNO678",
      quantity: "100 LTC",
      token: "LITECOIN",
      marketCap: "$40K",
      replies: "8",
    },
    {
      emoji: "🌈",
      user: "PQR901",
      quantity: "0.2 XRP",
      token: "XRP",
      marketCap: "$5K",
      replies: "4",
    },
    {
      emoji: "💎",
      user: "STU234",
      quantity: "0.5 DOT",
      token: "POLKADOT",
      marketCap: "$3K",
      replies: "6",
    },
    {
      emoji: "🎉",
      user: "VWX567",
      quantity: "1 BCH",
      token: "BITCOIN CASH",
      marketCap: "$10.5K",
      replies: "9",
    },
    {
      emoji: "🌟",
      user: "YZA890",
      quantity: "15 UNI",
      token: "UNISWAP",
      marketCap: "$20K",
      replies: "11",
    },
    {
      emoji: "🔗",
      user: "BCD345",
      quantity: "0.25 LINK",
      token: "CHAINLINK",
      marketCap: "$15K",
      replies: "12",
    },
    {
      emoji: "💵",
      user: "EFG678",
      quantity: "30 USDT",
      token: "TETHER",
      marketCap: "$30K",
      replies: "13",
    },
    {
      emoji: "⚡",
      user: "HIJ901",
      quantity: "10 MATIC",
      token: "POLYGON",
      marketCap: "$35K",
      replies: "14",
    },
    {
      emoji: "🔋",
      user: "KLM234",
      quantity: "0.75 XLM",
      token: "STELLAR",
      marketCap: "$12K",
      replies: "15",
    },
  ];

  const drawerLinks = [
    { icon: User, label: t('nav.profile'), path: '/profile' },
    { icon: Crown, label: t('nav.premium'), path: '/premium' },
    { icon: Users, label: t('nav.communities'), path: '/communities' },
    { icon: Bookmark, label: t('nav.bookmarks'), path: '/bookmarks' },
    { icon: Briefcase, label: t('nav.jobs'), path: '/jobs' },
    { icon: List, label: t('nav.lists'), path: '/lists' },
    { icon: Hash, label: t('nav.spaces'), path: '/spaces' },
    { icon: DollarSign, label: t('nav.monetization'), path: '/monetization' }
  ];

  const bottomDrawerLinks = [
    { icon: Settings, label: t('nav.settings'), path: '/settings' },
    { icon: HelpCircle, label: t('nav.help'), path: '/help' }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 items-center h-16">
            <Sheet>
              <SheetTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000" />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">NFTVerse</h3>
                      <p className="text-sm text-muted-foreground">@nftverse</p>
                    </div>
                  </div>

                  <div className="flex gap-6 mb-6">
                    <div>
                      <span className="font-bold">2,313</span>
                      <span className="text-sm text-muted-foreground ml-1">{t('profile.following')}</span>
                    </div>
                    <div>
                      <span className="font-bold">5,808</span>
                      <span className="text-sm text-muted-foreground ml-1">{t('profile.followers')}</span>
                    </div>
                  </div>

                  <nav className="space-y-4">
                    {drawerLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="flex items-center gap-3 text-lg hover:bg-accent px-2 py-2 rounded-md"
                      >
                        <link.icon className="h-6 w-6" />
                        {link.label}
                      </Link>
                    ))}
                    <div className="border-t my-4" />
                    {bottomDrawerLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="flex items-center gap-3 text-lg hover:bg-accent px-2 py-2 rounded-md"
                      >
                        <link.icon className="h-6 w-6" />
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <span className="text-2xl font-bold justify-self-center">𝓟</span>

            <div className="flex items-center gap-2 justify-self-end">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-3xl bg-background/95 backdrop-blur-sm">
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
                        <SelectTrigger className="w-[100px] bg-background">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border">
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
                      <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
                        <SelectTrigger className="w-[100px] bg-background">
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border">
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
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
                        <SelectContent className="bg-background border border-border">
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
                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        const connectButton = document.querySelector('w3m-connect-button');
                        if (connectButton) {
                          (connectButton as any).click();
                        }
                      }}
                    >
                      <img src="/metamask.svg" alt="MetaMask" className="h-5 w-5" />
                      MetaMask
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        const walletButton = document.querySelector('w3m-connect-button');
                        if (walletButton) {
                          (walletButton as any).click();
                        }
                      }}
                    >
                      <img src="/phantom.png" alt="Phantom" className="h-5 w-5" />
                      Phantom
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        const walletButton = document.querySelector('w3m-connect-button');
                        if (walletButton) {
                          (walletButton as any).click();
                        }
                      }}
                    >
                      <img src="/trust.svg" alt="Trust Wallet" className="h-5 w-5" />
                      Trust Wallet
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        const walletButton = document.querySelector('w3m-connect-button');
                        if (walletButton) {
                          (walletButton as any).click();
                        }
                      }}
                    >
                      <img src="/coinbase.svg" alt="Coinbase" className="h-5 w-5" />
                      Coinbase Wallet
                    </Button>

                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">
                          More options
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full justify-start gap-2"
                      onClick={() => {
                        const walletButton = document.querySelector('w3m-connect-button');
                        if (walletButton) {
                          (walletButton as any).click();
                        }
                      }}
                    >
                      <img src="/walletconnect.svg" alt="WalletConnect" className="h-5 w-5" />
                      Other Wallets
                    </Button>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      By connecting a wallet, you agree to NFTVerse's Terms of Service and consent to its Privacy Policy.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-2 gap-4 px-4 py-2 bg-primary/5">
          <AnnouncementBar tokenData={tokenData} />
          <AnnouncementBar tokenData={[...tokenData].reverse()} />
        </div>
        
        <div className="block md:hidden px-4 py-2 bg-primary/5">
          <AnnouncementBar tokenData={tokenData} />
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
              { icon: <Home size={24} />, path: "/" },
              { icon: <Search size={24} />, path: "/search" },
              { icon: <Brain size={24} />, path: "/ai" },
              { icon: <ImageIcon size={24} />, path: "/media" },
              { icon: <Bell size={24} />, path: "/alerts" },
              { icon: <MessageSquare size={24} />, path: "/messages" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`transition-colors ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
