import React from 'react';
import Service from '../components/Service';

const About = () => {
  return (
    <>
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-4 md:px-16 bg-gradient-to-b from-white to-gray-50 dark:from-brandDark-950 dark:to-brandDark-900"
      >
        <div className="container mx-auto py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-brandDark-800 dark:text-brandDark-100 font-poppins">
                  About me
                </h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-brandBlue-500 to-brandBlue-600 mt-4 rounded-full"></div>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-brandDark-600 dark:text-brandDark-400 leading-relaxed">
                  Driven and Passionate Frontend Developer with a background in Computer Applications (BCA). Skilled in
                  HTML, CSS, JavaScript, and Tailwind CSS, I thrive on creating engaging web experiences.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brandBlue-500"></div>
                    <p className="text-brandDark-600 dark:text-brandDark-400">
                      <span className="font-semibold text-brandBlue-500">Proficient in:</span> HTML, CSS, JavaScript, and
                      Tailwind CSS
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brandBlue-500"></div>
                    <p className="text-brandDark-600 dark:text-brandDark-400">
                      <span className="font-semibold text-brandBlue-500">Experience:</span> Hands-on in developing web
                      applications and personal projects
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-brandBlue-500"></div>
                    <p className="text-brandDark-600 dark:text-brandDark-400">
                      <span className="font-semibold text-brandBlue-500">Current Goal:</span> Eager to bring my skills to a
                      professional setting and grow alongside a talented team
                    </p>
                  </div>
                </div>

                <p className="text-lg text-brandDark-600 dark:text-brandDark-400 leading-relaxed">
                  I&apos;m always excited to learn and explore new tools and techniques. Check out my resume to discover how I
                  can add value to your projects!
                </p>

                <a
                  href="../src/assets/resume/mukeshyadav-frontend-dev-resume-bl.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-gradient-to-r from-brandBlue-500 to-brandBlue-600 text-white font-medium rounded-lg shadow-lg shadow-brandBlue-500/25 hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brandBlue-500 to-brandBlue-600 rounded-3xl blur-3xl opacity-20 dark:opacity-40 transform -rotate-6"></div>
                <img
                  src="../src/assets/images/mukesh-yadav-pr-pic.webp"
                  alt="Profile Picture"
                  className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <Service />
        </div>
      </section>
    </>
  );
};

export default About;
