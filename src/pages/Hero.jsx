// Hero.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import resumePdfbl from '../assets/resume/mukeshyadav-frontend-dev-resume-bl.pdf';
import resumePdfbw from '../assets/resume/mukeshyadav-frontend-dev-resume-bw.pdf';
import Button from '../components/Reusable/Button';

const Hero = () => {


  const [resumeLink, setResumeLink] = useState(resumePdfbl);

  // Handlers to change the resume link
  const handleBlOption = () => {
    setResumeLink(resumePdfbl);
  };

  const handleBwOption = () => {
    setResumeLink(resumePdfbw);
  };

  return (
    <section id="hero" className="flex justify-center  px-4 md:px-16">
      <div className="container grid h-fit w-full py-24 text-brandDark-100 md:grid-cols-2">
        <div className="text-center md:text-start">
          <p className="text-xl text-brandDark-800 dark:text-brandDark-100">Hi there</p>
          <h1
            className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-brandBlue-800 via-brandBlue-500 to-brandBlue-400 sm:text-6xl">
            I'm Mukesh
          </h1>
          <p className="text-xl font-semibold text-brandDark-800 dark:text-brandDark-100">Front-end Developer</p>
          <p className="my-4 text-brandDark-600 dark:text-brandDark-500">
            I'm an aspiring front-end developer with a strong passion for
            creating beautiful and functional websites. I am skilled in HTML,
            CSS, and JavaScript, and I am constantly learning.
          </p>
          <div className="flex justify-center md:justify-start items-center gap-4 py-4">
            <NavLink to="/contact">
              <Button>Contact</Button>
            </NavLink>

            <div className="flex items-center rounded-xl dark:border dark:border-brandDark-700">
              <NavLink id="download-link"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resumeLink;
                  link.download = resumeLink.split('/').pop();
                  link.click();
                }}
                className="rounded-l-xl bg-brandDark-800 px-6 py-3 space-x-2 shadow-md hover:bg-brandBlue-500">
                View Resume
              </NavLink>

              <button id="dropdown-button" className="relative group">
                <img src="./icons/arrow-down.svg"
                  alt="arrow-down"
                  className="rounded-r-xl bg-brandDark-800 px-2 py-3 h-full border-s-2 border-brandDark-600 hover:bg-brandBlue-500" />

                <div id="resume-colors"
                  className="absolute hidden group-hover:block group-focus:block right-0 top-14 z-50 bg-brandDark-800 text-brandDark-100 rounded-xl p-1.5 shadow-md border border-brandDark-700">
                  <p id="blue-option"
                    onClick={handleBlOption}
                    className="hover:bg-brandDark-700 active:bg-brandBlue-500 rounded-lg py-1.5 px-5 border border-transparent hover:border-brandDark-600 text-sm">Blue
                  </p>

                  <p id="bw-option"
                    title="Black & White"
                    onClick={handleBwOption}
                    className="hover:bg-brandDark-700 active:bg-brandBlue-500 rounded-lg py-1.5 px-5 border border-transparent hover:border-brandDark-600 text-sm">B&W</p>
                </div>

              </button>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-16 md:mt-0 flex justify-center items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brandBlue-500 via-purple-500 to-brandBlue-600 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-gradient-x"></div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brandBlue-500 via-pink-500 to-brandBlue-600 rounded-full animate-spin animate-gradient-xy"></div>
              <div className="relative bg-white dark:bg-brandDark-950 rounded-full p-1.5">
                <img
                  src="./images/mukesh-yadav-pr-pic.webp"
                  alt="Profile"
                  className="max-h-64 rounded-full transform hover:scale-105 hover:rotate-12 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="absolute bg-gradient-to-tr from-blue-500 via-pink-500 to-pink-500 rounded-full blur-3xl opacity-10 dark:opacity-30 animate-spin animate-gradient-y"></div>
          </div>
        </div>
        {/* Profile Image End */}

      </div>
    </section>
  );
}

export default Hero;
