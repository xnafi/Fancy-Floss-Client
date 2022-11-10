import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../authcontext/AutProvider'
import MyReviewTable from './MyReviewTable'

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setComments(data)
            })
    }, [])

    return (
        
        < div className = "overflow-x-auto" >
            <table className="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>SL/Num</th>
                        <th>Service Name</th>
                        <th>Comment</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                   {
                    comments.map((comment,index) => <MyReviewTable key={comment._id} comment={comment} index={index}/>)
                   }
                </tbody>
            </table>
        </ div>
    )
}

export default MyReviews