
import { useTranslation } from 'react-i18next';

interface AnnouncementContentProps {
  data: {
    emoji: string;
    user: string;
    quantity: string;
    token: string;
    marketCap: string;
    replies: string;
  };
}

export const AnnouncementContent = ({ data }: AnnouncementContentProps) => {
  const { t } = useTranslation();
  
  return (
    <div className="announcement-content">
      <span className="emoji">{data.emoji}</span>
      <span className="user">{data.user}</span> {t('activity.action')}
      <span className="quantity">{data.quantity}</span> {t('common.of')}
      <span className="token">{data.token}</span>
      <span className="market-cap">{t('common.marketCap')}: {data.marketCap}</span>
      <span className="replies">{t('common.replies')}: {data.replies}</span>
    </div>
  );
};
