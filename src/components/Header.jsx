import React,{useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

function Header() {
   const [sidenav, setSidenav] = useState(false)
console.log(sidenav)
 
  return (
    <div className="flex justify-between py-[20px] px-[25px] text-[18px]  font-semibold border-b relative">
      <div>
        <p>Eat<span className='text-[#fbc531]'>Yummy</span></p>
      </div>
      <div>
        <ul className='sm:flex gap-4 hidden cursor-pointer '>
          <li className='hover:text-[#fbc531]'>Home</li>
          <li className='hover:text-[#fbc531]'>About</li>
          <li className='hover:text-[#fbc531]'>Offers</li>
          <li className='hover:text-[#fbc531]'>Sign In</li>
        </ul>
      </div>

        {
            sidenav?<div className='bg-[#dcdde1] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center'>
            <RxCross2 size={30} className="absolute top-3 right-3 cursor-pointer " onClick={()=>setSidenav(!sidenav)}/>
              <ul className='flex gap-12 cursor-pointer flex-col '>
                <li className='hover:text-[#fbc531]'>Home</li>
                <li className='hover:text-[#fbc531]'>About</li>
                <li className='hover:text-[#fbc531]'>Offers</li>
                <li className='hover:text-[#fbc531]'>Sign In</li>
              </ul>
            </div>:""
        }

      <div className='flex gap-5'>
        <p>
            <GiHamburgerMenu 
            size={30}
            className="cursor-pointer block sm:hidden"
             onClick={()=>setSidenav(!sidenav)}
             />
            </p>
        <p><FaShoppingCart size={30}/></p>
      </div>
    </div>
  )
}

export default Header

