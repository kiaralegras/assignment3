import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Fit Co.</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse ml-2" id="navbarSupportedContent">
                <ul class="navbar-nav">
                <li class="nav-item mr-3 ml-3">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <a class="nav-link" href="#">Calorie Deficit Calculator</a>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <a class="nav-link" href="#">Meal Inspiration</a>
                </li>
                <li class="nav-item  mr-3 ml-3">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}