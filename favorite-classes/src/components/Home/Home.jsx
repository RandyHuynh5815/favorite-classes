import { useState } from "react";
import React from 'react'
import Class from "../Class/Class";
import "./Home.css"

export default function Home() {

    const [value, setValue] = useState("");
    const [classes, setClasses] = useState([]);
    const [classNum, setClassNum] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!classes.includes(value)) {
            setClasses(classes.concat({"name": value, "classNum": classNum}));
            setClassNum(classNum+1);
            setValue("");
        }
    }
    console.log(classes);

    return (
        <div className="home">
            <h1>Welcome!</h1>
            <form onSubmit={handleSubmit}>
                <label>Add your favorite class</label>
                <input type="text" onChange={handleChange} value={value}></input>
                <button type="submit">Add Class</button>
            </form>
            <div className="courseList">
                {classes.map((favclass) => <Class key={favclass.classNum} num={favclass.classNum} name={favclass.name}/>)}
            </div>
        </div>
    )
}