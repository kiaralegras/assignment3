import { Link } from "react-router-dom"

export default function ImagesOnGrid() {
    return (
    <div class="container mt-4 picturesGrid">
        <div class="row">
          <div className="col-sm">
            <Link to="/about">
                <p>About Us</p>
                <img className="gridImage" src="man running.jpg"/>
            </Link>
          </div>
          <div class="col-sm">
            <Link to="/calc">
                <p>Calorie Meal Calculator</p>
                <img className="gridImage" src="calculator image.jpg" />
            </Link>
          </div>
          <div class="col-sm">
            <Link to="/mealInspiration">
                <p>Meal Inspiration</p>
                <img className="gridImage" src="bowl.jpg" />
            </Link>
          </div>
        </div>
    </div>
    )
}