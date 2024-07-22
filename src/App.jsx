import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Import HashRouter as Router
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import Header from './Components/Header';
import Signup from './Components/Signup';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />


        {/* protected Route  */}
        <Route path='/' element={<ProtectedRoute />}>
          x
          <Route exact path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
