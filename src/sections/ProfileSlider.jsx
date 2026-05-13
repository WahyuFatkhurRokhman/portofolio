import { useRef } from 'react';
import Profile from './Profile';

export default function ProfileSlider({ members, activeIndex, setActiveIndex }) {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      
      setActiveIndex(index); 
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">
      <div className="rounded-[2.5rem] border border-slate-200 bg-white/50 p-3 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:shadow-black/50">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          <style dangerouslySetInnerHTML={{__html: `.touch-pan-x::-webkit-scrollbar { display: none; }`}} />

          {members.map((member) => (
            <Profile key={member.id} member={member} />
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {members.map((_, i) => (
          <div 
            key={i} 
            className={`h-1.5 transition-all duration-300 rounded-full ${
              activeIndex === i ? 'w-8 bg-indigo-500' : 'w-2 bg-slate-300 dark:bg-white/20'
            }`} 
          />
        ))}
      </div>
    </div>
  );
}