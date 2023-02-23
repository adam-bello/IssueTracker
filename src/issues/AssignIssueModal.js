import './AssignIssueModal.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AssignIssueModal(props) {
  let navigate = useNavigate();
  const [users, setUsers]= useState([]);
  const [selectedUser, setSelectedUser] = useState();

  useEffect(()=>{
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };

  let userList = users.map((user) => {
    return (
      <option value={user.id}>{user.name}</option>
    )
  })

  const onSubmit = async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/assign-issue/${props.issue.id}/${selectedUser}`);
    props.closeModal(false);
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalCloseBtn">
          <button className="btn btn-danger" onClick={() => {props.closeModal(false);}}> X </button>
        </div>
        <div className="title">
          <h1>{props.issue.title}</h1>
        </div>
        <div className="body">
          <div className="description">
            {props.issue.description}
          </div>
          <div className="priority">
            Priority: {props.issue.priority}
          </div>
          <div className="status">
            Status: {props.issue.status}
          </div>
          Assign a User: 
          <select id='user-select' onChange={(e) => {setSelectedUser(e.target.value)}}>
            <option selected value="">-</option>
            {userList}
          </select>
        </div>
        <div className="footer">
          <button type="submit" className="btn btn-primary" onClick={(e) => {onSubmit(e)}}> Submit </button>
          <button className="btn btn-danger" onClick={() => {
            props.closeModal(false);
            loadUsers();}}> Cancel </button>
        </div>
      </div>
    </div>
  )
}

export default AssignIssueModal