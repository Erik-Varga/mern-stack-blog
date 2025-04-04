import React, { useEffect } from 'react'
import ProgressBar from '../components/ProgressBar'
import { TbBrandMongodb, TbBrandTailwind, TbBrandTwitter } from 'react-icons/tb';
import { SiClerk, SiExpress, SiFacebook, SiGithub, SiLinkedin, SiNodemon, SiPostman } from 'react-icons/si';
import { FaGithub, FaGithubAlt, FaGithubSquare, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaXTwitter } from "react-icons/fa6";
import { LuDrum } from "react-icons/lu";
import { SiAxios } from 'react-icons/si';

const AboutPage = () => {
  const current_hrs = 3;
  const current_mins = 20;

  const total_hrs = 6;
  const total_mins = 13;

  const combined_current_time = current_hrs * 60 + current_mins;
  const combined_total_time = total_hrs * 60 + total_mins;

  const final_pct_var = Math.round((combined_current_time / combined_total_time) * 100).toFixed(0);

  const progressData = [
    { bgcolor: "#1aa7ec", completed: final_pct_var },
  ]

  const techData = [
    { name: "MongoDB", Icon: <TbBrandMongodb />, description: "MongoDB is a cross-platform document-oriented NoSQL database program used to store the data." },
    { name: "Express", Icon: <SiExpress />, description: "Express is a web application framework for Node JS used for building the API." },
    { name: "React JS", Icon: <FaReact />, description: "React is the frontend framework used to build the user interface and web application pages." },
    { name: "Node JS", Icon: <SiNodemon />, description: "Node is the server side runtime environment that provides the connection to the requests and responses." },
    { name: "Javascript", Icon: <IoLogoJavascript />, description: "JavaScript is the web application programming language." },
    { name: "Tailwind CSS", Icon: <TbBrandTailwind />, description: "Tailwind CSS is the tool used to style the web application pages." },
    { name: "Clerk", Icon: <SiClerk />, description: "Clerk is the authorization provider used for session management." },
    { name: "Axios", Icon: <SiAxios />, description: "Axios is a JS library used to make HTTP requests from web browsers and Node JS." },
    { name: "Postman", Icon: <SiPostman />, description: "Postman is a utility used to test the API routes." },
    { name: "Github", Icon: <FaGithub />, description: "Github is used for version control and development storage." },
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='h-full mt-5'>
      <h1 className='text-2xl text-gray-800 mb-5'>Contact Me</h1>

      <div className="flex items-center gap-2 p-2">
        <img src="ev_icon_pic.jpg" alt="" className='h-12 w-12 rounded-full shadow-md' />
        <div className="flex flex-col">
          <div className='font-bold'>Erik Varga</div>
          <div className='font-semibold text-sm text-gray-500'>Developer, Orlando, FL</div>
        </div>
      </div>

      <div className="flex gap-2 text-gray-600 text-2xl mt-2">
        <div className=""><SiGithub /></div>
        <div className=""><SiLinkedin /></div>
        <div className=""><SiFacebook /></div>
        <div className=""><FaXTwitter /></div>
        <div className=""><LuDrum /></div>
      </div>

      <p className='mt-12 text-sm'>Technologies used in this MERN Stack include:</p>

      <div>
        
      </div>




    </div>
  )
}

export default AboutPage