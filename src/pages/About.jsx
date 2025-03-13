import axios from 'axios';
import React from 'react'

const About = () => {



  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className='text-4xl font-bold leading-0 tracking-tight sm:text-6xl'>
          we love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">

            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">

              comfy
            </div>
          </div>



        </div>
        <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fuga labore doloribus, non, veritatis provident facilis pariatur necessitatibus, voluptates quas mollitia dolorum animi nisi quaerat voluptatibus recusandae laudantium optio id.

        </p>
      </div>
    </>
  )
}

export default About