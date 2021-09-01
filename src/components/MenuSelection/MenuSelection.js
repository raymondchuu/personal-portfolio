import React, { useState } from 'react'

// components
import WorkSelection from './WorkSelection'
import WorkDetails from './WorkDetails'

// styles
import '../../work.css'

const WORKEXPERIENCE = [
    {
        name: 'MedMe Health',
        position: 'Software Engineer Intern',
        details: [
            'Developed net-new features in ReactJS and GraphQL to help over 1000 pharmacists personally customize their patient appointment flows',
            'Implemented new patient-side and pharmacist-side flows for over 800 pharmacies which impacts millions of patients across Canada',
            'Refactored the existing code architecture to improve scalability and maintainability ',
            'Established a multi-tenancy backend server using Apollo NodeJS and PrismaJS as an ORM ',
        ]
    },
]

const MenuSelection = () => {
    const [selectedWork, setSelectedWork] = useState(WORKEXPERIENCE[0])
    return (
        <div className='workContainer'>
            <WorkSelection workplaces={WORKEXPERIENCE} setSelectedWork={setSelectedWork} />
            <WorkDetails selectedWork={selectedWork} />
        </div>
    )
}

export default MenuSelection