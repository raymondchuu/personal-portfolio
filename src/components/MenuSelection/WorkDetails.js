import React from 'react'
// {
//     name: 'MedMe Health',
//     position: 'Software Engineer Intern',
//     details: [
//         'Developed net-new features in ReactJS and GraphQL to help over 1000 pharmacists personally customize their patient appointment flows',
//         'Implemented new appointment modules for over 800 pharmacies which impacts millions of patients across Canada',
//         'Refactored the existing code architecture to improve scalability and maintainability of codebase ',
//         'Established a multi-tenancy backend server using Apollo NodeJS and PrismaJS as an ORM ',
//     ]
// }
const WorkDetails = ({ selectedWork }) => {
    return (
        <div>
            <div>{selectedWork.position} <a className='workLink' href='https://www.medmehealth.com/' target='_blank'>@{selectedWork.name}</a></div>
            <ul>
                {selectedWork.details.map(point => (
                    <li>
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WorkDetails