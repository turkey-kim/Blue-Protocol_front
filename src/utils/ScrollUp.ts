import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export default function ScrollToTop() {
  const {pathname} = useLocation();
  const targetUrl = ['/', '/news', '/game', '/guide', '/database'];

  useEffect(() => {
    if (targetUrl.includes(pathname)) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }, [pathname]);

  return null;
}
