import HomePage from '@Pages/HomePage';
import WorksPage from '@Pages/WorksPage';
import AboutMePage from '@Pages/About-mePage';
import ContactsPage from '@Pages/ContactsPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace />} />

      <Route path='/home' element={<HomePage />} />

      <Route path='/works' element={<WorksPage />} />

      <Route path='/about-me' element={<AboutMePage />} />

      <Route path='/contacts' element={<ContactsPage />} />

      {/* Ruta por defecto (ejemplo: 404) */}
      <Route path='*' element={<Navigate to='/home' replace />} />
    </Routes>
  );
}

export default App;
