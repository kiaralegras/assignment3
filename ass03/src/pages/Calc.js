import Navbar from "../components/Navbar";
import ImageWithText from "../components/ImageWithText";
import ImagesOnGrid from "../components/ImagesOnGrid";
import '../base.css';
import DefictCalculator from "../components/DefictCalculator";

export default function Calc() {
    return (
    <>
        <title>Meal Inspiration Calculator</title>
        <Navbar></Navbar>
        <DefictCalculator></DefictCalculator>
    </>
);
}