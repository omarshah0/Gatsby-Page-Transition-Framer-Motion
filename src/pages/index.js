import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import "../components/layout.css"

const IndexPage = ({ location }) => {
  const duration = 0.5
  const variants = {
    initial: {
      opacity: 0,
      x: 100,
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
      x: 100,
    },
  }
  return (
    <>
      <SEO title="Whey Protein" />
      <motion.div
        className="main-div"
        key={location.pathname}
        variants={variants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <p>Select a Protein</p>
        <Link to="/product-1">
          <div className="card">
            <p>Protein</p>
            <img
              src="https://fupping.com/wp-content/uploads/2018/01/61AzZFvGo8L._SL1000_.jpg"
              alt="Whey Protein"
              className="image"
            />
            <div className="info">
              <p>Ghost Whey X Chico Ahey</p>
              <p>$13.99</p>
            </div>
          </div>
        </Link>
        <Link to="/product-2">
          <div className="card">
            <p>Protein</p>
            <img
              src="https://fupping.com/wp-content/uploads/2018/01/61AzZFvGo8L._SL1000_.jpg"
              alt="Whey Protein"
              className="image"
            />
            <div className="info">
              <p>Ghost Whey X Chico Ahey</p>
              <p>$13.99</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </>
  )
}

export default IndexPage
