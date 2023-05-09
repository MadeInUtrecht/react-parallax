import React, {useState, useLayoutEffect } from 'react'
import bg from '../assets/removedbgimages/background.png'
import fog1 from '../assets/removedbgimages/fog_1.png'
import fog2 from '../assets/removedbgimages/fog_2.png'
import fog3 from '../assets/removedbgimages/fog_3.png'
import fog4 from '../assets/removedbgimages/fog_4.png'
import fog5 from '../assets/removedbgimages/fog_5.png'
import fog6 from '../assets/removedbgimages/fog_6.png'
import fog7 from '../assets/removedbgimages/fog_7.png'
import mountain1 from '../assets/removedbgimages/mountain_1.png'
import mountain2 from '../assets/removedbgimages/mountain_2.png'
import mountain3 from '../assets/removedbgimages/mountain_3.png'
import mountain4 from '../assets/removedbgimages/mountain_4.png'
import mountain5 from '../assets/removedbgimages/mountain_5.png'
import mountain6 from '../assets/removedbgimages/mountain_6.png'
import mountain7 from '../assets/removedbgimages/mountain_7.png'
import mountain8 from '../assets/removedbgimages/mountain_8.png'
import mountain9 from '../assets/removedbgimages/mountain_9.png'
import mountain10 from '../assets/removedbgimages/mountain_10.png'
import blackshadow from '../assets/removedbgimages/black_shadow.png'
import sunrays from '../assets/removedbgimages/sun_rays.png'

import { AiOutlineSearch } from 'react-icons/ai'
import { FaPaperPlane } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'


const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const [iconClass, setIconClass] = useState("");


    const parallax_el = document.querySelectorAll('.parallax');
    const parallaxbg_el = document.querySelectorAll('.parallaxbg');
    let [xValue, setXValue] = useState(0)
    let [yValue, setYValue] = useState(0)
    
    const handleMenuClick = () => {
      if (!menuOpen) {
        setIconClass("transform rotate-90");
      } else {
        setIconClass("");
      }
      setMenuOpen(!menuOpen);
    };
    
    

    useLayoutEffect(() => {
        window.addEventListener("mousemove", (e) => {
          setXValue(e.clientX - window.innerWidth / 2);
          setYValue(e.clientY - window.innerHeight / 2);
      
          parallax_el.forEach((element) => {
            const speed = element.getAttribute("data-speedx");
            const speedY = element.getAttribute("data-speedy");

            element.style.transform = `translateX(calc(-50% + ${
              -xValue * speed
            }px)) translateY(calc(-50% + ${yValue * speedY}px))`;
          });
      
          parallaxbg_el.forEach((element) => {
            const speed = element.getAttribute("data-speedx");
            const speedY = element.getAttribute("data-speedy");
            element.style.transform = `scale(1.4) translateX(calc(-50% + ${
              -xValue * speed
            }px)) translateY(calc(-50% + ${yValue * speedY}px))`;
          });
        });
      });
   


  return (
    <>
    <header
        className={`h-24 bg-white bg-opacity-40 flex flex-col border-b-white border-b-2 border-opacity-10 absolute z-10 w-screen items-center p-0 m-0 ${
          menuOpen ? "expanded" : ""
        }`}
      >
        <nav className='flex text-2xl w-screen h-full items-center justify-between p-11'>
            <FaPaperPlane color='black'/>
            <ul className='flex s:gap-11 m:gap-11 lg:gap-11 xl:gap-11 gap-3 items-center text-white-300 font-thin text-2xl font-[Poppins]'>
                <li><button>Login</button></li>
                <li><button>Sign Up</button></li>
                <li className='flex items-center justify-center'><button><AiOutlineSearch /></button></li>
                <li className='w-10 h-10 flex items-center justify-center bg-white rounded-full bg-opacity-50'><button onClick={handleMenuClick}><GiHamburgerMenu className={iconClass} /></button></li>
            </ul>
        </nav>
          <div
            className={`w-screen bg-white bg-opacity-40 text-2xl font-[Poppins] text-white-300 flex flex-col items-center space-y-4 p-4 absolute top-full left-0 transition-all duration-300 transform origin-top ${
              menuOpen ? "scale-y-100" : "scale-y-0"
            }`}
          >
            <a href="https://github.com/madeinutrecht" target="_blank" rel='noreferrer' >
              GitHub
            </a>
            <a href="https://vadimboot.com" target="_blank" rel='noreferrer'>
              Portfolio
            </a>
          </div>

    </header>
    <main className='relative h-screen w-screen overflow-hidden m-0 p-0'>
        <div className="vignette"></div>
        <img src={bg} data-distance='-200' data-speedx='0.28' data-speedy='0.33' alt="background" className='bg-img parallaxbg' />
        <img src={fog7} data-distance='850'data-speedx='0.27' data-speedy='0.32' alt="fog" className='fog-7 parallax' />
        <img src={mountain10} data-distance='1000' data-speedx='0.195' data-speedy='0.305' alt="mountain" className='mountain-10 parallax' />
        <img src={fog6} data-distance='1200' data-speedx='0.25' data-speedy='0.28' alt="fog" className='fog-6 parallax' />
        <img src={mountain9} data-distance='1400' data-speedx='0.125' data-speedy='0.155' alt="mountain" className=' mountain-9 parallax' />
        <img src={mountain8} data-distance='1600' data-speedx='0.1' data-speedy='0.11' alt="mountain" className='mountain-8 parallax' />
        <img src={fog5} data-distance='1800' data-speedx='0.16' data-speedy='0.105' alt="fog" className='fog-5 parallax' />
        <img src={mountain7} data-distance='2000' data-speedx='0.1' data-speedy='0.1' alt="mountain" className='mountain-7 parallax' />
        <div data-distance='0' data-speedx='0.07' data-speedy='0.07' className='text font-[Poppins]'>
            <h2 className='texth2'>Take a</h2>
            <h1 className='texth1'>Journey</h1>
        </div>
        <img src={mountain6} data-distance='2200' data-speedx='0.065' data-speedy='0.05' alt="mountain" className='mountain-6 parallax' />
        <img src={fog4} data-distance='2400' data-speedx='0.135' data-speedy='0.048' alt="fog" className='fog-4 parallax' />
        <img src={mountain5} data-distance='2600' data-speedx='0.08' data-speedy='0.04' alt="mountain" className='mountain-5 parallax' />
        <img src={fog3} data-distance='2800' data-speedx='0.11' data-speedy='0.018' alt="fog" className='fog-3 parallax' />
        <img src={mountain4} data-distance='3000' data-speedx='0.059' data-speedy='0.024' alt="mountain" className='mountain-4 parallax' />
        <img src={mountain3} data-distance='3200' data-speedx='0.04' data-speedy='0.018' alt="mountain" className='mountain-3 parallax' />
        <img src={fog2} data-distance='3400' data-speedx='0.15' data-speedy='0.0115' alt="fog" className='fog-2 parallax' />
        <img src={mountain2} data-distance='3600' data-speedx='0.0235' data-speedy='0.013' alt="mountain" className='mountain-2 parallax' />
        <img src={mountain1} data-distance='3800' data-speedx='0.027' data-speedy='0.018' alt="mountain" className='mountain-1 parallax' />
        <img src={sunrays} alt="sunrays" className='sunrays' />
        <img src={blackshadow} alt="blackshadow" className='blackshadow' />
        <img src={fog1} data-distance='4000' data-speedx='0.12' data-speedy='0.01' alt="fog" className='fog-1 parallax' />


    </main>

    </>
  )
}

export default Hero