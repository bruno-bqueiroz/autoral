import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home/index'

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resumo" element={<Home />} />
        <Route path="/cadastro" element={<Home />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
