export const projectVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -40, y: 50 },
  visible: {
    opacity: 1, 
    scale: 1, 
    rotate: 0, 
    y: 0, 
    transition: { duration: 0.6, ease: 'easeOut' },
    type: 'spring',
    bounce: 0.4
  },
};