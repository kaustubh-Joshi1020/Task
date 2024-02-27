import "./footer.css"

import React from 'react'
import facebook from "../assets/facebook.png"
import phone from "../assets/phone.png"
import web from "../assets/web.png"

export default function Footer() {
    const categories = [
        "Chemicals & Process",
        "Power",
        "Water & Waste Water",
        "Oils & Gas",
        "Pharma",
        "Sugars & Distilleries",
        "Paper & Pulp",
        "Marine & Defence",
    ];
    const categories1 = [
        "Metal & Mining",
        "Food & Beverage",
        "Petrochemical & Refineries",
        "Solar",
        "Building HVAC",
        "Fire Fighting",
        "Agriculture & Residential"
    ];
    return (
        <div className="footer">
            <div className="heading">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</div>

            <div className="categories">
                {categories.map((category) => (
                    <span key={category}>{category.toUpperCase()}</span>
                ))}
                <div>
                {categories1.map((category1) => (
                    <span key={category1}>{category1.toUpperCase()}</span>
                ))}
                </div>
            </div>

            <div className="foot">
                <div className="item">
                    <img src={phone} alt="" />
                    <a href="tel:18002001234">Toll Free <b>1800 200 1234</b></a>
                </div>
                <div className="item">
                    <img src={facebook} alt="" />
                    <a href="https://www.facebook.com/cripumps">www.facebook.com.cripumps</a>
                </div>
                <div className="item">
                    <img src={web} alt="" />
                    <a href="https://www.crigroups.com">www.crigroups.com</a>
                </div>
            </div>
        </div>
    )
}
