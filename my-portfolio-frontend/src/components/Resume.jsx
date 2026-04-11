import React from 'react'
import resume from '../assets/resume/DivyanshuResume_Developer.pdf'
const Resume = () => {
  return (
    <div>
      <iframe src={resume} title='resume' className='w-full h-[100vh] border rounded-lg shadow-md'></iframe>
      </div>
  )
}

export default Resume
