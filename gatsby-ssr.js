import React from "react"
import { AnimatePresence } from "framer-motion"

export const wrapPageElement = ({ element, props }) => {
  return (
    <AnimatePresence exitBeforeEnter {...props}>
      {element}
    </AnimatePresence>
  )
}
