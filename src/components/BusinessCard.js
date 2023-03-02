import React from "react"

export default function BusinessCard(props) {
    return (
        <div className="business-card">
            <img 
                src="./display-pic.JPG"
                className="display-pic"
                alt="Coding Karis"/>
            <h3 className="display-info"
                >
                    Karis Janine Reimers
            </h3>
            <p className="display-contact-info">✉️ karisjreimers@outlook.com</p>
            <p className="display-info">Junior Frontend Developer</p>
                <p className="display-info">
                    Hey, I'm Karis! I'm a junior front end developer currently based in London.
                    I used to work within the finance field processing invoices, reconciling bank statements, etc.
                    amongst dealing with many other exciting accounting tasks 🫣.
                    I have used various free websites to learn; HTML5, CSS, JS & React
                    (It's work in progress and am enjoying the journey).
                    In my spare time, I love traveling, new restaurants and weight training!
                </p>
            {/* <button 
                className="display-more-info">
                    More info please...
            </button> */}
        </div>
    )
}