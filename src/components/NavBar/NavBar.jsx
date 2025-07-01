import React, { useState } from 'react'
import TopBar from '../TopBar/TopBar'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png' 
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../../redux/slices/authSlice';

export default function NavBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const dispatch = useDispatch();
  let {token} = useSelector((store)=>store.authReducer);
  const toggleState = (state, seter) => seter(!state);
  const navLinks = [
    { t: 'home' , l:'/'},
    { t: 'shop', l:'/products'},
    { t: 'fashion', l:'/wait'},
    { t: 'electronics', l:'/wait'},
    { t: 'blog', l:'/blog'},
    { t: 'contact', l:'/contact'},
  ];
  const logout = () => {
    dispatch(setToken(null));
    setShowUser(false);
  }
  return <>
    <TopBar/>
    <nav className='container pb-4'>
        <div className='flex justify-between items-center'>
          <div className='lg:w-[20%] w-[40%]'>
          <Link to='/'><img src={Logo} alt="basket logo" /></Link>
          </div>
          <div className='w-[52%] hidden lg:block'>
            <form className="max-w-md mx-auto">
              <div className="relative">
              <input type="text" className="block w-full px-4 py-4 outline-0 text-sm text-gray-900 border rounded-sm bg-[#F3F4F7] placeholder:text-sm" placeholder="Search for Products, fruit, meat, eggs .etc..." required />
              <button type="submit" className="absolute end-0 bottom-0 top-0 focus:ring-4 focus:outline-none text-[#3E445A] font-medium rounded-lg text-lg px-4">
                <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
          <div className='flex justify-center items-center gap-x-2 sm:gap-x-6'>
            <button onClick={() => toggleState(openSearch, setOpenSearch) } className='cursor-pointer text-[#3E445A] text-xl lg:hidden'><i className="fa-solid fa-magnifying-glass"></i></button>
            <div className='text-[#3E445A] relative'>
              <div onClick={() => toggleState(showUser,setShowUser)} className='size-8 sm:size-[42px] border border-[#E2E4EC] flex justify-center items-center rounded-full cursor-pointer'>
                  {token?
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" viewBox="0 0 144.773 144.773" xmlSpace="preserve" width="800px" height="40px" fill="#000000">
                      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                      <g id="SVGRepo_iconCarrier"> <g> <circle style={{fill: '#35AFA0'}} cx="72.387" cy="72.386" r="72.386" /> <g> <defs> <circle id="SVGID_1_" cx="72.387" cy="72.386" r="72.386" /> </defs> <clipPath id="SVGID_2_"> <use xlinkHref="#SVGID_1_" style={{overflow: 'visible'}} /> </clipPath> <g style={{clipPath: 'url(#SVGID_2_)'}}> <g> <path style={{fill: '#F1C9A5'}} d="M107.053,116.94c-4.666-8.833-34.666-14.376-34.666-14.376s-30,5.543-34.666,14.376 c-3.449,12.258-6.334,27.833-6.334,27.833h41h41C113.387,144.773,111.438,128.073,107.053,116.94z" /> <path style={{fill: '#E4B692'}} d="M72.387,102.564c0,0,30,5.543,34.666,14.376c4.386,11.133,6.334,27.833,6.334,27.833h-41V102.564 z" /> <rect x="64.22" y="84.606" style={{fill: '#F1C9A5'}} width="16.334" height="27.336" /> <rect x="72.387" y="84.606" style={{fill: '#E4B692'}} width="8.167" height="27.336" /> <path style={{opacity: '0.1', fill: '#DDAC8C'}} d="M64.22,97.273c1.469,4.217,7.397,6.634,11.751,6.634 c1.575,0,3.107-0.264,4.583-0.747V84.606H64.22V97.273z" /> <path style={{fill: '#F1C9A5'}} d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783c-11.598,0-21,9.709-21,26.783 c0,22.966,9.402,30.917,21,30.917C83.984,98.274,93.387,89.366,93.387,67.357z" /> <path style={{fill: '#E4B692'}} d="M90.19,79.197c-3.807-0.398-6.377-4.5-5.732-9.156c0.637-4.66,4.242-8.12,8.051-7.724 c3.805,0.396,6.371,4.496,5.729,9.156C97.599,76.134,93.997,79.591,90.19,79.197z" /> <path style={{fill: '#F1C9A5'}} d="M46.685,71.474c-0.643-4.66,1.924-8.76,5.727-9.156c3.81-0.396,7.416,3.063,8.055,7.724 c0.643,4.656-1.93,8.758-5.734,9.156C50.925,79.591,47.323,76.134,46.685,71.474z" /> <path style={{fill: '#E4B692'}} d="M93.387,67.357c0-17.074-9.402-26.783-21-26.783v57.7C83.984,98.274,93.387,89.366,93.387,67.357 z" /> </g> <path style={{fill: '#303030'}} d="M91.277,81.668c-1.13,3.176-3.041,6.994-6.494,6.994c-4.316,0-7.403-3.508-12.354-3.508 c-0.014,0-0.027,0.002-0.041,0.002c-0.015,0-0.028-0.002-0.043-0.002c-4.95,0-8.036,3.508-12.354,3.508 c-3.453,0-5.363-3.818-6.493-6.994L52.52,75.55v7.321c0,0,1.641,8.622,4.79,10.705c2.565,2.279,10.938,6.183,15.033,6.183h0.001 c0.014,0,0.028-0.002,0.043-0.002c0.014,0,0.028,0.002,0.041,0.002h0.002c4.096,0,12.469-3.903,15.033-6.183 c3.149-2.083,4.79-10.705,4.79-10.705V75.55L91.277,81.668z" /> <path style={{fill: '#303030'}} d="M62.218,43.841c0,0,3.9,15.787,25.632,23.773c-2.044-3.529-2.415-7.801-2.415-7.801 s3.529,3.715,9.286,6.687c3.158-6.314,6.873-15.787-1.485-20.987C84.878,40.312,65.004,31.024,62.218,43.841z" /> <path style={{fill: '#303030'}} d="M54.975,66.314c0,0,1.613-18.023,8.328-22.01c-5.728-2.499-14.457,5.108-13.529,9.751 C50.703,58.699,54.975,66.314,54.975,66.314z" /> <path style={{fill: '#FB621E'}} d="M107.053,116.94c-2.726-5.158-14.082-9.191-23.065-11.656c-0.352,6.11-5.402,10.96-11.601,10.96 c-6.198,0-11.249-4.85-11.6-10.96c-8.983,2.465-20.34,6.498-23.066,11.656c-3.449,12.258-6.334,27.833-6.334,27.833h41h41 C113.387,144.773,111.438,128.073,107.053,116.94z" /> <path style={{opacity: '0.2', fill: '#E53D0C'}} d="M60.114,108.284c0.372,6.11,5.715,10.96,12.272,10.96c6.558,0,11.9-4.85,12.272-10.96 c8.233,2.135,18.34,5.449,22.772,9.65c-0.124-0.336-0.25-0.668-0.379-0.994c-2.726-5.158-14.082-9.191-23.065-11.656 c-0.352,6.11-5.402,10.96-11.601,10.96c-6.198,0-11.249-4.85-11.6-10.96c-8.983,2.465-20.34,6.498-23.066,11.656 c-0.081,0.289-0.162,0.582-0.243,0.874C41.976,113.671,51.96,110.398,60.114,108.284z" /> <path style={{fill: '#E53D0C'}} d="M57.37,106.269c1.138,7.28,7.418,12.856,15.017,12.856c7.599,0,13.879-5.576,15.017-12.856 c-1.161-0.352-2.307-0.68-3.416-0.984c-0.352,6.11-5.402,10.96-11.601,10.96c-6.198,0-11.249-4.85-11.6-10.96 C59.677,105.589,58.531,105.917,57.37,106.269z" /> <path style={{fill: '#FFFFFF'}} d="M75.804,90.657c0,0-0.5-2.226-3.417-2.226c-2.667,0-3.417,2.226-3.417,2.226H75.804z" /> </g> </g> </g> </g>
                    </svg>:  
                    <i className="fa-regular fa-user"></i>
                  }
                </div>
                {showUser &&
                  <div 
                  className={`absolute ${token ? 'sm:-bottom-[110%] -bottom-[140%]' : 'sm:-bottom-[200%] -bottom-[270%]'}  bg-[#f0faff] rounded-2xl py-2 px-6 right-1/2 translate-x-1/2 text-main font-semibold`}>
                    <ul className=' space-y-2 text-center'>
                      {token ?   
                        <li onClick={()=>logout()} className='cursor-pointer'>Logout</li>:
                        <>
                          <Link onClick={() => setShowUser(false)} to={'/sign-in'}><li>Login</li></Link>
                          <hr />
                          <Link onClick={() => setShowUser(false)} to={'/sign-up'}><li>Register</li></Link>                  
                        </>
                      }
                    </ul>
                  </div>              
              }

            </div>
            <p className='font-semibold cursor-default'>$0.00</p>
            <Link to={''}>
              <div className='size-8 sm:size-[42px] bg-[#FFF1EE] flex justify-center items-center rounded-full relative'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_1_3014)">
                    <path d="M9.03424 2.161C8.52424 2.161 8.05107 2.2885 7.61474 2.5435C7.1784 2.7985 6.83274 3.14417 6.57774 3.5805C6.32274 4.01683 6.19524 4.49 6.19524 5H4.75024C4.75024 4.22933 4.94007 3.51817 5.31974 2.8665C5.6994 2.21483 6.21507 1.69917 6.86674 1.3195C7.5184 0.939833 8.22957 0.75 9.00024 0.75C9.7709 0.75 10.4821 0.939833 11.1337 1.3195C11.7854 1.69917 12.3011 2.21483 12.6807 2.8665C13.0604 3.51817 13.2502 4.22933 13.2502 5H16.0382C16.4462 5 16.7919 5.1445 17.0752 5.4335C17.3586 5.7225 17.5002 6.07667 17.5002 6.496C17.5002 6.58667 17.4946 6.67167 17.4832 6.751L15.9022 15.897C15.8116 16.4297 15.5622 16.8717 15.1542 17.223C14.7462 17.5743 14.2759 17.75 13.7432 17.75H4.25724C3.72457 17.75 3.25424 17.5743 2.84624 17.223C2.43824 16.8717 2.1889 16.4297 2.09824 15.897L0.517235 6.768C0.449235 6.36 0.531402 5.986 0.763735 5.646C0.996068 5.306 1.31057 5.09633 1.70723 5.017C1.78657 5.00567 1.87157 5 1.96224 5H11.8732C11.8732 4.49 11.7457 4.01683 11.4907 3.5805C11.2357 3.14417 10.8901 2.7985 10.4537 2.5435C10.0174 2.2885 9.54424 2.161 9.03424 2.161ZM16.0382 6.411H1.96224C1.9509 6.411 1.9339 6.43367 1.91123 6.479V6.513L3.49224 15.659C3.52624 15.8403 3.60557 15.9933 3.73024 16.118C3.8549 16.2427 4.00224 16.3107 4.17224 16.322L4.25724 16.339H13.7432C13.9132 16.339 14.0691 16.2852 14.2107 16.1775C14.3524 16.0698 14.4459 15.9253 14.4912 15.744L16.0892 6.496C16.0892 6.45067 16.0779 6.428 16.0552 6.428L16.0382 6.411Z" fill="#EA2B0F" />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_3014">
                      <rect width="17" height="17" fill="white" transform="matrix(1 0 0 -1 0.5 17.75)" />
                    </clipPath>
                  </defs>
                </svg>
                <span className='text-white text-[10px] size-3 sm:size-[17px] bg-[#EA2B0F] flex justify-center items-center rounded-full absolute top-0 -end-[8%]'>
                  0
                </span>
              </div>
            </Link>
            <button onClick={()=> toggleState(openMenu, setOpenMenu)} className='cursor-pointer text-[#3E445A] text-xl lg:hidden'><i className="fa-solid fa-bars"></i></button>
          </div>
        </div>
      <div className='mt-6 flex items-center'>
        <div className='w-[25%] hidden lg:block cursor-pointer'>
          <div className='flex p-4 text-white bg-main rounded-full justify-center items-center'>
            <span className='block'><i className="fa-solid fa-bars pe-4"></i></span>
              <span className='block uppercase font-semibold text-sm'>all categories</span>
            <span className='block'><i className="fa-solid fa-angle-down ps-6"></i></span>
            </div>
          </div>
        <div className='w-[75%] hidden lg:block'>
          <ul className='uppercase text-[#3E445A] font-semibold flex justify-between items-center ps-20'>
            {navLinks.map((navLink, index)=>
              <NavLink key={index} 
              className='navlink' 
              to={navLink.l}
              ><li>{navLink.t}</li></NavLink>
            )}
            </ul>
          </div>
        </div>
      {openSearch && 
        <div className='w-full mt-3 lg:hidden'>
          <form className="max-w-md mx-auto">
            <div className="relative">
              <input type="text" className="block w-full px-4 py-4 outline-0 text-sm text-gray-900 border rounded-sm bg-[#F3F4F7] placeholder:text-sm" placeholder="Search for Products, fruit, meat, eggs .etc..." required />
              <button type="submit" className="absolute end-0 bottom-0 top-0 focus:ring-4 focus:outline-none text-[#3E445A] font-medium rounded-lg text-lg px-4">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </form>
        </div>
      }
      {openMenu &&
        <div onClick={()=> setOpenMenu(false)} className='bg-[#212529cc] z-50 fixed inset-0 lg:hidden'>
        <button className='cursor-pointer text-white text-3xl absolute md:end-[27%] md:top-[11%] end-[4%] top-[1%]'><i className="fa-solid fa-xmark"></i></button>
        <div onClick={(e) => e.stopPropagation()} className='bg-white absolute md:top-[20%] md:bottom-[20%] md:end-[30%] md:start-[30%] top-[10%] bottom-[10%] end-[10%] start-[10%] rounded-lg overflow-auto'>
            <ul className='space-y-5 font-medium ms-5 mt-5 text-xl flex justify-between items-center flex-col'>
              {navLinks.map((navLink, index)=>
              <NavLink key={index} to={navLink.l}><li>{navLink.t}</li></NavLink>
              )}
            </ul>
            <div className='flex p-4 text-white bg-main rounded-full justify-center items-center w-fit mx-auto mt-4'>
              <span className='block'><i className="fa-solid fa-bars pe-4"></i></span>
              <span className='block uppercase font-semibold text-sm'>all categories</span>
            </div>
            </div>
        </div> 
      }
    </nav>
    <hr/>
    </>
}
