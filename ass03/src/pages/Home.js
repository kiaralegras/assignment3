import Navbar from "../components/Navbar";
import ImageWithText from "../components/ImageWithText";
import ImagesOnGrid from "../components/ImagesOnGrid";
import '../base.css';

export default function Home() {
    return (
    <>
            <title>Home</title>
            <Navbar></Navbar>
            <ImageWithText></ImageWithText>
            <ImagesOnGrid></ImagesOnGrid>
    </>
);
}