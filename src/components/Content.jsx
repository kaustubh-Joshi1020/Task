import React from 'react'
import award from "../assets/1.png"
import "./content.css"
import awarded from "../assets/2.png"

export default function Content() {
  return (
    <>
   <div className='content'>
      <div className='section'>
        <img src={award} alt="" className='award' />
        <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b>
        <ul className='ulist'>
          <li className='info'>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li className='info'>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
        </ul>
      </div>

      <div className='section'>
        <img src={awarded} alt="" className='awarded' />
        <p>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </div>
    


    </>
  )
}
