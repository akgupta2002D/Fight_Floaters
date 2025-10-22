// useTimeout.js
import { useEffect, useRef } from "react";

/**
 * Run `callback` once after `delay` ms.
 * Pass `null`/`undefined` to `delay` to disable.
 */
export default function useTimeout(callback, delay) {
  const saved = useRef(callback);

  // Keep ref up to date so the latest callback runs
  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return; // disabled
    const id = setTimeout(() => saved.current(), delay);
    return () => clearTimeout(id); // cleanup on unmount/changes
  }, [delay]);
}
