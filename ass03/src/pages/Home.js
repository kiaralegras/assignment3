import Navbar from "../components/Navbar";
import ImageWithText from "../components/ImageWithText";
import ImagesOnGrid from "../components/ImagesOnGrid";
import '../base.css';

export default function Home() {
    return (
    <>
        <head>
            <title>Home</title>
        </head>
        <body>
            <Navbar></Navbar>
            <ImageWithText></ImageWithText>
            <ImagesOnGrid></ImagesOnGrid>
        </body>
    </>
);
}