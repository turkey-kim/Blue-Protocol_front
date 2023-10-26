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
      document.body.style.position = 'fixed';
      window.addEventListener('resize', handleClientWidth);
    } else {
      document.body.style.position = 'unset';
      window.scroll(0, scrollPosition);
    }
  }, [isNavOpen]);

  return {isNavOpen, setIsNavOpen, scrollPosition, setScrollPosition};
};

export default useSidebarControl;
