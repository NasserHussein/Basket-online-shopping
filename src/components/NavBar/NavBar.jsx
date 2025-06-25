import React, { useState } from 'react'
import TopBar from '../TopBar/TopBar'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png' 

export default function NavBar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const toggleState = (state, seter) => seter(!state);
  const navLinks = [
    { t: 'home' , l:'/'},
    { t: 'shop', l:'/products'},
    { t: 'fashion', l:'/wait'},
    { t: 'electronics', l:'/wait'},
    { t: 'blog', l:'/blog'},
    { t: 'contact', l:'/contact'},
  ];
  return <>
    <TopBar/>
    <nav className='container'>
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
            <div className='text-[#3E445A] '>
              <div className='size-8 sm:size-[42px] border border-[#E2E4EC] flex justify-center items-center rounded-full cursor-pointer'>
                <i className="fa-regular fa-user"></i>
              </div>
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
        <div onClick={()=> setOpenMenu(false)} className='bg-[#212529cc] absolute z-50 top-0 end-0 start-0 bottom-0 lg:hidden'>
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
    </>
}
