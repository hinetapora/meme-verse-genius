
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import {
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
} from "lucide-react";

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

export const NavigationDrawer = () => {
  const { t } = useTranslation();

  return (
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
  );
};
