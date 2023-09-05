import { Auth } from './pages/Auth';
import { Login } from './pages/Login';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/logged" element={<Auth />} />
        <Route path="*" element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here (404)!</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
