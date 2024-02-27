import "./pumps.css"
import React from 'react'
import pump from "../assets/3.png"

export default function Pumps() {
  return (
    <div className="pumps">
      <div className="img-title">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </div>
      <img src={pump} alt="" className="pump" />
      <div className="img-title-down">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </div>
      <div className="line"></div>
    </div>
  )
}
