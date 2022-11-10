import React, { useEffect, useState } from 'react'

const MyReviewTable = ({ comment, index }) => {
    const [service, setService] = useState(null)
    

    const { textarea, servicesId } = comment
    useEffect(() => {
        fetch(`http://localhost:5000/service/${servicesId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [])
    console.log("🚀 ~ file: MyReviewTable.jsx ~ line 5 ~ MyReviewTable ~ service", service)

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{service.name}</td>
            <td>{textarea}</td>
            <td></td>
        </tr>
    )
}

export default MyReviewTable