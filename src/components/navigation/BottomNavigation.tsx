
import { Link } from "react-router-dom";
import {
  Home,
  Search,
  Brain,
  Image as ImageIcon,
  Bell,
  MessageSquare,
} from "lucide-react";

const navigationItems = [
  { icon: <Home size={24} />, path: "/" },
  { icon: <Search size={24} />, path: "/search" },
  { icon: <Brain size={24} />, path: "/ai" },
  { icon: <ImageIcon size={24} />, path: "/media" },
  { icon: <Bell size={24} />, path: "/alerts" },
  { icon: <MessageSquare size={24} />, path: "/messages" }
];

export const BottomNavigation = () => {
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-around py-3">
          {navigationItems.map((item) => (
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
  );
};
