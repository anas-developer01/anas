"use client";

import { motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { events } from "@/lib/wedding";
import Reveal from "./Reveal";

const D = "M44 150C90 150 96 96 150 104S220 150 250 96S280 44 300 42";

export default function Journey() {
  const box = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const car = useRef<SVGGElement>(null);
  const { scrollYProgress } = useScroll({ target: box, offset: ["start 80%", "end 55%"] });
  const p = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });

  const place = (v: number) => {
    const el = path.current, c = car.current;
    if (!el || !c) return;
    const len = el.getTotalLength();
    const a = el.getPointAtLength(v * len);
    const b = el.getPointAtLength(Math.min(len, v * len + 1));
    const ang = Math.max(-35, Math.min(35, (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI));
    c.setAttribute("transform", `translate(${a.x} ${a.y}) rotate(${ang})`);
    el.style.strokeDasharray = `${len}`;
    el.style.strokeDashoffset = `${len * (1 - v)}`;
  };
  useEffect(() => place(0), []);
  useMotionValueEvent(p, "change", place);

  const barat = events.find((e) => e.key === "barat")!;

  return (
    <section className="journey">
      <div className="wrap">
        <Reveal as="p" className="eyebrow">14 November · 5:00 PM</Reveal>
        <Reveal as="h2" className="title" delay={0.1}>The Barat <em className="foil">Journey</em></Reveal>
        <div className="route" ref={box}>
          <svg viewBox="0 0 340 190" role="img" aria-label="Barat route from Hasilpur to Multan">
            <path d={D} fill="none" stroke="#b8933f" strokeOpacity=".3" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
            <path ref={path} d={D} fill="none" stroke="#b8933f" strokeWidth="3" strokeLinecap="round" />
            <g transform="translate(44 150)">
              <circle r="11" fill="#fbf8f1" stroke="#1f7a57" strokeWidth="2" /><circle r="4.5" fill="#1f7a57" />
              <text y="32" textAnchor="middle" fontSize="17" fontWeight="600" fill="#14553c" style={{ fontFamily: "var(--serif)" }}>Hasilpur</text>
            </g>
            <motion.g
              initial={{ scale: 0, y: -20 }} whileInView={{ scale: 1, y: 0 }} viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.4 }}
            >
              <g transform="translate(300 42)">
                <path d="M0 0c-9-10-14-17-14-24a14 14 0 0 1 28 0c0 7-5 14-14 24z" fill="#8e2436" /><circle cy="-24" r="5" fill="#fbf8f1" />
                <text y="22" textAnchor="middle" fontSize="17" fontWeight="600" fill="#14553c" style={{ fontFamily: "var(--serif)" }}>Multan</text>
              </g>
            </motion.g>
            <g ref={car}>
              <g transform="translate(-20 -26)">
                <path d="M4 18l6-10h18l7 10h3a2 2 0 0 1 2 2v5H0v-5a2 2 0 0 1 2-2z" fill="#8e2436" />
                <path d="M12 10h7v8h-11zM22 10h5l5 8h-10z" fill="#fbf8f1" opacity=".85" />
                <circle cx="9" cy="25" r="4" fill="#23312a" /><circle cx="31" cy="25" r="4" fill="#23312a" />
                <circle cx="9" cy="25" r="1.5" fill="#dcc48f" /><circle cx="31" cy="25" r="1.5" fill="#dcc48f" />
                <path d="M6 18q6 5 12 0t12 0t8 0" fill="none" stroke="#e8a33d" strokeWidth="1.6" />
                <circle cx="20" cy="6" r="3" fill="#e9b8b0" />
              </g>
            </g>
          </svg>
          <Reveal as="p" className="caption">From Hasilpur to Multan — to bring Iram home</Reveal>
          <Reveal delay={0.15}>
            <a className="btn solid" style={{ marginTop: 22 }} href={barat.map} target="_blank" rel="noopener noreferrer">View Barat Location</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
