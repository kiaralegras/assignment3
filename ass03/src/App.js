import logo from './logo.svg';
import Home from './pages/Home';
import About from './pages/About';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Calc from './pages/Calc';
import MealInspiration from './pages/MealInspiration';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="calc" element={<Calc />} />
          <Route path="mealInspiration" element={<MealInspiration />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
