import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddIssue() {

  let navigate=useNavigate();

  const [issue, setIssue] = useState({
    title: "",
    description: "",
    priority: 0,
    status: 0
  })

  const{title, description, priority, status} = issue

  const onInputChange=(e)=>{

    setIssue({...issue, [e.target.name]: e.target.value})

  }

  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/issue", issue);
    navigate("/issues");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Create New Issue</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Title" className="form-label">
                Title
              </label>
              <input type={"text"} className="form-control" placeholder="Enter a title" name="title" value={title} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="Description" className="form-label">
                Description
              </label>
              <input type={"text"} className="form-control" placeholder="Enter a description" name="description" value={description} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="Priority" className="form-label">
                Priority
              </label>
              <input type={"number"} className="form-control" placeholder="Enter priority (1-10)" name="priority" value={priority} onChange={(e)=>onInputChange(e)}/>
            </div>
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <input type={"number"} className="form-control" placeholder="Enter status (1-5)" name="status" value={status} onChange={(e)=>onInputChange(e)}/>
            </div>
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/issues">Cancel</Link>
          </form>
        </div> 
      </div>
    </div>
  )
}
