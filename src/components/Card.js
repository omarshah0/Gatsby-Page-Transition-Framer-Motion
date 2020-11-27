import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

function Card() {
  const controls = useAnimation()
  const { ref, inView } = useInView({
    rootMargin: "30px",
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      drag="x"
      className="box"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, x: 0, transition: { duration: 2 } },
        hidden: { opacity: 0, x: 300 },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
      }}
    ></motion.div>
  )
}

export default Card
