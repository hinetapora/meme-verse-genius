
import { 
  Home, 
  Search, 
  Brain, 
  Image as ImageIcon, 
  Bell, 
  MessageSquare,
  User,
  Users,
  Settings,
  LogOut
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Drawer>
              <DrawerTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src="https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000" />
                          <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold">PunkVerse</h3>
                          <p className="text-sm text-muted-foreground">@punkverse</p>
                        </div>
                      </div>
                    </DrawerTitle>
                    <DrawerDescription>
                      <div className="flex gap-4 mt-4">
                        <div>
                          <div className="font-bold">256</div>
                          <div className="text-sm text-muted-foreground">Following</div>
                        </div>
                        <div>
                          <div className="font-bold">1.2K</div>
                          <div className="text-sm text-muted-foreground">Followers</div>
                        </div>
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <Link to="/" className="flex items-center gap-3 text-lg">
                      <Home size={24} /> Home
                    </Link>
                    <Link to="/profile" className="flex items-center gap-3 text-lg">
                      <User size={24} /> Profile
                    </Link>
                    <Link to="/following" className="flex items-center gap-3 text-lg">
                      <Users size={24} /> Following
                    </Link>
                    <Link to="/settings" className="flex items-center gap-3 text-lg">
                      <Settings size={24} /> Settings
                    </Link>
                    <hr />
                    <button className="flex items-center gap-3 text-lg text-red-500">
                      <LogOut size={24} /> Logout
                    </button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
            
            <div className="text-2xl font-bold">𝓟</div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="text-xs px-3 py-1">
                  Upgrade
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Upgrade to PRO</DialogTitle>
                  <DialogDescription>
                    Get access to exclusive features and benefits
                  </DialogDescription>
                </DialogHeader>
                <Card className="p-6">
                  <h3 className="font-bold text-xl mb-2">PRO Benefits</h3>
                  <ul className="space-y-2 mb-4">
                    <li>• Unlimited NFT minting</li>
                    <li>• Priority access to drops</li>
                    <li>• Exclusive community access</li>
                    <li>• Advanced analytics</li>
                  </ul>
                  <Button className="w-full">Upgrade Now</Button>
                </Card>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="border-t">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="for-you" className="w-full">
              <TabsList className="w-full justify-start">
                <TabsTrigger value="for-you" className="flex-1">For You</TabsTrigger>
                <TabsTrigger value="following" className="flex-1">Following</TabsTrigger>
                <TabsTrigger value="spaces" className="flex-1">Spaces</TabsTrigger>
                <TabsTrigger value="onbase" className="flex-1">onBase</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="bg-primary/10 border-t animate-pulse">
          <div className="container mx-auto px-4 py-2">
            <p className="text-sm text-primary">
              🔥 New NFT just dropped: CryptoPunk #9999 minted for 100 ETH
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6 animate-fade-in">
        {children}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200">
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
                  isActive(item.path) ? "text-primary" : "text-gray-500 hover:text-primary"
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
