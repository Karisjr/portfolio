import React from "react"

export default function Project(props) {
    return (
        <div className="project-card">
            <h3>{props.item.title}</h3>
            <img src={props.item.img} alt="Look at these projects"/>
            <div className="project-info">
                <p>{props.item.framework}</p>
            </div>
        </div>
    )
}