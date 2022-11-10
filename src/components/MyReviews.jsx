import React, { useContext, useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { AuthContext } from '../authcontext/AutProvider'
import MyReviewTable from './MyReviewTable'

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([])
    const [change, setChange] = useState()
    const [loading, setLoading] = useState(true)
    const [close, setClose] = useState(false)
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })
    }, [loading])
    const handleDelete = (id) => {
        const confirm = window.confirm('Do You Want To Delete This?')
        if (confirm) {
            fetch(`http://localhost:5000/deletereview/${id}`, {
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
        fetch(`http://localhost:5000/updatereview/${change?._id}`, {
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

        < div className="overflow-x-auto" >
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