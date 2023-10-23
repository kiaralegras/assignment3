import Navbar from "../components/Navbar";
import ImageWithText from "../components/ImageWithText";
import ImagesOnGrid from "../components/ImagesOnGrid";
import '../base.css';
import '../contact.css';

export default function Contact() {
    //simple alert to say submission successful
    function onSubmitHandler() {
        alert("Submission successful");
    }

    return (
    <>
        <title>Contact</title>
        <Navbar></Navbar>
        <div className="mx-4">
            <h1>Get in Touch</h1>
            <p>Contact us regarding any questions or queries you may have. We look forward to hearing from you.</p>
            <form className="contactForm">
                <label>First name*</label>
                <input required placeholder="Olivia" className="specialInput mr-2"></input>
                <label>Last name</label>
                <input placeholder="Wilson" className="specialInput"></input><br></br>
                <label>Email address*</label>
                <input type="email" required placeholder="hello@reallygreatsite.com" className="specialInput emailInput"></input><br></br>
                <label>Messages*</label>
                <input required placeholder="Type your message here"  className="specialInput messagesInput"></input><br></br>
                <button type="submit" onClick={onSubmitHandler}>Submit</button>
            </form>
        </div>
    </>
);
}