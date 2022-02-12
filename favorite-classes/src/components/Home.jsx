import { useState } from "react";
import React from 'react'

export default function Home() {

    const [value, setValue] = useState("");
    const [classes, setClasses] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!classes.includes(value)) {
            setClasses(classes.concat(value));
            setValue("");
        }
    }
    return (
        <div>
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <label>Add your favorite class</label>
                <input type="text" onChange={handleChange} value={value}></input>
                <button type="submit">Add Class</button>
            </form>
            <ul>
                {classes.map((favclass) => <li key={favclass}>{favclass}</li>)}
            </ul>
        </div>
    )
}