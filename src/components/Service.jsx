import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Service = () => {
    const service = useLoaderData()
    const { image_1,name,des,price } = service

    return (
        <div className='md:px-10 px-2'>
            <div className="p-4 shadow-md dark:bg-gray-900 dark:text-gray-100 w-auto bg-gray-400 text-white rounded-lg my-10">
                <div className="flex justify-between pb-4 border-bottom">
                    <div className="flex items-center">
                        <a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100">Photography</a>
                    </div>
                    <a rel="noopener noreferrer" href="#">See All</a>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image_1} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-400" />
                    </div>
                    <div className="space-y-2">
                        <a rel="noopener noreferrer" href="#" className="block">
                            <h3 className="text-xl font-bold dark:text-violet-400">{name}</h3>
                        </a>
                        <p className="leading-snug dark:text-gray-400">{des}.</p>
                        <p className="text-xl font-semibold dark:text-gray-400">Price : ${price}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Service