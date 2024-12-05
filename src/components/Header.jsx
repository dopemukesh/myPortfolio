/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import moonIcon from '../assets/icons/moon-ic.svg';
import sunIcon from '../assets/icons/sun-ic.svg';

const Header = ({ isDarkMode, toggleDarkMode, toggleSidebar }) => {
    const navlink = "flex text-brandDark-800 dark:text-brandDark-400 text-sm leading-6 hover:text-brandBlue-500 dark:hover:text-brandBlue-500";
    return (
        <header className="flex justify-center sticky top-0 z-50 backdrop-blur-md bg-white dark:bg-brandDark-950 px-4 md:px-16">
            <nav className="container flex items-center justify-between py-4 text-brandDark-100">
                <NavLink to="/" id="brand-logo" className="flex items-center justify-start h-7 w-fit overflow-hidden">
                    <svg width="52" height="44" viewBox="0 0 52 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7">
                        <path d="M0 0H12V44H0V0Z" className="dark:fill-white" fill="#1E293B"/>
                        <path d="M20 0L36 22L52 0H40L36 6L32 0H20Z" className="dark:fill-white" fill="#1E293B"/>
                        <path d="M40 44H52L36 22L20 44H32L36 38L40 44Z" className="dark:fill-white" fill="#1E293B"/>
                        <path d="M14 0H18V44H14V0Z" className="dark:fill-white" fill="#1E293B"/>
                    </svg>
                    <p className="inline text-xl font-bold h-fit ms-2 text-brandDark-800  dark:text-brandDark-100">Mukesh</p>
                </NavLink>

                <div className="hidden md:flex space-x-8 items-center font-semibold">
                    <NavLink to="/" className={navlink}>Home</NavLink>
                    {/* <NavLink to="#skills" className={navlink}>Skills</NavLink> */}
                    {/* <NavLink to="/about" className={navlink}>About</NavLink>
                    <NavLink to="/contact" className={navlink}>Contact</NavLink> */}
                    <NavLink to="/projects" className={navlink}>Projects</NavLink>
                </div>

                <div className="flex gap-2 items-center rounded-xl p-1 md:grid-cols-1">
                    <button onClick={toggleDarkMode} className="grid place-content-center h-8 w-8 rounded-xl bg-brandDark-800 dark:bg-brandDark-100">
                        {isDarkMode ? (
                            <img src={sunIcon} alt="Light Mode" className='w-5 h-5'/>
                        ) : (
                            <img src={moonIcon} alt="Dark Mode" className='w-5 h-5'/>
                        )}
                    </button> 
                    {/* <img src="../assets/icons/moon-ic.svg" alt="" /> */}
                    {/* Mobile menu icon */}
                    <button onClick={toggleSidebar} className='rounded-xl border dark:border-brandDark-700 bg-brandDark-100 dark:bg-brandDark-800'>
                        <svg id="menuIcon" width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="grid h-8 w-8 cursor-pointer place-items-center  p-[2px] md:hidden">
                            <path d="M5.0769 8.53845H18.9231" stroke="#1E293B" strokeWidth="2.81243" strokeLinecap="" className="dark:stroke-brandDark-100" />
                            <path d="M5.0769 13.4615H13.7308" stroke="#1E293B" strokeWidth="2.81243" strokeLinecap="" className="stroke-brandBlue-500 " />
                            <path d="M5.0769 18.53845H18.9231" stroke="#1e293b" strokeWidth="2.81243" strokeLinecap="" className="dark:stroke-brandDark-100" />

                        </svg>
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
