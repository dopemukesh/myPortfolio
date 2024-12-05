import React from 'react'
import servicesData from '../api/ServiceData.json';

const Service = () => {
    return (
        <>
            <section id='service'>
                <div className="container my-12">
                    <h2 className="w-full font-poppins text-2xl font-bold text-brandDark-800 dark:text-brandDark-100">
                        What I'm Doing
                    </h2>
                    <i className="mt-2 mb-4 flex h-1 w-20 flex-1 bg-brandBlue-500"></i>

                    <div className='grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3'>
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                className="flex flex-col items-center w-full bg-brandDark-100 dark:bg-brandDark-900 border dark:border-brandDark-700/50 p-4 rounded-xl hover:shadow-lg shadow-brandDark-600/10 dark:shadow-black/20 hover:scale-[1.02] transition-all duration-700"
                            >
                                <img src={service.icon} alt={`${service.title} Icon`} width={56} />
                                <p className="font-semibold text-brandDark-800 dark:text-brandDark-100 mt-4">{service.title}</p>
                                <p className="text-center text-brandDark-600 dark:text-brandDark-500">{service.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Service