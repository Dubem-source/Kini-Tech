"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 80);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <button
      type="button"
      className={`fixed bottom-6 right-4 z-9999 cursor-pointer rounded-full border-2 border-orange-300/60 bg-white/90 p-1 shadow-lg transition hover:scale-105 md:right-6 ${
        isVisible ? "" : "hidden"
      }`}
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {!imageFailed ? (
        <img
          src="https://festusthedesigner.com.ng/wp-content/plugins/wpfront-scroll-top/includes/assets/icons/40.png"
          alt="Scroll to top"
          title="Scroll to top"
          className="h-13 w-13"
          onError={() => setImageFailed(true)}
        />
      ) : null}

      {imageFailed ? (
        <span
          className="flex h-10 w-10 items-center justify-center text-3xl font-bold text-orange-700"
          aria-hidden="true"
        >
          ↑
        </span>
      ) : null}
    </button>,
    document.body,
  );
}
