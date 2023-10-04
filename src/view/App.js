import '../style/App.scss'
import { Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import RootLayout from '../layout/RootLayout';
import Register from '../page/Register';
function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
