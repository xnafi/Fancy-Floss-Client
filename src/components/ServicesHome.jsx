import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ServicesHome = () => {
    const [service, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])

    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 md:px-10 px-2">
            <div className="container mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold uppercase">dental services <br /> in Fancy Floss chamber</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        service.slice(0, 3).map(data =>

                            <article key={data._id} className="flex flex-col dark:bg-gray-900 bg-slate-400 text-white rounded-lg p-3">
                                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={data.image} />
                                </a>
                                <div className="flex flex-col flex-1">
                                    <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{data.name} </h3>
                                    <p rel="noopener noreferrer" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{data.des.slice(0, 100)}...</p>
                                </div>
                            </article>

                        )
                    }

                </div>
            </div>
            <div className='mt-8 flex justify-center'>
                <Link to='/services' className="px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 text-center">More services</Link>
            </div>
        </section>
    )
}

export default ServicesHome