import React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

function Rotate() {
  const x = useMotionValue(0)
  const spring = useSpring(x, { damping: 100 })

  window.addEventListener("scroll", () => {
    x.set(window.scrollY)
    window.removeEventListener("scroll", () => {})
  })

  return (
    <div>
      <motion.div
        className="box rotate"
        style={{ rotate: spring }}
      ></motion.div>
    </div>
  )
}

export default Rotate
