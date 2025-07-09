import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className="relative w-full h-full overflow-x-hidden">
      <AnimatePresence>
        {/* Left shutter */}
        <motion.div
          key="left-shutter"
          className="fixed top-0 left-0 h-full w-1/2 bg-background z-50"
          initial={{ scaleX: 1, originX: 0 }}
          animate={{
            scaleX: 0,
            originX: 0,
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
          }}
          exit={{
            scaleX: 1,
            originX: 0,
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
          }}
          style={{ willChange: "transform" }}
        />
        {/* Right shutter */}
        <motion.div
          key="right-shutter"
          className="fixed top-0 right-0 h-full w-1/2 bg-background z-50"
          initial={{ scaleX: 1, originX: 1 }}
          animate={{
            scaleX: 0,
            originX: 1,
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
          }}
          exit={{
            scaleX: 1,
            originX: 1,
            transition: {
              duration: 0.5,
              ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
            },
          }}
          style={{ willChange: "transform" }}
        />
      </AnimatePresence>
      <div className="relative z-0">{children}</div>
    </div>
  );
}
