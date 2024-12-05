import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen }) => {
  return (
    <div
      id="sidebar"
      className={`fixed left-0 top-0 z-10 h-full w-64 overflow-y-scroll transform bg-white transition-all duration-300 ease-in-out dark:bg-brandDark-950 dark:text-brandDark-100 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
    >
      <nav className="mt-16 flex flex-col items-start space-y-4 p-6">
        <NavLink to="/" className="flex gap-2 w-full rounded-lg p-2 dark:text-brandDark-100">
          <svg
            className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-brandDark-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
              clipRule="evenodd"
            />
          </svg>
          Home
        </NavLink>

        {/* <NavLink to="/skills" className="flex gap-2 w-full rounded-lg p-2 dark:text-brandDark-100">
          <svg
            className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-brandDark-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8.597 3.2A1 1 0 0 0 7.04 4.289a3.49 3.49 0 0 1 .057 1.795 3.448 3.448 0 0 1-.84 1.575.999.999 0 0 0-.077.094c-.596.817-3.96 5.6-.941 10.762l.03.049a7.73 7.73 0 0 0 2.917 2.602 7.617 7.617 0 0 0 3.772.829 8.06 8.06 0 0 0 3.986-.975 8.185 8.185 0 0 0 3.04-2.864c1.301-2.2 1.184-4.556.588-6.441-.583-1.848-1.68-3.414-2.607-4.102a1 1 0 0 0-1.594.757c-.067 1.431-.363 2.551-.794 3.431-.222-2.407-1.127-4.196-2.224-5.524-1.147-1.39-2.564-2.3-3.323-2.788a8.487 8.487 0 0 1-.432-.287Z" />
          </svg>
          Skills
        </NavLink> */}

        <NavLink to="/projects" className="flex gap-2 w-full rounded-lg p-2 dark:text-brandDark-100 group">
          <svg
            aria-hidden="true"
            className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-brandDark-100"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
          Projects
        </NavLink>

        <NavLink to="/about" className="flex gap-2 w-full rounded-lg p-2 dark:text-brandDark-100">
          <svg
            className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-brandDark-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 8v8m0-8h8M8 8H6a2 2 0 1 1 2-2v2Zm0 8h8m-8 0H6a2 2 0 1 0 2 2v-2Zm8 0V8m0 8h2a2 2 0 1 1-2 2v-2Zm0-8h2a2 2 0 1 0-2-2v2Z"
            />
          </svg>
          About
        </NavLink>

        {/* <NavLink to="/contact" className="flex gap-2 w-full rounded-lg p-2 dark:text-brandDark-100">
          <svg
            className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-brandDark-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559 1.331v9.25c0 .502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clipRule="evenodd"
            />
          </svg>
          Contact Us
        </NavLink> */}

        {/* <NavLink to="/challenges" className="flex gap-2 w-full rounded-lg p-2 dark:text-brandDark-100">
          <svg
            className="flex-shrink-0 w-6 h-6 transition duration-75 dark:text-brandDark-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M3.559 4.544c.355-.35.834-.544 1.33-.544H19.11c.496 0 .975.194 1.33.544.356.35.559.829.559.502-.203.981-.559 1.331-.355.35-.834.544-1.33.544H15.5l-2.7 3.6a1 1 0 0 1-1.6 0L8.5 17H4.889c-.496 0-.975-.194-1.33-.544A1.868 1.868 0 0 1 3 15.125v-9.25c0-.502.203-.981.559-1.331ZM7.556 7.5a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2h-8Zm0 3.5a1 1 0 1 0 0 2H12a1 1 0 1 0 0-2H7.556Z"
              clipRule="evenodd"
            />
          </svg>
          Challenges
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Sidebar;
