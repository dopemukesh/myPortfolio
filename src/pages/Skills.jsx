// Skills.js
import React from 'react';
import skills from '../api/SkillsData.json'


function Skills() {

  return (
    <section id="skills" className="flex justify-center px-4 md:px-16">
      <div className="container py-12 rounded-lg">

        <h2 className="text-center text-3xl font-bold text-brandDark-700 dark:text-brandDark-100">
          Technologies I Know
        </h2>
        <p className="my-4 text-center text-brandDark-600 dark:text-brandDark-500">
          Here are some of my skills on which I have been working on for the past year.
        </p>

        {/* Skills Categories */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-fit mx-auto">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-brandDark-100 dark:bg-brandDark-900 border dark:border-brandDark-800 p-8 rounded-xl hover:shadow-lg shadow-brandDark-600/10 dark:shadow-black/20 hover:scale-[1.02] transition-transform duration-500 "
            >
              <h3 className="text-center text-xl text-brandDark-800 dark:text-brandDark-100 font-semibold mb-8">
                {skillCategory.category}
              </h3>
              <div className="grid gap-4 grid-cols-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative group cursor-default flex items-center bg-white border dark:border-brandDark-700 dark:bg-brandDark-800 p-2 rounded-lg"
                  >
                    <img src={skill.icon} alt={skill.name} className="h-6 w-6" />
                    <span className="ml-2 text-brandDark-700 dark:text-brandDark-100">
                      {skill.name}
                    </span>
                    <span className='hidden group-hover:inline-block absolute top-12 left-0 z-10 bg-brandBlue-500 text-[10px] text-white font-medium p-2 rounded-md'>
                      <i className="absolute -top-1 left-4 w-2 h-2 rotate-45 bg-brandBlue-500"></i>
                      {skill.uses}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
