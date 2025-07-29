import { useEffect } from "react";

const useRevealOnScroll = (selectors: string[], showClass = "show") => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          target.classList.add(showClass);
        } else {
          target.classList.remove(showClass);
        }
      });
    });

    const elements = document.querySelectorAll(selectors.join(", "));
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selectors, showClass]);
};

export default useRevealOnScroll;
