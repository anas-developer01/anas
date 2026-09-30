"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.body.classList.add("loading");
    window.__lenis?.stop();
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.classList.remove("loading");
        window.__lenis?.start();
      }}
    >
      {show && (
        <motion.div
          className="preloader"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <svg viewBox="0 0 150 150" aria-hidden="true">
            <motion.circle
              cx="75" cy="75" r="68" fill="none" stroke="#b8933f" strokeWidth="1.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <motion.circle
              cx="75" cy="75" r="60" fill="none" stroke="#dcc48f" strokeWidth=".6" strokeDasharray="2 5"
              initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.8, delay: .3 }}
              style={{ transformOrigin: "75px 75px" }}
            />
            <motion.text
              x="75" y="88" textAnchor="middle" fontSize="40" fontWeight="600" fill="#f3e2b3"
              style={{ fontFamily: "var(--serif)", letterSpacing: 2 }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: .7 }}
            >
              A<tspan fill="#b8933f" fontStyle="italic">&amp;</tspan>I
            </motion.text>
          </svg>
          <motion.p initial={{ opacity: 0, letterSpacing: "14px" }} animate={{ opacity: 1, letterSpacing: "6px" }} transition={{ duration: 1.4, delay: .9 }}>
            Bismillah
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
