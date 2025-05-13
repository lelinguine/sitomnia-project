import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Loading from './views/Loading';
import Unkonwn from './views/Unknown';
import './App.scss'

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Loading" element={<Loading />} />
          <Route path="*" element={<Unkonwn />} />
        </Routes>
      </Router>
    </main>
  );
}