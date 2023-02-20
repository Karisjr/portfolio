import Project from "./Project"
import data from "./data"

function JavaScriptProjects() {
    const projects = data.map(item => {
        return (
            <Project 
                key={item.id}
                item={item}
            />
        )
    })  

    return (
        <div className="projects">
            {projects}
        </div>
    )
}

export default JavaScriptProjects