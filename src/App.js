// import logo from './logo.svg';
// import './App.css';
import { Routes,Route } from 'react-router-dom';
// import Switch from 'react-bootstrap-v5/lib/esm/Switch';
import LoginPage from './Source Code/LoginPage';
import UserPage from './Source Code/UserPage';

function App() {
  return (
    <div className="App">
     
     {/* <LoginPage/> */}

      <Routes>
            <Route path="/UserPage" element={<UserPage/>}/>
            <Route path="/" element={<LoginPage/>}/>
      </Routes>

    </div>
  );
}

export default App;
