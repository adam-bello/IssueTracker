import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Issues from './issues/Issues';
import Users from './users/Users';
import AddIssue from './issues/AddIssue';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/users" element={<Users/>}/>
          <Route exact path="/issues" element={<Issues/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser/>}/>
          <Route exact path="/addissue" element={<AddIssue/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
