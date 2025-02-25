import { useState } from "react";
import { useTranslation } from 'react-i18next';
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
import { ChevronRight } from "lucide-react";
import { AnnouncementBar } from "./announcement/AnnouncementBar";
import { NavigationDrawer } from "./navigation/NavigationDrawer";
import { BottomNavigation } from "./navigation/BottomNavigation";
import { SettingsDialog } from "./settings/SettingsDialog";

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
            <NavigationDrawer />
            <span className="text-2xl font-bold absolute left-1/2 transform -translate-x-1/2">𝓟</span>
            <div className="flex items-center gap-2">
              <SettingsDialog />
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
                <FilterDialog open={showFilterModal} onOpenChange={setShowFilterModal} />
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

      <BottomNavigation />
    </div>
  );
};

export default Layout;
