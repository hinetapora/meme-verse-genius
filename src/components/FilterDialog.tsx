
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";

interface FilterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FilterDialog = ({ open, onOpenChange }: FilterDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t('filters.title')}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">{t('filters.marketCap')}</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t('filters.selectRange')} />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="all">{t('filters.all')}</SelectItem>
                <SelectItem value="under5k">{t('filters.under')} $5K</SelectItem>
                <SelectItem value="5kTo20k">$5K - $20K</SelectItem>
                <SelectItem value="over20k">{t('filters.over')} $20K</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-medium">{t('filters.activity')}</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t('filters.selectActivity')} />
              </SelectTrigger>
              <SelectContent className="bg-background border border-border">
                <SelectItem value="all">{t('filters.all')}</SelectItem>
                <SelectItem value="high">{t('filters.highActivity')}</SelectItem>
                <SelectItem value="medium">{t('filters.mediumActivity')}</SelectItem>
                <SelectItem value="low">{t('filters.lowActivity')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FilterDialog;
