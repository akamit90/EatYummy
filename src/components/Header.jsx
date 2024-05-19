import React,{useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

function Header( {count}) {
   const [sidenav, setSidenav] = useState(false)
    

 
  return (
    <div className='fixed w-full z-50 top-0 left-0 bg-white'>
    <div className="flex justify-between pt-[20px] px-[25px] text-[18px] font-semibold border-b relative">
      <div>
        <Link to="/">
        <p className='cursor-pointer'>Eat<span className='text-[#fbc531]'>Yummy</span></p>
        </Link>
      </div>
      <div>
        <ul className='sm:flex gap-4 hidden cursor-pointer '>
          <Link to="/"><li className='hover:text-[#fbc531]'>Home</li></Link>
          <Link to="/aboutus"><li className='hover:text-[#fbc531]'>About Us</li></Link>
          <Link to="/ourfood"><li className='hover:text-[#fbc531]'>Our Food</li></Link>
          <Link to="/signin"><li className='hover:text-[#fbc531]'>Sign In</li></Link>
        </ul>
      </div>

        {
            sidenav?<div className='bg-[#dcdde1] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-10'>
            <RxCross2 size={30} className="absolute top-3 right-3 cursor-pointer " onClick={()=>setSidenav(!sidenav)}/>
              <ul className='flex gap-12 cursor-pointer flex-col '>
              <Link to="/"><li className='hover:text-[#fbc531]' onClick={()=>setSidenav(!sidenav)}>Home</li></Link>
              <Link to="/aboutus"><li className='hover:text-[#fbc531]'onClick={()=>setSidenav(!sidenav)}>About Us</li></Link>
              <Link to="/ourfood"><li className='hover:text-[#fbc531]'onClick={()=>setSidenav(!sidenav)}>Our Food</li></Link>
              <Link to="/signin"><li className='hover:text-[#fbc531]'onClick={()=>setSidenav(!sidenav)}>Sign In</li></Link>
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
        <p> {count}<FaShoppingCart size={30}/></p>
             
      </div>
    </div>
    </div>
  )
}

export default Header

