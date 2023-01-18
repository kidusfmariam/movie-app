import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen h-auto flex flex-col sm:flex-row gap-3 justify-between py-5 px-3 items-center bg-green text-white'>
        <h2 className='text-2xl font-light'>Movie Land</h2>

        <div className='sm:w-[60%]'>
            <p className='font-light text-[0.7rem] opacity-80 sm:text-left text-center'>Movies are for leisure, so look for the best watching experience! Why hurting your eyes and challenging your patience when you can watch up to thousands of movies and TV series in HD for free at Freemoviesfull.com. No matter what you are looking for, you can find it on Freemoviesfull.com. In the rare case that you cannot, simply click the "Make a Request" button and the movie will be available after a couple of days.</p>
            <div className='text-[0.7rem] flex gap-4 mt-3 sm:justify-start justify-center items-center'>
                <p>Terms of Service</p>
                <p>Accesibility</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    
    </div>
  )
}

export default Footer