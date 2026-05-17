import { AnimatePresence, motion } from 'framer-motion';

import Profile from './Profile';
import useProfileSlider from './useProfileSlider';

export default function ProfileSlider({
  members,
  activeIndex,
  setActiveIndex,
}) {

  const { handleDragEnd } =
    useProfileSlider(
      members,
      activeIndex,
      setActiveIndex
    );

  return (
    <div className="relative mx-auto w-full max-w-[380px] lg:mx-0 lg:ml-auto">

      <div className="rounded-[2.5rem] border border-slate-200 bg-white/50 p-3 shadow-2xl backdrop-blur-md dark:border-white/10 dark:bg-white/10 dark:shadow-black/50">

        <AnimatePresence mode="wait">
          <motion.div
            key={members[activeIndex].id}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.97,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <Profile
              member={members[activeIndex]}
            />
          </motion.div>
        </AnimatePresence>

      </div>

      <div className="mt-6 flex justify-center gap-2">
        {members.map((_, i) => (
          <div
            key={i}
            className={`
              h-1.5 rounded-full
              transition-all duration-500 ease-out
              ${
                activeIndex === i
                  ? 'w-8 bg-indigo-500'
                  : 'w-2 bg-slate-300 dark:bg-white/20'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}