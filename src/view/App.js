import '../style/App.scss'
import { Routes, Route } from 'react-router-dom';
import Login from '../page/Login';
import RootLayout from '../layout/RootLayout';
import Register from '../page/Register';
import Quiz from '../page/Quiz';
import Finish from '../page/Finish';
import Start from '../page/Start';
function App() {
  return (
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/quiz' element={<Start/>} />
        <Route path='/quiz/:page/:id' element={<Quiz/>} />
        <Route path='/finish' element={<Finish/>} />
      </Route>
    </Routes>
  );
}

export default App;
