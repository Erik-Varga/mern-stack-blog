import React from 'react'
import ProgressBar from '../components/ProgressBar'
import { TbBrandMongodb, TbBrandTailwind } from 'react-icons/tb';
import { SiClerk, SiExpress, SiNodemon, SiPostman } from 'react-icons/si';
import { FaGithub, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';

const AboutPage = () => {
  const current_hrs = 3;
  const current_mins = 14;

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
    { name: "Express", Icon: <SiExpress />, description: "Express is web application framework for NodeJS used for building the API." },
    { name: "React JS", Icon: <FaReact />, description: "React is the frontend framework used to build the user interface and web application pages." },
    { name: "Node JS", Icon: <SiNodemon />, description: "Node is the server side runtime environment that provides the connection to the requests and responses." },
    { name: "Javascript", Icon: <IoLogoJavascript />, description: "JavaScript is the web application programming language." },
    { name: "Tailwind CSS", Icon: <TbBrandTailwind />, description: "Tailwind CSS is the tool used to style the web application pages." },
    { name: "Clerk", Icon: <SiClerk />, description: "Clerk is the authorization provider used for session management." },
    { name: "Postman", Icon: <SiPostman />, description: "Postman is a utility used to test the API routes." },
    { name: "Github", Icon: <FaGithub />, description: "Github is used for version control and development storage." },
  ]

  return (
    <div className='h-full m-4'>
      <h1 className='font-bold mb-5'>About</h1>

      <div className="flex items-center gap-2">
        <img src="ev_icon_pic.jpg" alt="" className='h-15 w-15 rounded-full shadow-md' />
        Erik Varga | Developer
      </div>


      <p className='mt-4 italic'>Technologies used in this MERN Stack project include:</p>

      <div class="hidden sm:block mt-5 rounded-md relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
          {techData.map((tech, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {tech.Icon}
                    </span>
                    {tech.name}
                  </div>
                </th>
                <td className="px-6 py-4">
                  {tech.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div class="block sm:hidden mt-5 rounded-md relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name - Description
              </th>
            </tr>
          </thead>
          <tbody>
          {techData.map((tech, index) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-2xl">
                      {tech.Icon}
                    </span>
                    <span>
                      {tech.name}
                    </span>
                    <span className='font-light'> - {tech.description}</span>
                  </div>
                </th>
                <td className="px-6 py-4">
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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