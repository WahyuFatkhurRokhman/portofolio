import { useEffect, useRef } from 'react';

export default function useProfileSlider(
  members,
  activeIndex,
  setActiveIndex
) {
  const intervalRef = useRef(null);
  const idleTimeoutRef = useRef(null);

  // =========================
  // AUTOPLAY
  // =========================

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const startAutoSlide = () => {
    stopAutoSlide();

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        return prev >= members.length - 1
          ? 0
          : prev + 1;
      });
    }, 7000);
  };

  // =========================
  // USER INTERACTION
  // =========================

  const handleUserInteraction = () => {
    stopAutoSlide();

    if (idleTimeoutRef.current) {
      clearTimeout(idleTimeoutRef.current);
    }

    idleTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 5000);
  };

  // =========================
  // DRAG
  // =========================

  const handleDragEnd = (_, info) => {
    const threshold = 80;

    let newIndex = activeIndex;

    // swipe kiri
    if (info.offset.x < -threshold) {
      newIndex =
        activeIndex >= members.length - 1
          ? 0
          : activeIndex + 1;
    }

    // swipe kanan
    if (info.offset.x > threshold) {
      newIndex =
        activeIndex <= 0
          ? members.length - 1
          : activeIndex - 1;
    }

    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
      handleUserInteraction();
    }
  };

  // =========================
  // PAGE SCROLL
  // =========================

  useEffect(() => {
    let timeout;

    const handlePageScroll = () => {
      clearTimeout(timeout);

      stopAutoSlide();

      timeout = setTimeout(() => {
        startAutoSlide();
      }, 5000);
    };

    window.addEventListener('scroll', handlePageScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        'scroll',
        handlePageScroll
      );

      clearTimeout(timeout);
    };
  }, []);

  // =========================
  // INITIAL AUTOPLAY
  // =========================

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();

      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
    };
  }, []);

  return {
    handleDragEnd,
  };
}