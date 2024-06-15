import React from 'react'
import Sidebar from './Components/Sidebar'
import Header from './Components/Header';
import "./App.css";
import Dashboard from './Components/Dashboard';
import User from './pages/User';
import Profile from './pages/Profile';
function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header/>
       {/* <Dashboard/> */}
       <User/>
       <Profile/>
      </div>
    </div>
  );
}

export default App