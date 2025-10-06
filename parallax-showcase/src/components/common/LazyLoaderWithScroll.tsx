import { useEffect, useRef, useState } from "react";

export default function LazyLoaderWithScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full" ref={ref}>
      {isVisible ? children : <p>Loading...</p>}
    </div>
  );
}
