import React from 'react';

const AboutMe = () => {
    return (
        <div className='mb-20'>
            <div className='text-center' >
                <h3 className='text-2xl md:text-4xl font-bold mb-2'><span className='text-red-600'>About</span> Me</h3>
                <p className='text-md md:text-lg'>
                    24 hours available
                    Fancy Floss im a expert doctor and provide best dental solution</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-base-100 shadow-xl mt-10 rounded-xl" >
                <img className='w-full md:w-1/2 h-full rounded-tl-xl rounded-tr-xl md:rounded-tr-none md:rounded-bl-xl' src='https://img.freepik.com/premium-photo/african-american-dentist-holding-tools-isolated-blue-background-posing-with-arms-hip-smiling_1368-232643.jpg?w=2000' alt="Movie" data-aos="fade-right" />
                <div className="w-full md:w-1/2 p-3 " data-aos="fade-top">
                    <h2 className="text-3xl  md:text-4xl uppercase mb-2 font-bold ">Im john Doe</h2>
                    <p className='mb-5 font-semibold'>Im a professional dentist</p>
                    <p className='text-gray-500 text-justify'>Dentists typically work in dental offices or clinics, providing patients with cleanings and more in-depth procedures like root canals and cavity fillings. They work closely with Dental Hygienists to clean teeth and suggest treatment options and good hygiene practices for patients. Their job is to evaluate a patient’s oral health to spot cavities and diagnose conditions like Gingivitis and more severe diseases like oral cancer before they develop further. They may also take X-rays and provide patients with other professional resources for those who need braces or retainers.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;