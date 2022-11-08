import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/bannerImg.png'
const Banner = () => {
    return (
        <div className="flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between bg-[#15269C] px-10 text-white">
            <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                <h1 className="text-5xl font-bold leading-none sm:text-5xl uppercase">Come to Fancy Floss and solve your teeth problem
                </h1><br className="hidden md:inline lg:hidden" />
                <p className="mt-6 mb-8 text-lg sm:mb-12">It is so important to brush your teeth, take care of your oral health, and thank your dental hygienist. A smile is your unique accessory and pearly white teeth make it even more beautiful
                </p>
                <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                    <Link rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Appoinment</Link>
                </div>
            </div>
            <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <img src={bannerImg} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
            </div>
        </div>
    )
}

export default Banner