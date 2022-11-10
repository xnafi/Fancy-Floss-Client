import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../authcontext/AutProvider'
import useTitle from '../Hooks/useTitle'
import MyReviewTable from './MyReviewTable'

const MyReviews = () => {
    useTitle('My Review')
    const { user, logOut } = useContext(AuthContext)
    const [comments, setComments] = useState([])
    const [change, setChange] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`https://dentus-server-side.vercel.app/myreviews?email=${user?.email}`, {
            headers: {
                authorization: ` Bearer ${localStorage.getItem('jwt-token')}`
            }
        })
            .then(res => {
                if (res.status === 403 || res.status === 401) {
                    Swal.fire("user email not Found")
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setComments(data)
            })
    }, [loading, user?.email])
    console.log(localStorage.getItem('jwt-token'));
    const handleDelete = (id) => {
        const confirm = window.confirm('Do You Want To Delete This?')
        if (confirm) {
            fetch(`https://dentus-server-side.vercel.app/deletereview/${id}`, {
                method: "delete"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setLoading(!loading)
                        Swal.fire('data deleted')
                    }
                })
        }
    }
    const updateHandler = (e) => {
        e.preventDefault()
        fetch(`https://dentus-server-side.vercel.app/updatereview/${change?._id}`, {
            method: 'put',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(change)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setLoading(!loading)
                }

                console.log(data);
            })

    }
    const editHandle = (e) => {
        setChange({ ...change, [e.target.name]: e.target.value })
    }

    return (

        < div className="overflow-x-auto h-screen w-screen z-0" >
            <h1 className='text-5xl font-bold text-center my-20'>My Reviews</h1>
            <table className="table table-zebra w-full mx-auto">
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
                        comments.map((comment, index) => <MyReviewTable key={comment._id} comment={comment} index={index} handleDelete={handleDelete} setChange={setChange} />)
                    }
                </tbody>
            </table>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <div>
                            <h4 className='text-center font-semibold text-4xl my-3'>Update Review</h4>
                            <div className="w-full mx-auto">
                                <form onSubmit={updateHandler} className="card-body">
                                    <div className="form-control">
                                        <label className="label" htmlFor='name'>
                                            <span className="label-text">Comments : </span>
                                        </label>
                                        <textarea onChange={editHandle} name="textarea" value={change?.comment} placeholder='write your comments here : ' className='h-[150px] border-2 p-3 resize-none rounded-lg'></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button type='submit' className="btn btn-primary">Update review</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ div>
    )
}

export default MyReviews