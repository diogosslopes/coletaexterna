import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ColetasAgendadas from './pages/ColetasAgendadas.js';
import Login from './pages/Login';
import Signin from './pages/Signin.js';
import CadColeta from './pages/CadColeta'
import ColetasRealizadas from './pages/ColetasRealizdas'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> }/>
            <Route path="/coletasagendadas" element={ <ColetasAgendadas /> }/>
            <Route path="/cadacoleta" element={ <CadColeta /> } />
            <Route path="/coletasrealizadas" element={ <ColetasRealizadas /> } />
            <Route path="/signin" element={ <Signin /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
