
import { Image, Upload, Smile } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl">
              NFTVerse
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                Upgrade
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>PFP</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-around py-3">
            <Link
              to="/"
              className={`flex flex-col items-center space-y-1 transition-colors ${
                isActive("/") ? "text-primary" : "text-gray-500 hover:text-primary"
              }`}
            >
              <Image size={24} />
              <span className="text-xs">Gallery</span>
            </Link>
            <Link
              to="/create"
              className={`flex flex-col items-center space-y-1 transition-colors ${
                isActive("/create")
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <Upload size={24} />
              <span className="text-xs">Create</span>
            </Link>
            <Link
              to="/trending"
              className={`flex flex-col items-center space-y-1 transition-colors ${
                isActive("/trending")
                  ? "text-primary"
                  : "text-gray-500 hover:text-primary"
              }`}
            >
              <Smile size={24} />
              <span className="text-xs">Trending</span>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Layout;
