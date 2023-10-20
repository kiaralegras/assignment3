import logo from './logo.svg';
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
