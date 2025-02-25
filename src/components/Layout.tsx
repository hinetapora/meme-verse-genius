import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import FilterDialog from "./FilterDialog";
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
  HelpCircle,
  SlidersHorizontal
} from "lucide-react";

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "KRW", name: "Korean Won" },
  { code: "INR", name: "Indian Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" }
];

const drawerLinks = [
  { path: "/profile", icon: User, label: "Profile" },
  { path: "/premium", icon: Crown, label: "Premium" },
  { path: "/communities", icon: Users, label: "Communities" },
  { path: "/bookmarks", icon: Bookmark, label: "Bookmarks" },
  { path: "/jobs", icon: Briefcase, label: "Jobs" },
  { path: "/lists", icon: List, label: "Lists" },
  { path: "/spaces", icon: Hash, label: "Spaces" },
  { path: "/monetization", icon: DollarSign, label: "Monetization" },
];

const bottomDrawerLinks = [
  { path: "/settings", icon: Settings, label: "Settings and privacy" },
  { path: "/help", icon: HelpCircle, label: "Help Center" },
];

const transactionData = [
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

const mintData = [
  {
    emoji: "🎨",
    user: "ArtLover",
    quantity: "1",
    token: "CryptoPunk #1234",
    marketCap: "$120K",
    replies: "5",
  },
  {
    emoji: "🖼️",
    user: "NFTMaster",
    quantity: "2",
    token: "BAYC #5678",
    marketCap: "$250K",
    replies: "8",
  },
  {
    emoji: "✨",
    user: "DigitalArtist",
    quantity: "3",
    token: "Azuki #9012",
    marketCap: "$80K",
    replies: "3",
  },
  {
    emoji: "🖌️",
    user: "CreativeOne",
    quantity: "1",
    token: "Moonbirds #3456",
    marketCap: "$150K",
    replies: "10",
  },
  {
    emoji: "🌈",
    user: "NFTCollector",
    quantity: "5",
    token: "Doodles #6789",
    marketCap: "$90K",
    replies: "7",
  },
  {
    emoji: "🌟",
    user: "ArtEnthusiast",
    quantity: "2",
    token: "CloneX #2345",
    marketCap: "$200K",
    replies: "6",
  },
  {
    emoji: "🎭",
    user: "MetaverseFan",
    quantity: "1",
    token: "Otherdeed #7890",
    marketCap: "$110K",
    replies: "9",
  },
  {
    emoji: "💎",
    user: "CryptoArtLover",
    quantity: "4",
    token: "PudgyPenguins #4567",
    marketCap: "$70K",
    replies: "4",
  },
  {
    emoji: "🚀",
    user: "NFTInvestor",
    quantity: "2",
    token: "CoolCats #8901",
    marketCap: "$130K",
    replies: "2",
  },
  {
    emoji: "💡",
    user: "DigitalPioneer",
    quantity: "3",
    token: "World of Women #5678",
    marketCap: "$160K",
    replies: "11",
  },
  {
    emoji: "🌌",
    user: "NFTExplorer",
    quantity: "1",
    token: "Bored Ape Kennel Club #9012",
    marketCap: "$100K",
    replies: "1",
  },
  {
    emoji: "🎉",
    user: "ArtInnovator",
    quantity: "5",
    token: "Mutant Ape Yacht Club #2345",
    marketCap: "$140K",
    replies: "8",
  },
  {
    emoji: "🎈",
    user: "NFTVisionary",
    quantity: "2",
    token: "Meebits #7890",
    marketCap: "$180K",
    replies: "5",
  },
  {
    emoji: "🎁",
    user: "CryptoArtCollector",
    quantity: "3",
    token: "VeeFriends #4567",
    marketCap: "$95K",
    replies: "3",
  },
  {
    emoji: "🎊",
    user: "NFTEnthusiast",
    quantity: "1",
    token: "CyberKongz #8901",
    marketCap: "$125K",
    replies: "10",
  },
];

const AnnouncementBar = ({ data, onClick }: { data: any[], onClick?: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [data.length]);

  const currentData = data[currentIndex];

  return (
    <div className="announcement-bar cursor-pointer" onClick={onClick}>
      <div className="announcement-content">
        <span className="emoji">{currentData.emoji}</span>
        <span className="user">{currentData.user}</span> {t('activity.action')}
        <span className="quantity">{currentData.quantity}</span> {t('common.of')}
        <span className="token">{currentData.token}</span>
        <span className="market-cap">{t('common.marketCap')}: {currentData.marketCap}</span>
        <span className="replies">{t('common.replies')}: {currentData.replies}</span>
      </div>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [mobileBarType, setMobileBarType] = useState<'transactions' | 'mints'>('transactions');

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileBar = () => {
    setMobileBarType(prev => prev === 'transactions' ? 'mints' : 'transactions');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="hidden md:grid grid-cols-2 gap-4 px-4 py-2 bg-primary/5">
        <AnnouncementBar data={transactionData} />
        <AnnouncementBar data={mintData} />
      </div>
      
      <div className="block md:hidden px-4 py-2 bg-primary/5">
        <AnnouncementBar 
          data={mobileBarType === 'transactions' ? transactionData : mintData}
          onClick={toggleMobileBar}
        />
      </div>

      <header className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
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
                        {t(`nav.${link.label.toLowerCase()}`)}
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
                        {t(`nav.${link.label.toLowerCase()}`)}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>

            <span className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">𝓟</span>

            <div className="flex items-center gap-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-3xl bg-background/95 backdrop-blur-sm">
                  <DialogHeader>
                    <DialogTitle>{t('settings.preferences')}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                        <span>{t('settings.theme')}</span>
                      </div>
                      <Select onValueChange={setTheme} defaultValue={theme}>
                        <SelectTrigger className="w-[100px] bg-background">
                          <SelectValue placeholder={t('settings.theme')} />
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
                        <span>{t('settings.language')}</span>
                      </div>
                      <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
                        <SelectTrigger className="w-[100px] bg-background">
                          <SelectValue placeholder={t('settings.language')} />
                        </SelectTrigger>
                        <SelectContent className="bg-background border border-border">
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Español</SelectItem>
                          <SelectItem value="zh">中文</SelectItem>
                          <SelectItem value="hi">हिंदी</SelectItem>
                          <SelectItem value="ar">العربية</SelectItem>
                          <SelectItem value="pt">Português</SelectItem>
                          <SelectItem value="bn">বাংলা</SelectItem>
                          <SelectItem value="ru">Русский</SelectItem>
                          <SelectItem value="fr">Français</SelectItem>
                          <SelectItem value="de">Deutsch</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4" />
                        <span>{t('settings.currency')}</span>
                      </div>
                      <Select defaultValue="USD">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder={t('settings.currency')} />
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
                    {t('common.connect')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-3xl bg-[#1c1c1c]/95 backdrop-blur-sm p-0">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-2xl font-normal">Connect a wallet</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-3 p-6">
                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between bg-[#1c1c1c] hover:bg-[#2a2a2a] border-[#2a2a2a] h-[60px] rounded-2xl"
                        onClick={() => {
                          const connectButton = document.querySelector('#w3m-connect-button');
                          if (connectButton) {
                            (connectButton as HTMLElement).click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img src="/coinbase.svg" alt="Coinbase" className="w-8 h-8" />
                          <span className="text-base font-normal">Coinbase Wallet</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-[#1c1c1c] hover:bg-[#2a2a2a] border-[#2a2a2a] h-[60px] rounded-2xl"
                        onClick={() => {
                          const connectButton = document.querySelector('#w3m-connect-button');
                          if (connectButton) {
                            (connectButton as HTMLElement).click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img src="/walletconnect.svg" alt="WalletConnect" className="w-8 h-8" />
                          <span className="text-base font-normal">WalletConnect</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </div>
                    
                    <div className="relative py-2">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-[#2a2a2a]" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#1c1c1c] px-2 text-muted-foreground">
                          OTHER POPULAR WALLETS
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        variant="outline"
                        className="w-full justify-between bg-[#1c1c1c] hover:bg-[#2a2a2a] border-[#2a2a2a] h-[60px] rounded-2xl"
                        onClick={() => {
                          const connectButton = document.querySelector('#w3m-connect-button');
                          if (connectButton) {
                            (connectButton as HTMLElement).click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img src="/metamask.svg" alt="MetaMask" className="w-8 h-8" />
                          <span className="text-base font-normal">MetaMask</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Detected</span>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-[#1c1c1c] hover:bg-[#2a2a2a] border-[#2a2a2a] h-[60px] rounded-2xl"
                        onClick={() => {
                          const connectButton = document.querySelector('#w3m-connect-button');
                          if (connectButton) {
                            (connectButton as HTMLElement).click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img src="/phantom.png" alt="Phantom" className="w-8 h-8" />
                          <span className="text-base font-normal">Phantom</span>
                        </div>
                        <span className="text-sm text-muted-foreground">Detected</span>
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-[#1c1c1c] hover:bg-[#2a2a2a] border-[#2a2a2a] h-[60px] rounded-2xl"
                        onClick={() => {
                          const connectButton = document.querySelector('#w3m-connect-button');
                          if (connectButton) {
                            (connectButton as HTMLElement).click();
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <img src="/trust.svg" alt="Trust Wallet" className="w-8 h-8" />
                          <span className="text-base font-normal">Trust Wallet</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </div>

                    <p className="text-center text-sm text-muted-foreground mt-6">
                      By connecting a wallet, you agree to NFTVerse's Terms of Service and consent to its Privacy Policy.
                    </p>
                  </div>

                  <div className="hidden">
                    <div id="w3m-button"></div>
                    <div id="w3m-connect-button"></div>
                    <div id="w3m-network-button"></div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" onClick={() => setShowFilterModal(true)}>
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
                <Select defaultValue="trending">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder={t('common.filterBy')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="trending">{t('filters.trending')}</SelectItem>
                    <SelectItem value="latest">{t('filters.latest')}</SelectItem>
                    <SelectItem value="top">{t('filters.topRated')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-sm text-muted-foreground">
                {t('common.currentLanguage')}: {i18n.language.toUpperCase()}
              </div>
            </div>

            <Tabs defaultValue="for-you" className="w-full">
              <TabsList className="w-full justify-start bg-transparent border-b">
                <TabsTrigger value="for-you" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  {t('tabs.forYou')}
                </TabsTrigger>
                <TabsTrigger value="following" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  {t('tabs.following')}
                </TabsTrigger>
                <TabsTrigger value="spaces" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  {t('tabs.spaces')}
                </TabsTrigger>
                <TabsTrigger value="onbase" className="flex-1 data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
                  {t('tabs.onbase')}
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
