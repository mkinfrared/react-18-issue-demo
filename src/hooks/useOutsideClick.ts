import { RefObject, useEffect } from "react";

type Callback = () => void;

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: Callback) => {
  const handleClick = (event: MouseEvent) => {
    console.log("click handler");
    const { current } = ref;

    if (!current) {
      return;
    }

    const path = event.composedPath();
    const isOutside = !path.includes(current);

    if (isOutside) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    console.log("add event listener");

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useOutsideClick;
