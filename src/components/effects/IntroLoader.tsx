"use client";

import {
  AnimatePresence,
  motion,
} from "motion/react";

import {
  useEffect,
  useState,
} from "react";

export default function IntroLoader() {
  const [visible, setVisible] =
    useState(true);

  useEffect(() => {
    const timer = window.setTimeout(
      () => {
        setVisible(false);
      },
      1450,
    );

    return () =>
      window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-loader"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="intro-loader__content"
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.45,
            }}
          >
            <motion.div
              className="intro-loader__logo"
              initial={{
                scale: 0.85,
              }}
              animate={{
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              &lt;/&gt;
            </motion.div>

            <div className="intro-loader__text">
              <strong>DEVFOLIO</strong>

              <span>
                FULL-STACK CREATIVE DEVELOPMENT
              </span>
            </div>

            <div className="intro-loader__track">
              <motion.div
                initial={{
                  scaleX: 0,
                }}
                animate={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 1.05,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}