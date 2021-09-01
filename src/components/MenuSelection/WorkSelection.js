import React from 'react'

const WorkSelection = ({ workplaces, setSelectedWork }) => {
    return (
        <div className="workSelectionContainer">
            {workplaces?.map(workplace => (
                <div onClick={() => setSelectedWork(workplace)}>
                    {workplace.name}
                </div>
            ))}
        </div>
    )
}

export default WorkSelection