"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1800;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setLoading(false), 350);
      }
    };
    const raf = requestAnimationFrame(tick);

    document.body.style.overflow = "hidden";
    const cleanup = setTimeout(() => {
      document.body.style.overflow = "";
    }, duration + 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative flex flex-col items-center gap-6">
            <div className="flex items-center gap-1 font-mono text-sm tracking-[0.3em] text-muted">
              <span className="text-primary">&lt;</span>
              <motion.span
                className="text-foreground"
                key="brand"
              >
                LOKESH.RAJ
              </motion.span>
              <span className="text-primary">/&gt;</span>
            </div>

            <div className="relative h-[2px] w-56 overflow-hidden bg-white/[0.06]">
              <motion.div
                className="h-full bg-primary/80"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="font-mono text-xs text-muted">
              initializing_system<span className="animate-blink">_</span>{" "}
              <span className="text-secondary">{progress}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
