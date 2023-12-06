import { Container } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { scrollVariants } from "./Variants";

const View = ({ children, setIsActive, menuId }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    threshold: 0.5,
  });

  const isControlStarted = useRef(false);

  useEffect(() => {
    if (inView && !isControlStarted.current) {
      // control.start("visible");
      isControlStarted.current = true;
    }
  }, [inView, control]);

  useEffect(() => {
    if (inView) {
      setIsActive(ref.current.id);
    }
  }, [inView, menuId, setIsActive]);

  return (
    <Container
      ref={inViewRef}
      sx={{
        width: "100%",
        minHeight: "75vh",
        paddingY: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        scrollSnapAlign: "center",
        perspective: "500px",
      }}
    >
      <motion.div
        id={menuId}
        ref={ref}
        variants={scrollVariants}
        // initial={{ opacity: 0, y: 20 }}
        // animate={control}
        transition={{ duration: 1 }}
        style={{
          width: "80%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",

          overflow: "hidden",
        }}
      >
        {children}
      </motion.div>
    </Container>
  );
};

export default View;
