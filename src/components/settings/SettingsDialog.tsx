
import { useTheme } from "next-themes";
import { useTranslation } from 'react-i18next';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Sun, Moon, Languages, Wallet } from "lucide-react";

const CURRENCIES = [
  { code: "USD", name: "US Dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "British Pound" },
  { code: "JPY", name: "Japanese Yen" },
  { code: "CNY", name: "Chinese Yuan" },
  { code: "KRW", name: "Korean Won" },
  { code: "INR", name: "Indian Rupee" },
  { code: "BRL", name: "Brazilian Real" },
  { code: "AUD", name: "Australian Dollar" },
  { code: "CAD", name: "Canadian Dollar" }
];

export const SettingsDialog = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] rounded-3xl bg-background/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle>{t('settings.preferences')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span>{t('settings.theme')}</span>
            </div>
            <Select onValueChange={setTheme} defaultValue={theme}>
              <SelectTrigger className="w-[100px] bg-background">
                <SelectValue placeholder={t('settings.theme')} />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">Auto</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              <span>{t('settings.language')}</span>
            </div>
            <Select defaultValue={i18n.language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[100px] bg-background">
                <SelectValue placeholder={t('settings.language')} />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
                <SelectItem value="zh">中文</SelectItem>
                <SelectItem value="hi">हिंदी</SelectItem>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="pt">Português</SelectItem>
                <SelectItem value="bn">বাংলা</SelectItem>
                <SelectItem value="ru">Русский</SelectItem>
                <SelectItem value="fr">Français</SelectItem>
                <SelectItem value="de">Deutsch</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              <span>{t('settings.currency')}</span>
            </div>
            <Select defaultValue="USD">
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder={t('settings.currency')} />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                {CURRENCIES.map((currency) => (
                  <SelectItem key={currency.code} value={currency.code}>
                    {currency.code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
