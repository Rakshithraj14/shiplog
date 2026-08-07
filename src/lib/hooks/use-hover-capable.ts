"use client";

import { useEffect, useState } from "react";

export function useHoverCapable(): boolean {
  const [canHover, setCanHover] = useState(true);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time sync from matchMedia, not derivable during render
    setCanHover(mql.matches);
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mql.addEventListener("change", listener);
    return () => mql.removeEventListener("change", listener);
  }, []);

  return canHover;
}
