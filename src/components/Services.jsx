import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { PhotoProvider, PhotoView } from 'react-photo-view';


const Services = () => {
  const loadServices = useLoaderData()
  const [services, setServices] = useState(loadServices)


  return (
    <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100 px-10">
      <div className="container mx-auto space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold uppercase">Enjoy all dental service <br /> in Fancy Floss chamber</h2>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {
            services.map(data =>

              <article key={data._id} className="flex flex-col dark:bg-gray-900">
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                  {/* <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={data.image} /> */}
                  <PhotoProvider>
                    <PhotoView src={data.image}>
                    <img src={data.image} style={{ objectFit: 'cover' }} className="object-cover w-full h-52 dark:bg-gray-500" alt="" />
                  </PhotoView>   
                  </PhotoProvider>
               
                </a>
                <div className="flex flex-col flex-1">
                  <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                  <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{data.name} </h3>
                  <p rel="noopener noreferrer" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">{data.des.slice(0, 100)}</p>

                </div>
              </article>

            )
          }

        </div>
      </div>
    </section>
  )
}

export default Services