/* eslint-disable no-unused-vars */
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-brandDark-100 to-white dark:from-brandDark-900 dark:to-brandDark-950 px-4 md:px-16">
      <div className="container max-w-6xl mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brandBlue-500 to-brandBlue-600 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-brandDark-600 dark:text-brandDark-400">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-brandDark-800 shadow-lg shadow-brandDark-200/20 dark:shadow-black/20">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brandBlue-500/10">
                <svg className="w-6 h-6 text-brandBlue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brandDark-800 dark:text-brandDark-100">Email</h3>
                <p className="text-brandDark-600 dark:text-brandDark-400">dope.mukeshyadav@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-xl bg-white dark:bg-brandDark-800 shadow-lg shadow-brandDark-200/20 dark:shadow-black/20">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brandBlue-500/10">
                <svg className="w-6 h-6 text-brandBlue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-brandDark-800 dark:text-brandDark-100">Location</h3>
                <p className="text-brandDark-600 dark:text-brandDark-400">Prayagraj, India</p>
              </div>
            </div>
          </div>

          <form className="space-y-6 bg-white dark:bg-brandDark-800 p-8 rounded-2xl shadow-xl shadow-brandDark-200/20 dark:shadow-black/20">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-brandDark-100/50 dark:bg-brandDark-900/50 border border-brandDark-200 dark:border-brandDark-700 focus:border-brandBlue-500 outline-none transition-all text-brandDark-800 dark:text-brandDark-100"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg bg-brandDark-100/50 dark:bg-brandDark-900/50 border border-brandDark-200 dark:border-brandDark-700 focus:border-brandBlue-500 outline-none transition-all text-brandDark-800 dark:text-brandDark-100"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-brandDark-100/50 dark:bg-brandDark-900/50 border border-brandDark-200 dark:border-brandDark-700 focus:border-brandBlue-500 outline-none transition-all text-brandDark-800 dark:text-brandDark-100"
              ></textarea>
            </div>
            <button className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-brandBlue-500 to-brandBlue-600 text-white font-medium hover:shadow-lg hover:shadow-brandBlue-500/30 transition-all duration-300 transform hover:-translate-y-0.5">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
