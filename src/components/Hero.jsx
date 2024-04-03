import React,{useEffect, useState} from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
function Hero() {

    const imgData=[
        {
            url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg"
        },
        {
            url:"https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg"
        },
        {
            url:"https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]
 
    const [slider, setSlider] = useState(0);


    const handlePlus = () => {
        setSlider(slider === imgData.length - 1 ? 0 : slider + 1);
    }
    const handleMinus = () => {
        setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
    }
 
    useEffect(() => {
        setInterval(() => {
            handlePlus();
        }, 3000);
    }, [slider]);

  return (
    <>
      <div>
        <div>
        <img  src={imgData[slider].url} alt=""/>
        </div>
        <div className='flex'>
        <FaAngleLeft size={30} className='cursor-pointer' onClick={handleMinus}/>
        <FaAngleRight size={30} className='cursor-pointer' onClick={handlePlus}/>
        </div>
      </div>
    </>
  )
}

export default Hero
