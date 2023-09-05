import React from 'react';
import img1 from '../images/web.svg'; 
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Our Automotive Services</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-blue-900'></div>
                        </div>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            {/* <!-- Air and Cabin Filter Replacement --> */}
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img1} />
                                    <h2 className="font-semibold my-4 text-xl text-center">Air and Cabin Filter Replacement</h2>
                                    <p className="text-md font-medium">
                                        Ensure your vehicle's air quality and performance by regularly replacing air and cabin filters. Breathe easier and enjoy a clean, comfortable ride.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Vehicle Engine Diagnostic --> */}
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img2} />
                                    <h2 className="font-semibold my-4 text-xl text-center">Vehicle Engine Diagnostic</h2>
                                    <p className="text-md font-medium">
                                        We employ cutting-edge diagnostic tools to pinpoint engine issues quickly and accurately, saving you time and money on repairs.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Battery Services --> */}
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img3} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Battery Services</h2>
                                    <p className="text-md font-medium">
                                        Don't get stranded with a dead battery. We offer battery testing, replacement, and maintenance services to keep your vehicle reliable.
                                    </p>
                                </div>
                            </div>

                            {/* <!-- Brake Repairs --> */}
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-xl text-center ">Brake Repairs</h2>
                                    <p className="text-md font-medium">
                                        Safety is paramount. Trust us for expert brake inspections and repairs, ensuring your vehicle stops effectively when you need it to.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

            </section>
        </div>
    )
}

export default Services;