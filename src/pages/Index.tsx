import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { 
  MessageSquare, 
  Share, 
  Heart, 
  Eye, 
  Bookmark,
  SlidersHorizontal
} from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NFT_IMAGES = [
  "https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000",
  "https://i.seadn.io/s/raw/files/bac3790dda2968cb6d839753530b6202.png?auto=format&dpr=1&w=1000",
  "https://i.seadn.io/s/raw/files/1b09d5906d743add176aa38c88c866a3.png?auto=format&dpr=1&w=1000",
  "https://i.seadn.io/s/raw/files/a96b7d8ec41ba827f82b32d8564e9389.png?auto=format&dpr=1&w=1000"
];

const CARD_COLORS = [
  "bg-[#9b87f5]/50",
  "bg-[#7E69AB]/50",
  "bg-[#D946EF]/50",
  "bg-[#F97316]/50",
  "bg-[#0EA5E9]/50",
  "bg-[#8B5CF6]/50"
];

const EXTENDED_IMAGES = Array(25).fill(NFT_IMAGES).flat();

const MemeCard = ({ imageUrl, index }: { imageUrl: string; index: number }) => (
  <Card className={`overflow-hidden backdrop-blur-sm animate-fade-up hover:scale-105 transition-transform ${CARD_COLORS[index % CARD_COLORS.length]}`}>
    <div className="aspect-square relative overflow-hidden">
      <img
        src={imageUrl}
        alt="NFT"
        className="object-cover w-full h-full transform transition-transform hover:scale-105"
      />
    </div>
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Eye className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-2 -right-2 text-[10px] text-muted-foreground">2.4k</span>
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
        <div className="text-muted-foreground">
          Price: <span className="font-medium text-foreground">0.12345 ETH</span>
        </div>
        <div className="text-muted-foreground">
          Last sale: <span className="font-medium text-foreground">0.11 ETH</span>
        </div>
      </div>
    </div>
  </Card>
);

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 pb-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
            <Select defaultValue="trending">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="latest">Latest</SelectItem>
                <SelectItem value="top">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {EXTENDED_IMAGES.map((imageUrl, index) => (
            <MemeCard key={index} imageUrl={imageUrl} index={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
