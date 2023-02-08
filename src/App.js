import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/index'
import MonthlyStatement from './pages/MonthlyStatement';
import Enrollment from './pages/Enrollments';
import SigIn from './pages/SigIn';
import SigUp from './pages/SigUp';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<SigIn />} />
        <Route path="/signUp" element={<SigUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resumo" element={<MonthlyStatement />} />
        <Route path="/cadastro" element={<Enrollment />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
