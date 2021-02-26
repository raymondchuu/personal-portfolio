import React from 'react'
import resumepdf from '../Media/Raymond-Chu-Resume-2.pdf';

const Resume = () => {
    return(
        <div style={{height: '100vh'}}>
            <embed src={resumepdf} width="100%" height="100%"/>
        </div>
    )
}

export default Resume