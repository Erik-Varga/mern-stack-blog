import React from 'react'
import ProgressBar from '../components/ProgressBar'

const AboutPage = () => {
    const current_hrs = 2;
    const current_mins = 55;
    
    const total_hrs = 6;
    const total_mins = 13;

    const combined_current_time = current_hrs * 60 + current_mins;
    const combined_total_time = total_hrs * 60 + total_mins;
  
    const final_pct_var = Math.round((combined_current_time / combined_total_time) * 100).toFixed(0);

    const testData = [
        { bgcolor: "#1aa7ec", completed: final_pct_var},
    ]

    const imageURL = "https://images.unsplash.com/photo-1461723198950-3f65e13bb031?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  return (
    <div className='h-full w-4/5'>
        About
        
        {testData.map((item, idx) => (
            <div className='mt-5'>
              <span className='text-xs'>
                {combined_current_time} | {combined_total_time}
              </span>

              <img src={imageURL} alt='' className='h-40 w-40 opacity-75 shadow-md rounded-2xl' />

            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            </div>
        ))}

    </div>
  )
}

export default AboutPage