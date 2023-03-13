import {BsFillMoonStarsFill, BsFillSunFill, BsPersonWorkspace, BsFillClipboard2CheckFill} from 'react-icons/bs'
import {FaBars, FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {BiDetail} from 'react-icons/bi'
import {Link} from 'react-scroll'

type setPropsType = {
  darkMode: Boolean,
  setDarkMode: React.Dispatch<React.SetStateAction<Boolean>>
}

const Navbar = ({darkMode, setDarkMode}: setPropsType) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)

  return (
    <nav className='fixed z-10 w-screen p-6 lg:p-10 flex justify-between bg-white dark:bg-gray-900 lg:bg-transparent dark:bg-transparent'>
      <h1 className={`text-xl font-burtons dark:text-gray-300`}>{'{Developed by Akshat}'}</h1>
      <ul className='hidden md:flex md:items-center'>
        {darkMode ? 
        <li className='hover:scale-125 transition-all'><BsFillSunFill className='cursor-pointer text-2xl text-cyan-50' onClick={()=>setDarkMode(!darkMode)} /></li>
        :
        <li className='hover:scale-125 transition-all'><BsFillMoonStarsFill className='cursor-pointer text-2xl' onClick={()=>setDarkMode(!darkMode)} /></li>
      }
        <li className='hover:scale-110 transition-all'>
          <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href={"/Resume_2.pdf"} target="_blank" rel="noreferrer">Resume</a>
        </li>
      </ul>
      {/* bg-[#0a192f] */}
      <div className={!nav ? 'hidden' : 'md:hidden absolute z-10 left-3 w-11/12 h-[90vh] bg-gradient-to-r from-cyan-600 to-pink-600 rounded-lg flex flex-col justify-center items-center text-white'}>
        <div className='absolute top-7 right-7 text-2xl' onClick={handleNav}>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <ul className='w-[80vw]'>
          <li className="p-3 border-b flex items-center"> <AiFillHome className="mr-4"/> 
           <Link to='home' smooth={true} onClick={handleNav} duration={1000}>
            Home 
           </Link>
          </li>
          <li className="p-3 border-b flex items-center"> <BiDetail className="mr-4"/> 
            <Link to='about' smooth={true} onClick={handleNav} duration={1000}>
            About
            </Link>
          </li>
          <li className="p-3 border-b flex items-center"> <BsFillClipboard2CheckFill className="mr-4"/> 
            <Link to='skills' smooth={true} onClick={handleNav} duration={1000}>
              Skills 
            </Link>
          </li>
          <li className="p-3 border-b flex items-center"> <BsPersonWorkspace className="mr-4"/> 
            <Link to='projects' smooth={true} onClick={handleNav} duration={1000}>
              Projects 
            </Link>
          </li>
          <li className="p-3 border-b flex items-center"> <IoMdContact className="mr-4"/> 
            <Link to='contact' smooth={true} onClick={handleNav} duration={1000}>
              Contact 
            </Link> 
          </li>
        </ul>
      </div>

      <div className={`md:hidden cursor-pointer text-2xl ${darkMode ? 'text-cyan-50' : ''}`} onClick={handleNav}>
          {!nav ? <FaBars /> : <FaTimes />}
      </div>

    </nav>

  );
};

export default Navbar