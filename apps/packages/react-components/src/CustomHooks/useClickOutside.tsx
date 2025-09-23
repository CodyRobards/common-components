import { RefObject, useEffect } from "react";

export const useClickOutside = (ref1: RefObject<HTMLElement | undefined>, callback: () => void, addEventListener = true) => {
  const handleClick = (event: MouseEvent) => {
    if (ref1.current && !ref1.current.contains(event.target as HTMLElement)) {
      callback();
    }
  };

  useEffect(() => {
    if (addEventListener) {
      document.addEventListener("click", handleClick);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
