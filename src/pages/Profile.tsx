
import Layout from "@/components/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://i.seadn.io/s/raw/files/50688c4879e0f8e9d2d65ed84eec54e3.png?auto=format&dpr=1&w=1000" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">NFTVerse</h1>
            <p className="text-muted-foreground">@nftverse</p>
            <div className="flex gap-4 text-sm">
              <span>
                <strong>2,313</strong> {t('profile.following')}
              </span>
              <span>
                <strong>5,808</strong> {t('profile.followers')}
              </span>
            </div>
          </div>
          <Button variant="outline" className="ml-auto">
            Edit profile
          </Button>
        </div>

        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Activity</h2>
          <div className="text-muted-foreground text-center py-8">
            No activity yet
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
