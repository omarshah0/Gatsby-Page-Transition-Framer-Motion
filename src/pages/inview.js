import React from "react"
import Card from "../components/Card"
import Rotate from "../components/Rotate"
import "../components/layout.css"

function InView() {
  return (
    <div className="inview">
      <div className="in-sec sec1 flex">
        <p>Scroll Down</p>
      </div>
      <div className="in-sec sec2 flex">
        <Card />
      </div>
      <div className="in-sec sec3 flex">
        <Rotate />
      </div>
      <div className="in-sec sec4 flex">
        <Card />
      </div>
    </div>
  )
}

export default InView
