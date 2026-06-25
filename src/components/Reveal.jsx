import { motion } from 'framer-motion'

/* Scroll paytida paydo bo'luvchi animatsiya o'rovchisi.
   prefers-reduced-motion framer-motion tomonidan hurmat qilinadi
   (MotionConfig orqali App.jsx da sozlangan). */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', ...rest }) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
