import { useState } from "react";
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FilterDialog from "./FilterDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { AnnouncementBar } from "./announcement/AnnouncementBar";
import { NavigationDrawer } from "./navigation/NavigationDrawer";
import { BottomNavigation } from "./navigation/BottomNavigation";
import { SettingsDialog } from "./settings/SettingsDialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t } = useTranslation();
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [mobileBarType, setMobileBarType] = useState<'transactions' | 'mints'>('transactions');

  const toggleMobileBar = () => {
    setMobileBarType(prev => prev === 'transactions' ? 'mints' : 'transactions');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="hidden md:grid grid-cols-2 gap-4 px-4 py-2 bg-primary/5">
        <div className="rounded-lg overflow-hidden">
          <AnnouncementBar data={transactionData} />
        </div>
        <div className="rounded-lg overflow-hidden">
          <AnnouncementBar data={mintData} />
        </div>
      </div>
      
      <div className="block md:hidden px-4 py-2 bg-primary/5">
        <div className="rounded-lg overflow-hidden">
          <AnnouncementBar 
            data={mobileBarType === 'transactions' ? transactionData : mintData}
            onClick={toggleMobileBar}
          />
        </div>
      </div>

      <header className="border-b bg-background sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavigationDrawer />
            <span className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">𝓡</span>
            <div className="flex items-center gap-2">
              <SettingsDialog />
              <Dialog open={showWalletModal} onOpenChange={setShowWalletModal}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs px-3 py-1">
                    {t('common.connect')}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] rounded-3xl bg-background border-0">
                  <div className="p-6 space-y-6">
                    <div className="text-center space-y-2">
                      <img src="/trust.svg" alt="RUGTRON" className="w-16 h-16 mx-auto" />
                      <h2 className="text-xl font-semibold">CONNECT WITH RUGTRON</h2>
                    </div>
                    
                    <div className="space-y-4">
                      <Button
                        variant="outline"
                        className="w-full justify-between bg-background hover:bg-accent border-border h-[60px] rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src="/base.svg" alt="Base" className="w-8 h-8" />
                          <span className="text-base font-normal">Base</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-background hover:bg-accent border-border h-[60px] rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src="/walletconnect.svg" alt="WalletConnect" className="w-8 h-8" />
                          <span className="text-base font-normal">WalletConnect</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>

                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">or continue with</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-background hover:bg-accent border-border h-[60px] rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src="/metamask.svg" alt="MetaMask" className="w-8 h-8" />
                          <span className="text-base font-normal">MetaMask</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-background hover:bg-accent border-border h-[60px] rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src="/phantom.png" alt="Phantom" className="w-8 h-8" />
                          <span className="text-base font-normal">Phantom</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-between bg-background hover:bg-accent border-border h-[60px] rounded-2xl"
                      >
                        <div className="flex items-center gap-3">
                          <img src="/trust.svg" alt="Trust Wallet" className="w-8 h-8" />
                          <span className="text-base font-normal">Trust Wallet</span>
                        </div>
                        <ChevronRight className="h-5 w-5 text-muted-foreground" />
                      </Button>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                      By connecting your wallet and using RUGTRON 3000, you agree to our{" "}
                      <a href="/terms" className="text-primary hover:underline">terms</a> and{" "}
                      <a href="/conditions" className="text-primary hover:underline">conditions</a>.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="container mx-auto px-4">
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

            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowFilterModal(true)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                </Button>
                <Select defaultValue="trending">
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder={t('filters.selectRange')} />
                  </SelectTrigger>
                  <SelectContent className="bg-background border border-border">
                    <SelectItem value="trending">{t('filters.trending')}</SelectItem>
                    <SelectItem value="latest">{t('filters.latest')}</SelectItem>
                    <SelectItem value="top">{t('filters.topRated')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <span className="text-sm text-muted-foreground">
                {t('common.currentLanguage')}: {i18n.language.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>

      <BottomNavigation />

      <FilterDialog open={showFilterModal} onOpenChange={setShowFilterModal} />
    </div>
  );
};

export default Layout;
