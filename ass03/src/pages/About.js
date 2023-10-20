import Navbar from "../components/Navbar";
import '../base.css';
import '../about.css';

export default function About() {
    return (
    <>
        <title>About</title>
        <Navbar></Navbar>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Our Purpose</h1>
                    <p>Fit Co. is about inspiring all to live a healthier and happier
                    lifestyle. In doing this we offer health advice through our
                    certified professionals. This includes, meal inspiration and 
                    a calorie deficit calculator to assist you in understanding 
                    how best to make an impact in your weight loss journey.
                    </p>
                </div>
                <div className="col text-center">
                    <img className="aboutPicture" src="bowlImage.jpeg"></img>
                </div>
            </div>
            <div class="row mt-5">
                <div className="col">
                    <img className="aboutPicture" src="healthProf.jpg"></img>
                </div>
                <div className="col">
                    <h1>How We Help</h1>
                    <p>We use health professional to ensure we are given our customers the right advice and guidance. 
                        These professions have worked all over the world in many different health sectors and have a minimum of 5+ years of experience in their fields. 
                        Fit Co. members are able to get unlimited access to our health professions for advice and 1 on 1 consultations as well as refined meal plans with dietary restrictions. 
                        As well as this, non members have access to our calorie deficit calculator and our meal inspirations.
                    </p>
                </div>
            </div>
        </div>
    </>
);
}