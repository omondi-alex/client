export const scrollVariants = {
  hidden: {
    opacity: 0,
    transform: "translateY(50vh)",
  },
  visible: {
    opacity: 1,
    transform: "translateY(0vh)",
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  },
};
