import React, { useEffect, useState, useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';

/**
 * Editorial Count-Up Component
 * Animates numeric value from 0 to target when scrolled into view.
 * Respects prefers-reduced-motion.
 *
 * @param {string} value - Raw string like "12+", "850+", "120+", "50.000+"
 * @param {number} duration - Animation duration in ms (default: 1600ms)
 */
export const CountUp = ({ value, duration = 1600 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const shouldReduceMotion = useReducedMotion();

  // Extract numeric target and any suffix (e.g. "+", "%")
  const numericString = value.replace(/[^0-9]/g, '');
  const target = parseInt(numericString, 10) || 0;
  const suffix = value.replace(/[0-9.]/g, '');
  const hasDotSeparator = value.includes('.');

  const [displayValue, setDisplayValue] = useState(shouldReduceMotion ? target : 0);

  useEffect(() => {
    if (!isInView) return;
    if (shouldReduceMotion) {
      setDisplayValue(target);
      return;
    }

    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease-out cubic: 1 - pow(1 - progress, 3)
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentNumber = Math.floor(easeProgress * target);

      setDisplayValue(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target, duration, shouldReduceMotion]);

  // Format number (e.g. 50000 -> 50.000 if source had dots)
  const formatNumber = (num) => {
    if (hasDotSeparator && num >= 1000) {
      return num.toLocaleString('id-ID');
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {formatNumber(displayValue)}
      {suffix}
    </span>
  );
};

export default CountUp;

