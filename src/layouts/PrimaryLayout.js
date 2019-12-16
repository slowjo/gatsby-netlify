import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const PrimaryLayout = props => (
  <div style={{ background: "#f4f4f4" }}>
    <Navbar />
    <div className="large-container">
      {props.children}
      <Footer />
    </div>
  </div>
)

export default PrimaryLayout
