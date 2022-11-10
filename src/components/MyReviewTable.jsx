import React, { useEffect, useState } from 'react'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'

const MyReviewTable = ({ comment, index, handleDelete, setChange
}) => {
    const [service, setService] = useState(null)


    const { textarea, servicesId, _id } = comment
    useEffect(() => {
        fetch(`https://dentus-server-side.vercel.app/service/${servicesId}`)
            .then(res => res.json())
            .then(data => {
                setService(data)
            })
    }, [])

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{service?.name}</td>
            <td>{textarea}</td>

            <td className='flex gap-x-4'><button onClick={() => handleDelete(_id)}><FaTrashAlt /></button> <label htmlFor="my-modal-3" className="" onClick={() => setChange(comment)} ><FaPenAlt className=' text-xl cursor-pointer text-info' /></label> </td>

        </tr>
    )
}

export default MyReviewTable
{/* <label htmlFor="my-modal" onClick={()=>setChange(comment)}><FaPenAlt /></label> */ }