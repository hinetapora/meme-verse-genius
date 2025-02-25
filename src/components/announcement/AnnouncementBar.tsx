
import { useState, useEffect } from 'react';
import { AnnouncementContent } from './AnnouncementContent';

interface AnnouncementBarProps {
  data: Array<{
    emoji: string;
    user: string;
    quantity: string;
    token: string;
    marketCap: string;
    replies: string;
  }>;
  onClick?: () => void;
}

export const AnnouncementBar = ({ data, onClick }: AnnouncementBarProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <div className="announcement-bar cursor-pointer" onClick={onClick}>
      <AnnouncementContent data={data[currentIndex]} />
    </div>
  );
};
