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
import { UserProvider } from "./contexts/UserContext"
function App() {
  return (
   <>
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SigIn />} />
          <Route path="/signUp" element={<SigUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resumo" element={<MonthlyStatement />} />
          <Route path="/cadastro" element={<Enrollment />} />
        </Routes>
      </Router>
    </UserProvider>
   </>
  );
}

export default App;
