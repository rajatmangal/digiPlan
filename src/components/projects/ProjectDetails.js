import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                <div className="card-title">Project title - {id}</div>
                    <p>
                        Duis pariatur enim sit officia est cupidatat cillum Lorem ea. 
                        Culpa labore cillum ex cillum et aute. Quis sunt in commodo incididunt eu.
                    </p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted By Rajat Mangal</div>
                    <div>Date and Time</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails