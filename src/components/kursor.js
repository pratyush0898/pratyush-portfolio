"use client";
import { useEffect } from "react";

function KursorInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let intervalId;
    let attempts = 0;
    const maxAttempts = 20; // ~2 seconds
    function tryInitKursor() {
      if (window.kursor) {
        new window.kursor({ type: 1 });
        clearInterval(intervalId);
      } else if (++attempts > maxAttempts) {
        clearInterval(intervalId);
      }
    }
    intervalId = setInterval(tryInitKursor, 100);
    return () => clearInterval(intervalId);
  }, []);
  return null;
}

export default KursorInit;