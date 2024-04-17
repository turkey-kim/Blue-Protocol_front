import {useEffect, useRef} from 'react';
import {useSetRecoilState} from 'recoil';
import {textStartRef} from '../states/atoms';

const TextStartPoint = () => {
  const setTextRef = useSetRecoilState(textStartRef);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTextRef(scrollRef.current);
  }, [scrollRef]);

  return <div ref={scrollRef}></div>;
};

export default TextStartPoint;
