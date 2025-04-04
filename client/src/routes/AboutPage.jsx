import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import { TbBrandMongodb, TbBrandTailwind, TbBrandTwitter } from 'react-icons/tb';
import { SiClerk, SiExpress, SiFacebook, SiGithub, SiLinkedin, SiNodemon, SiPostman } from 'react-icons/si';
import { FaChevronDown, FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaChevronRight, FaMessage, FaXTwitter } from "react-icons/fa6";
import { LuDrum } from "react-icons/lu";
import { SiAxios } from 'react-icons/si';
import { Link } from 'react-router-dom';

const AboutPage = () => {

  const [showTable, setShowTable] = useState(true);

  const current_hrs = 3;
  const current_mins = 53;

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

  const handleShowTable = () => {
    setShowTable(!showTable)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setShowTable(true);
  }, [])

  return (
    <div className='h-full mt-5'>
      <h1 className='text-2xl text-gray-800 mb-5'>About</h1>

      <div className="flex items-center gap-2 p-2">
        <img src="ev_icon_pic.jpg" alt="" className='h-12 w-12 rounded-full shadow-md' />
        <div className="flex flex-col">
          <div className='font-bold'>Erik Varga</div>
          <div className='font-semibold text-sm text-gray-500'>Developer, Orlando, FL</div>
        </div>
      </div>
      <div className='mt-5 text-sm text-gray-500 dark:text-gray-200'>Hello, my name is Erik and I create stunning web applications.</div>

      <div className="flex gap-2 text-gray-600 dark:text-gray-400 text-2xl mt-2 cursor-pointer">
        <div className="hover:text-gray-800"><SiGithub /></div>
        <div className="hover:text-gray-800"><SiLinkedin /></div>
        <div className="hover:text-gray-800"><SiFacebook /></div>
        <div className="hover:text-gray-800"><FaXTwitter /></div>
        <div className='ml-2'>
          <Link to="/contact" className="flex items-center gap-1 text-xs uppercase text-gray-400 hover:text-gray-700"><FaMessage className='text-2xl' />Contact Me</Link>
        </div>
      </div>

      <p className='mt-12 text-sm flex items-center'>
        Technologies used in this MERN Stack include: &nbsp;
        <span onClick={handleShowTable} className='cursor-pointer'>{showTable ? <FaChevronDown /> : <FaChevronRight />}</span>
        
        </p>


      {showTable && (<div>
        <div className="hidden sm:block mt-5 rounded-md relative overflow-x-auto sm:rounded-lg">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
          {techData.map((tech, idx) => (
              <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="flex items-center gap-2">
                    <span className="text-2xl">
                      {tech.Icon}
                    </span>
                    {tech.name}
                  </span>
                </td>
                <td className="px-6 py-4 dark:text-gray-30 hover:text-black dark:hover:text-white">
                  {tech.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="block sm:hidden mt-5 rounded-md relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name - Description
              </th>
              <th scope="col" className="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
          {techData.map((tech, idx) => (
              <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="text-2xl">
                      {tech.Icon}
                    </span>
                    <span>
                      {tech.name}
                    </span>
                    <span className='font-light'> - {tech.description}</span>
                  </span>
                </td>
                <td className="px-6 py-4">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>)}

      

      <div className='mt-20'></div>
      {progressData.map((item, idx) => (
        <div className='mt-5'>
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
          <span className='text-xs'>
            {combined_current_time} | {combined_total_time}
          </span>
        </div>
      ))}


    </div>
  )
}

export default AboutPage