import React from "react"

export default function Project(props) {
    return (
        <div className="project-card">
            <a href={props.item.href} target='_blank' rel="noreferrer">
            <h3 className="project-card-title">{props.item.title}</h3>
            <img className="project-card-img" src={props.item.img} alt="Look at these projects" />
            <div className="project-info">
                <p>{props.item.framework}</p>
            </div>
            </a>
        </div>
    )
}