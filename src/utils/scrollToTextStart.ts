const scrollToTextStart = (scrollRef: any) => {
  scrollRef.scrollIntoView({behavior: 'smooth'});
  return null;
};

export default scrollToTextStart;
