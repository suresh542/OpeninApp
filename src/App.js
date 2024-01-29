import { Routes,Route } from 'react-router-dom';
import LoginPage from './Source Code/LoginPage';
import UserPage from './Source Code/UserPage';
// import ExcelTable from './Source Code/sample';


function App() {
  return (
    <div className="App">
     

      <Routes>
            <Route path="/UserPage" element={<UserPage/>}/>
            <Route path="/" element={<LoginPage/>}/>
      </Routes>
      {/* <ExcelTable/> */}
    </div>
  );
}

export default App;
