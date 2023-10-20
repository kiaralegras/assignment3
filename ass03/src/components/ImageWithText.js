import { Link } from "react-router-dom"

export default function ImageWithText() {
    return (
        <div className="text-center pt-1 pb-1 picture">
            <img src="home.jpg" height="50%" width="auto" />
            <div class="signin p-4"><Link to="/signUp">Sign up here to begin your adventure with us</Link></div>
        </div>
    )
}