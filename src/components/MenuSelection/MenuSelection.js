import React, { useState } from 'react'

// components
import WorkSelection from './WorkSelection'
import WorkDetails from './WorkDetails'

const WORKEXPERIENCE = [
    {
        name: 'MedMe Health',
        position: 'Software Engineer Intern',
        details: [
            'Developed net-new features in ReactJS and GraphQL to help over 1000 pharmacists personally customize their patient appointment flows',
            'Implemented new appointment modules for over 800 pharmacies which impacts millions of patients across Canada',
            'Refactored the existing code architecture to improve scalability and maintainability of codebase ',
            'Established a multi-tenancy backend server using Apollo NodeJS and PrismaJS as an ORM ',
        ]
    }
]

const MenuSelection = () => {
    const [selectedWork, setSelectedWork] = useState()
    return (
        <>
            <WorkSelection workplaces={WORKEXPERIENCE} />
            <WorkDetails workplaces={WORKEXPERIENCE} />
        </>
    )
}

export default MenuSelection