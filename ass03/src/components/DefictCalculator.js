import { useState } from "react"
import "../calculator.css";

export default function DefictCalculator() {
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState("18");
    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(0);
    const [answer, setAnswer] = useState(0);

    function calculateDeficit(e) {
        e.preventDefault();
        
        if(gender == "male") {
            setAnswer(10*weight+6.25*height-5*age+5);
        }else{
            setAnswer(10*weight+6.25*height-5*age-161);
        }
    }

    return (
        <div className="p-5 deficitCalculator">
            <h1>Calorie Deficit Calculator</h1>
            <form>
                <label className="m-1">Gender:  </label>
                <span onChange={(e) => setGender(e.target.value)}>
                    <input type="radio" className="mr-1" checked value="Male" name="gender" /> <label>Male</label>
                    <input type="radio" value="Female" name="gender" /> <label>Female</label>
                </span><br></br>
                <label className="m-1 mt-4">Age: </label>
                <input type="number" required min="0" max="120" value={age} onChange={(e) => setAge(e.target.value)}></input><br></br>
                <label className="m-1 mt-4">Height(cm): </label>
                <input type="number" required min="0" max="300" value={height} onChange={(e) => setHeight(e.target.value)}></input><br></br>
                <label className="m-1 mt-4 mb-4">Weight(kg): </label>
                <input type="number" required min="50" max="150" value={weight} onChange={(e) => setWeight(e.target.value)}></input><br></br>
                <button onClick={calculateDeficit}>Calculate</button>
                <p className="mt-5 answer">The amount of calories you need to be in deficit is {answer} calories</p>
            </form>
        </div>
    )
}