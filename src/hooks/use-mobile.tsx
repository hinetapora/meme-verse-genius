
import { useState, useEffect } from 'react';

export const useIOS = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkIsIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };

    setIsIOS(checkIsIOS());
  }, []);

  return isIOS;
};
