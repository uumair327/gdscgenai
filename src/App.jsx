import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UploadHome from './pages/UploadHome';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UploadHome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
