import React, { useState } from "react";
import "./App.css";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isHrAdmin, setIsHrAdmin] = useState(false);
    const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  return (
    <div>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {!isLoggedIn && (
          <LoginForm 
            setIsLoggedIn={setIsLoggedIn} 
            setIsHrAdmin={setIsHrAdmin}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            isHrAdmin={isHrAdmin}
          />
        )}
        {isLoggedIn && isHrAdmin && (
          <HRDashboard showAddEmployeeForm={showAddEmployeeForm} setShowAddEmployeeForm={setShowAddEmployeeForm} />
        )}
    </div>
    );
}

function Header({ isLoggedIn, setIsLoggedIn }) {
  return (
    <header>
      <h1>HR Portal</h1>
      <nav>
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <button>HR Policy</button>
        <button>Employee Policy</button>
        <button>About</button>
      </nav>
    </header>
  );
}

function LoginForm({ setIsLoggedIn, setIsHrAdmin, username, setUsername, password, setPassword, isHrAdmin }) {
  
  const handleSubmit = () => {
    if (username.trim() !== "" && password.trim() !== "" && isHrAdmin) {
      setIsLoggedIn(true);
    } else {
      alert("Please Enter Credentials and Select Role");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="role-selection">
        <input type="radio" name="role" value="employee" onChange={() => setIsHrAdmin(false)} /> Employee
        <input type="radio" name="role" value="admin" onChange={() => setIsHrAdmin(true)} /> HR Admin
      </div> 
      <form>
        <input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleSubmit}>Submit</button>
        <button className="sign-up-button" type="button">Sign Up</button>
      </form>
    </div>
  );
}

function HRDashboard({ showAddEmployeeForm, setShowAddEmployeeForm }) {
  return (
    <>
      <div className="new-employee-container">
        <h2>Add New Employee</h2>
        <button onClick={() => setShowAddEmployeeForm(true)}>Add New Employee</button>
      </div>
      
      {showAddEmployeeForm && (
        <div className="modal-overlay">
          <div className="employee-form-container">
            <h3>Employee Information</h3>
            <form>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Department" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Position" />
              <button type="submit">Save Employee</button>
              <button type="button" onClick={() => setShowAddEmployeeForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
  
}

export default App;