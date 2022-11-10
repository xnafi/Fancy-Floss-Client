import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddService = () => {
  const [services, setServices] = useState({});
  document.title = "Add services"

  const submitHandle = (e) => {
    console.log(services);
    fetch("https://dentus-server-side.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(services)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire("Services added Successfully")
          setServices({})
          e.target.reset()
        }
        else {
          alert("user is not created")
        }
      })

    e.preventDefault()
  }
  const addProductHandle = (e) => {
    setServices({ ...services, [e.target.name]: e.target.value })
  }
  return (
    <div>
      <h4 className='text-center font-semibold text-4xl my-3'>Add Services</h4>
      <div className=" w-full lg:w-3/5 mx-auto">
        <form onSubmit={submitHandle} className="card-body ">
          <div className="form-control">
            <label className="label" htmlFor='name'>
              <span className="label-text">Service Name </span>
            </label>
            <input type="text" onBlur={addProductHandle} defaultValue={services?.title} placeholder="Service name : " name='name' className="input input-bordered" required />
          </div>

          <div className='flex flex-col md:flex-row justify-between gap-6'>
            <div className="form-control w-full">
              <label className="label" htmlFor='Services Price'>
                <span className="label-text">Service Price</span>
              </label>
              <input type="number" onBlur={addProductHandle} defaultValue={services?.Name} placeholder="Services price" name='price' className="input input-bordered" required />
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor='Service Icon'>
                <span className="label-text">Service Icon  </span>
              </label>
              <input type="text" onBlur={addProductHandle} defaultValue={services?.Icon} placeholder="Service Icon" name='image' className="input input-bordered" required />
            </div>

          </div>
          <div className="form-control">
            <label className="label" htmlFor='Services Photo URL'>
              <span className="label-text">Service Photo URL : </span>
            </label>
            <input type="text" onBlur={addProductHandle} defaultValue={services?.photo} placeholder="service photo url" name='image_1' className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label" htmlFor='photo'>
              <span className="label-text">Service Details : </span>
            </label>
            <textarea name="des" onBlur={addProductHandle} className=' resize-none input input-bordered h-24' placeholder='Service Details' required></textarea>
          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-primary">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;