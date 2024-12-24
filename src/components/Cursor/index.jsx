import { useState, useEffect, useRef, useContext } from "react";
import { debounce } from "lodash";
import { motion } from "framer-motion";
import { CursorVariantContext } from "@/context/CursorVariantProvider";

function Cursor() {
  const { cursorVariant } = useContext(CursorVariantContext);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [isMobile, setIsMobile] = useState(false); // state to track if it's mobile
  const cursorRef = useRef(null);

  const debouncedMouseMove = debounce((e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }, 4);

  function mouseMove(e) {
    debouncedMouseMove(e);
  }

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Change 768px to your desired mobile breakpoint
    };
    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current && !isMobile) {
      cursorRef.current.animate(
        {
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        },
        { duration: 400, fill: "forwards" },
      );
    }
    if (!isMobile) {
      window.addEventListener("mousemove", mouseMove);
    }

    return () => {
      if (!isMobile) {
        window.removeEventListener("mousemove", mouseMove);
      }
    };
  }, [mousePosition, isMobile]);

  const variants = {
    default: {
      mixBlendMode: "normal",
      backgroundColor: "#ffffff",
    },
    text: {
      height: 150,
      width: 150,
      backgroundColor: "#E76941",
      mixBlendMode: "difference",
    },
    none: {
      height: 0,
      width: 0,
    },
  };

  // If on mobile, render nothing (invisible cursor)
  if (isMobile) {
    return null;
  }

  return (
    <motion.div
      ref={cursorRef}
      className="h-6 w-6 rounded-full border-2 border-background-dark fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
    />
  );
}

export default Cursor;
