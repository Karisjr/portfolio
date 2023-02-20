import React from "react"

export default function BusinessCard(props) {
    return (
        <div className="business-card">
            <img 
                src="./display-pic.JPG"
                className="display-pic"/>
            <h3 className="display-info"
                >
                    Karis Janine Reimers
            </h3>
            <p className="display-info">Junior Frontend Developer</p>
            <button 
                className="display-message-me">
                    Contact me
            </button>
                <p className="display-info">Hey, I'm Karis, I'm a junior front end developer currently based in London. 
                    I used to work within the finance field processing invoices, reconciling bank statements,
                    and dealing with many exciting accounting tasks 🫣.
                    I have used various free websites to learn; HTML5, CSS, JS & React 
                    (It's work in progress and am enjoying the journey).
                    In my spare time I love travelling, trying new restraunts and weight training!</p>
        </div>
    )
}