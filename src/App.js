import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/index'
import MonthlyStatement from './pages/MonthlyStatement';
import Enrollment from './pages/Enrollments';
function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resumo" element={<MonthlyStatement />} />
        <Route path="/cadastro" element={<Enrollment />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
