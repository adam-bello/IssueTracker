import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import AssignIssueModal from './AssignIssueModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Home() {
  const [issues, setIssues]= useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [issue, setIssue] = useState(0);

  const {id}=useParams();

  useEffect(()=>{
    loadIssues();
  }, []);

  const loadIssues = async () => {
    const result = await axios.get("http://localhost:8080/issues");
    setIssues(result.data);
  };

  const deleteIssue = async (id) => {
    await axios.delete(`http://localhost:8080/issue/${id}`);
    loadIssues();
  };


  return (
    <div className='container'>
      {openModal && <AssignIssueModal closeModal={setOpenModal} issue={issue}/>}
      <div className='py-4'>
      <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Priority</th>
            <th scope="col">Status</th>
            <th scope="col">Reporter</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>

     {
      issues.map((issue)=> {
        var reporter = <td></td>;
        if (issue.reporter) {
          reporter = <td>{issue.reporter.name}</td>
        } else {
          reporter = <td><button className="openModalButton btn btn-primary mx-2" onClick={() => {
            setIssue(issue);
            setOpenModal(true);
          }}>+</button></td>
        }
        return (
          <tr>
            <td>{issue.id}</td>
            <td>{issue.title}</td>
            <td>{issue.description}</td>
            <td>{issue.priority}</td>
            <td>{issue.status}</td>
            {reporter}
            <td>
              <Link className="btn btn-primary mx-2">View</Link>
              <Link className="btn btn-outline-primary mx-2">Edit</Link>
              <button className="btn btn-danger mx-2" onClick={() => {deleteIssue(issue.id)}}>Delete</button>
            </td>
          </tr>
        )})
     }
    
        </tbody>
      </table>
      </div>
    </div>
  )
}
