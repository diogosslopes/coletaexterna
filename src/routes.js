import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ColetasAgendadas from './pages/ColetasAgendadas.js';
import Login from './pages/Login';
import Signin from './pages/Signin.js';
import CadColeta from './pages/CadColeta'
import ColetasRealizadas from './pages/ColetasRealizdas'
import DetalhesColetasCad from './pages/DetalhesColetasCad'
import DetalhesColetasRealizadas from './pages/DetalhesColetasRealizadas.js';
import EditColeta from './pages/EditColeta.js';

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Login /> }/>
            <Route path="/coletasagendadas" element={ <ColetasAgendadas /> }/>
            <Route path="/coleta/:id" element={ <DetalhesColetasCad /> }/>
            <Route path="/cadacoleta" element={ <CadColeta /> } />
            <Route path="/coletasrealizadas" element={ <ColetasRealizadas /> } />
            <Route path="/coletar/:id" element={ <DetalhesColetasRealizadas /> }/>
            <Route path="/signin" element={ <Signin /> } />
            <Route path="/editcoleta/:id" element={ <EditColeta /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
