import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import "../components/layout.css"

function Product1({ location }) {
  const duration = 0.5
  const variants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    enter: {
      opacity: 1,
      x: 0,
      transition: {
        duration: duration,
        delay: duration,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: duration },
      x: -100,
    },
  }
  return (
    <motion.div
      className="product"
      key={location.pathname}
      variants={variants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="image">
        <img
          src="https://fupping.com/wp-content/uploads/2018/01/61AzZFvGo8L._SL1000_.jpg"
          alt="Whey Protein"
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h1>Whey Protein 1</h1>
        <Link to="/">Home</Link>
      </div>
    </motion.div>
  )
}

export default Product1
