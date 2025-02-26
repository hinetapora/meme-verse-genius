import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  MessageSquare, 
  Share, 
  Heart, 
  Eye, 
  Bookmark,
  SlidersHorizontal,
  ArrowBigUp
} from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { CardData } from "@/types/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useIOS } from "@/hooks/use-mobile";
import { useLocalStorage } from "@/hooks/use-storage";

const CARD_DATA: CardData[] = [
  {
    "created_by": "DjXkmB",
    "time": "10h ago",
    "market_cap": "$5.2K",
    "replies": 5,
    "coin_name": "Doge Official Savings Website (Savings)",
    "image_name": "Savings.jpeg"
  },
  {
    "created_by": "AjdtvD",
    "time": "5h ago",
    "market_cap": "$4.9K",
    "replies": 0,
    "coin_name": "BULL DOGE (BDOGE)",
    "image_name": "BDOGE.jpeg"
  },
  {
    "created_by": "62JdDL",
    "time": "7h ago",
    "market_cap": "$5.5K",
    "replies": 22,
    "coin_name": "doge owner new puppy (Miru)",
    "image_name": "Miru.jpeg"
  },
  {
    "created_by": "AmcLDX",
    "time": "7h ago",
    "market_cap": "$5.5K",
    "replies": 15,
    "coin_name": "1st Grok 3 Game (ThankDOGE)",
    "image_name": "ThankDOGE.jpeg"
  },
  {
    "created_by": "2z11T7",
    "time": "4h ago",
    "market_cap": "$50.4K",
    "replies": 6,
    "coin_name": "AIDOGE (AIDOGE)",
    "image_name": "AIDOGE.jpeg"
  },
  {
    "created_by": "wxP8fg",
    "time": "4h ago",
    "market_cap": "$4.7K",
    "replies": 0,
    "coin_name": "Tesla India Hiring (DOGE)",
    "image_name": "DOGE.jpeg"
  },
  {
    "created_by": "2GPgpe",
    "time": "6h ago",
    "market_cap": "$5.2K",
    "replies": 0,
    "coin_name": "DOGE IRS (DIRS)",
    "image_name": "DIRS.jpeg"
  },
  {
    "created_by": "Ck7nnN",
    "time": "10h ago",
    "market_cap": "$6.0K",
    "replies": 2,
    "coin_name": "DOGE BEST FRIEND (ICE)",
    "image_name": "ICE.jpeg"
  },
  {
    "created_by": "69uyNu",
    "time": "10h ago",
    "market_cap": "$21.1K",
    "replies": 1,
    "coin_name": "DOGE Wall of Receipts (WOR)",
    "image_name": "WOR.jpeg"
  },
  {
    "created_by": "HuZMs6",
    "time": "7h ago",
    "market_cap": "$4.7K",
    "replies": 0,
    "coin_name": "First Game Made on Grok3 (ThankDoge)",
    "image_name": "Grok3.jpeg"
  },
  {
    "created_by": "32FHTG",
    "time": "7h ago",
    "market_cap": "$8.1K",
    "replies": 73,
    "coin_name": "1st Grok 3 Game. (ThankDOGE)",
    "image_name": "ThankDOGE.jpeg"
  },
  {
    "created_by": "3D3GiG",
    "time": "7h ago",
    "market_cap": "$4.7K",
    "replies": 1,
    "coin_name": "doge owner new puppy (Miru)",
    "image_name": "Miru.jpeg"
  }
];

const CARD_COLORS = [
  "bg-[#9b87f5]/50",
  "bg-[#7E69AB]/50",
  "bg-[#D946EF]/50",
  "bg-[#F97316]/50",
  "bg-[#0EA5E9]/50",
  "bg-[#8B5CF6]/50"
];

const MemeCard = ({ data, index, isFirst }: { data: CardData; index: number; isFirst: boolean }) => (
  <Card 
    className={`overflow-hidden backdrop-blur-sm animate-fade-up hover:scale-105 transition-transform ${
      CARD_COLORS[index % CARD_COLORS.length]
    } ${isFirst ? 'animate-wobble' : ''}`}
  >
    <div className="aspect-square relative overflow-hidden">
      <img
        src={`/images/${data.image_name}`}
        alt={data.coin_name}
        className="object-cover w-full h-full transform transition-transform hover:scale-105"
      />
    </div>
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>{data.created_by}</span>
            <span>·</span>
            <span>{data.time}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <MessageSquare className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-2 -right-2 text-[10px] text-muted-foreground">
              {data.replies}
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Heart className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <MessageSquare className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Share className="w-3 h-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <Bookmark className="w-3 h-3" />
          </Button>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <div className="font-medium text-foreground">{data.coin_name}</div>
        <div className="text-muted-foreground">
          Market Cap: <span className="font-medium text-foreground">{data.market_cap}</span>
        </div>
      </div>
    </div>
  </Card>
);

const IOSInstallModal = ({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (open: boolean) => void }) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px] text-center">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold mb-4">
          Add to Home Screen
        </DialogTitle>
      </DialogHeader>
      <div className="space-y-6 py-4">
        <ArrowBigUp className="w-12 h-12 mx-auto animate-bounce text-primary" />
        <p className="text-lg">
          Tap the share icon and select 'Add to Home Screen' to save the app for quick access.
        </p>
        <div className="flex justify-center">
          <Button onClick={() => onOpenChange(false)}>Got it!</Button>
        </div>
      </div>
    </DialogContent>
  </Dialog>
);

const Index = () => {
  const [displayedCards, setDisplayedCards] = useState(CARD_DATA);
  const isIOS = useIOS();
  const [hasShownIOSPrompt, setHasShownIOSPrompt] = useLocalStorage('ios-prompt-shown', false);
  const [showIOSModal, setShowIOSModal] = useState(false);

  useEffect(() => {
    if (isIOS && !hasShownIOSPrompt) {
      setShowIOSModal(true);
      setHasShownIOSPrompt(true);
    }
  }, [isIOS, hasShownIOSPrompt]);

  useEffect(() => {
    const cycleCards = () => {
      const randomInterval = Math.random() * (1200 - 700) + 700;
      const timeoutId = setTimeout(() => {
        setDisplayedCards(prev => {
          const newCards = [...prev];
          const firstCard = newCards.shift();
          if (firstCard) newCards.push(firstCard);
          return newCards;
        });
        cycleCards();
      }, randomInterval);

      return () => clearTimeout(timeoutId);
    };

    cycleCards();
  }, []);

  return (
    <Layout>
      <div className="space-y-6 pb-20">
        {/* <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
            <Select defaultValue="trending">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="top">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div> */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedCards.map((data, index) => (
            <MemeCard 
              key={data.created_by} 
              data={data} 
              index={index}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>

      <IOSInstallModal 
        isOpen={showIOSModal} 
        onOpenChange={setShowIOSModal}
      />
    </Layout>
  );
};

export default Index;
