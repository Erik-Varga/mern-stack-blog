import React from 'react'
import ProgressBar from '../components/ProgressBar'

const AboutPage = () => {

    const testData = [
        { bgcolor: "#6a1b9a", completed: 20 },
    ]
  return (
    <div className='h-full'>
        About
        
        {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}

    </div>
  )
}

export default AboutPage