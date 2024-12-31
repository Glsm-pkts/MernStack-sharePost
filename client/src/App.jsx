import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Auth from './pages/auth';
import useToken from './hooks/useToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  const [token] = useToken();
  const {modal} = useSelector(state => state.modal)
 
  return (
    <div>
      <BrowserRouter>
     {token?.token && <Navbar/>}
    {modal && <Modal/>}
        <Routes>
          <Route path="/" element={!token?.token ? <Link to={"/auth"}/> :<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
