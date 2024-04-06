import React from 'react';

function Footer() {
  return (
    <div className='w-full bg-black text-white'>

      <div className='grid grid-cols-2 md:grid-cols-4 py-10 pl-6'>
        <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[30px]'>Eat<span className='text-[#fbc531]'>Yummy</span></h2>
            <p className='text-[15px] md:text-20px] text-[gray]'>Copyright 2022</p>
        </div>

        <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Company</h2>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>About</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Career</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Team</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Swiggy me</p>
        </div>

        <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>Help & Support</h2>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Company</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Partner with us </p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Ride with us</p>
        </div>

        <div>
            <h2 className='font-bold mb-3 text-[20px] md:text-[25px]'>We deliver to :</h2>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Bangalore</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Gurugao</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Delhi</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Mumbai</p>
            <p className='text-[15px] md:text-[20px] mb-2 text-[gray]'>Pune</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
