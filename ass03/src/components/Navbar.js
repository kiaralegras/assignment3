import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link class="navbar-brand ml-1" to="/">Fit Co.</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse ml-2" id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item mr-3 ml-3">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <Link class="nav-link" to="/about">About</Link>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <Link class="nav-link" to="/calc">Calorie Deficit Calculator</Link>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <Link class="nav-link" to="/mealInspiration">Meal Inspiration</Link>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <Link class="nav-link" to="/contact">Contact</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}