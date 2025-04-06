import { useState, useEffect } from 'react'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { SiIndeed } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'
import { FaQuestion, FaSpinner } from 'react-icons/fa'
import { FaFaceSmile } from 'react-icons/fa6'
import ProgressBar from '../components/ProgressBar'
import { TbBrandMongodb, TbBrandTailwind, TbBrandTwitter } from 'react-icons/tb';
import { SiClerk, SiExpress, SiFacebook, SiGithub, SiLinkedin, SiNodemon, SiPostman } from 'react-icons/si';
import { FaGithub, FaGithubAlt, FaGithubSquare, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaXTwitter } from "react-icons/fa6";
import { LuDrum } from "react-icons/lu";
import { SiAxios } from 'react-icons/si';

function formatPhone(input) {
  //  if the input is null, return a null value
  if (!input) return input;
  // remove all characters from the input except number input.
  const numberInput = input.replace(/[^\d]/g, "");
  //  take the length of the value of the input
  const numberInputLength = numberInput.length;
  // if the number length is 1, 2, or 3, then return it as it is.
  if (numberInputLength < 4) {
    return numberInput;
  } else if (numberInputLength < 7) {
    // if the number input length is 4, 5, or 6, format it accordingly.
    return `(${numberInput.slice(0, 3)}) ${numberInput.slice(3)}`;
  } else {
    //  if the number input length is 7, 8, 9, 10, or more, format it like the below.
    return `(${numberInput.slice(0, 3)}) ${numberInput.slice(
      3,
      6
    )}-${numberInput.slice(6, 10)}`;
  }
  // return empty string in case any condition doesn't satisfy.
  return "";
}

const ContactPage = () => {
  const [isModal, setIsModal] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  }

  const handleClick = () => {
    setIsSending(true);
  }

  const handleSubmit = (e) => {
    setInterval(() => {
      e.preventDefault();

    }, 1000)
  }

  // Binded phoneNumber with an input value and setPhoneNUmber is used to make changes to the value of phoneNumber
  const [phone, setPhone] = useState("");

  //  whenever input will change, handlePhone() function will invoke.
  const handlePhone = (e) => {
    // format phone number
    const formattedPhone = formatPhone(e.target.value);
    //  set the formatted phone number to the input value
    setPhone(formattedPhone);
  };

  const size = 30;
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='h-full mt-5 xl:container mx-auto mb-32'>
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
      </div>

      <p className='my-12 text-sm'>Please complete the form:</p>

      <div className='flex flex-col justify-between bg-gray-100 dark:bg-gray-800 transition-all duration-500 ease-in-out'>
        {/* container */}
        <div className="w-full">
                  {/* form */}
                  <div className='relative'>

                    {/* circles */}
                    <div className="absolute z-0 w-30 h-30 bg-teal-400 rounded-full -right-20 -top-10"></div>
                    <div className="absolute z-0 w-30 h-30 bg-teal-400 rounded-full -left-20 -bottom-20"></div>

                    <div className='relative z-10 bg-white dark:bg-gray-700 dark:text-gray-200 rounded-xl shadow-lg p-2 md:p-8 text-gray-600'>
                      <form action="https://formsubmit.co/d2f16ff55e67af109737b260bde0496c" method='POST' onSubmit={handleSubmit} className='flex flex-col space-y-4'>

                        {/* Honeypot field */}
                        <div className="hidden">
                          <label htmlFor="_honeypot">Don't fill this out if you're human:</label>
                          <input type="text" id="_honeypot" name="_honeypot" />
                        </div>

                        {/* disable captcha */}
                        <input type="hidden" name="_captcha" value={false} />

                        {/* subject line */}
                        <input type="hidden" name="_subject" value="New Moderator Form Submission!"></input>

                        {/* name */}
                        <div>
                          <label htmlFor="name" className='text-sm'>Full Name *</label>
                          <input type="text" name="name" id="name" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 dark:placeholder:text-gray-200' required />
                        </div>

                        {/* email */}
                        <div>
                          <label htmlFor="email" className='text-sm'>Email *</label>
                          <input type="text" name="email" id="email" placeholder='username@domain.com' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 dark:placeholder:text-gray-200' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        </div>

                        {/* phone */}
                        <div>
                          <label htmlFor="phone" className='text-sm'>Phone *</label>
                          <input type="text" onChange={(e) => handlePhone(e)} name="phone" id="phone" value={phone} placeholder='(XXX) XXX-XXXX' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 dark:placeholder:text-gray-200' required pattern='^\(?([0-9]{0,3})\)?[-. ]?([0-9]{0,3})[-. ]?([0-9]{0,4})$' />
                        </div>

                        {/* message */}
                        <div>
                          <label htmlFor="message" className='text-sm'>Message *</label>
                          <textarea rows={4} name="message" id="message" placeholder='Your Message' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300 dark:placeholder:text-gray-200' />
                        </div>

                        <div className='text-sm'>
                          By submitting this form you consent Erik Varga to contact you via phone or email.
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-sm'>{isSending ? <span className='animate-ping'>Please wait</span> : <></>}</span>
                          <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm" type='submit'
                            onClick={handleClick}
                          >
                            {isSending
                              ?
                              (
                                <div className='flex items-center justify-center gap-2'>
                                  <div className='animate-spin'><FaSpinner /></div>
                                  <div>Sending...</div>
                                </div>
                              )
                              :
                              (<div>Send Form</div>)}
                          </button>
                        </div>
                          <span className='text-sm'>* Required Field</span>
                      </form>
                    </div>
                  </div>
                </div>

        <span className='text-xs p-2'>v1.0</span>
      </div>




    </div>
  )
}

export default ContactPage