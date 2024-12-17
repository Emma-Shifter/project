import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx'
import RegPage from './pages/RegPage.jsx';
import RestorePasswordPage from './pages/RestorePasswordPage.jsx';
import TestCasePage from './pages/TestCasePage.jsx';
import VacancyPage from './pages/VacancyPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegPage />} />
        <Route path="restore" element={<RestorePasswordPage />} />
        <Route path="testcase" element={<TestCasePage />} />
        <Route path="vacancy" element={<VacancyPage />} />\
      </Routes>
    </BrowserRouter>
  );
}

export default App;
