import React from 'react'
import ProgressBar from '../components/ProgressBar'

const AboutPage = () => {
    const current_hrs = 2;
    const current_mins = 27;
    
    const total_hrs = 6;
    const total_mins = 13;

    const combined_current_time = current_hrs * 60 + current_mins;
    const combined_total_time = total_hrs * 60 + total_mins;
  
    const final_pct_var = Math.round((combined_current_time / combined_total_time) * 100).toFixed(0);

    const testData = [
        { bgcolor: "#1aa7ec", completed: final_pct_var},
    ]
    
  return (
    <div className='h-full w-4/5'>
        About
        
        {testData.map((item, idx) => (
            <div>
              {combined_current_time} | {combined_total_time}
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            </div>
        ))}

    </div>
  )
}

export default AboutPage