
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

// Repeat images for endless scroll
const EXTENDED_IMAGES = [...NFT_IMAGES, ...NFT_IMAGES, ...NFT_IMAGES];

const MemeCard = ({ imageUrl }: { imageUrl: string }) => (
  <Card className="overflow-hidden bg-white/50 backdrop-blur-sm animate-fade-up">
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
          <Eye className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">2.4k</span>
        </div>
        <div className="flex gap-6">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MessageSquare className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Share className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center border-t pt-4 text-sm">
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
            <MemeCard key={index} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Index;
