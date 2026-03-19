export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeUpSlow = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const baseTransition = {
  duration: 0.4,
  ease: 'easeOut',
}

export const staggerContainer = (stagger = 0.12) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
    },
  },
})

