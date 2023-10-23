import { useState } from "react"

export default function DefictCalculator() {
    const [gender, setGender] = useState("male");
    const [age, setAge] = useState("18");
    const [height, setHeight] = useState(150);
    const [weight, setWeight] = useState(0)

    function calculateDeficit() {
        return 
    }

    return (
        <>
            <h1>Calorie Defict Calculator</h1>
            <div onChange={(e) => setGender(e.target.value)}>
                <input type="radio" checked value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
            </div>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)}></input>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}></input>
            <input type="range" min="50" max="150" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
            <button onClick={calculateDeficit}>Calculate</button>
        </>
    )
}