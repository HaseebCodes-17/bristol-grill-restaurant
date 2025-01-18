import gsap from "gsap";
import { useEffect, useRef } from "react";

const useGsapTimeline = (options = {}) => {
  const timeline = useRef(gsap.timeline(options));

  useEffect(() => {
    return () => {
      timeline.current.kill();
    };
  }, []);

  return timeline.current;
};

export default useGsapTimeline;
