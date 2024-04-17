import {useEffect, useState} from 'react';
import {isMobileNavOpen} from '../states/atoms';
import {useRecoilState} from 'recoil';

const useSidebarControl = () => {
  const [isNavOpen, setIsNavOpen] = useRecoilState(isMobileNavOpen);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleClientWidth = () => {
    if (document.body.clientWidth >= 990 && isNavOpen) {
      setIsNavOpen(false);
      window.removeEventListener('resize', handleClientWidth);
    }
  };
  useEffect(() => {
    if (isNavOpen) {
      setScrollPosition(window.scrollY);
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('resize', handleClientWidth);
    } else {
      document.documentElement.style.overflow = 'auto';
    }
  }, [isNavOpen]);

  return {isNavOpen, setIsNavOpen, scrollPosition, setScrollPosition};
};

export default useSidebarControl;
