import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/users">Home</Link>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav">
              <Link className="btn btn-primary" to="/users">Users</Link>
              <Link className="btn btn-primary" to="/issues">Issues</Link>
              <Link className="btn btn-primary" to="/adduser">Add User</Link>
              <Link className="btn btn-primary" to="/addissue">Create Issue</Link>
            </div>
          </div>
          
          <Link className="btn btn-outline-light" to="">Logout</Link>
          {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}

          
        </div>
      </nav>
    </div>
  )
}
