
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

const MemeCard = ({ imageUrl = "/placeholder.svg" }: { imageUrl?: string }) => (
  <Card className="overflow-hidden bg-white/50 backdrop-blur-sm animate-fade-up">
    <div className="aspect-square relative overflow-hidden">
      <img
        src={imageUrl}
        alt="Meme"
        className="object-cover w-full h-full transform transition-transform hover:scale-105"
      />
    </div>
    <div className="p-4 flex justify-between items-center">
      <Button variant="ghost" size="icon">
        <Heart className="w-5 h-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <Share2 className="w-5 h-5" />
      </Button>
    </div>
  </Card>
);

const Index = () => {
  return (
    <Layout>
      <div className="space-y-6 pb-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">MemeVerse</h1>
          <p className="text-muted-foreground">
            Create, curate, and share amazing memes
          </p>
          <Link to="/create">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Create Meme
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MemeCard />
          <MemeCard />
          <MemeCard />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
