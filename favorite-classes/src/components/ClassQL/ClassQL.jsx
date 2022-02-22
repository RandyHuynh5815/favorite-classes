import React, {useState, useEffect} from 'react'
import "./ClassQL.css"

export default function Class(props) {
    const [classInfo, setClassInfo] = useState({});

    const url = "https://api.peterportal.org/graphql";

    useEffect(() => {
        const fetchData = async () => {
            const query = `
                query {
                    course(id:"${props.name}") {
                        title
                        department_name
                        description
                    }
                }
            `
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name])

    let info;
    if (classInfo) {
        info = <div className='classql'>
                <h2>{props.name}</h2>
                <h2>{classInfo.title}</h2>
                <p>{classInfo.department_name}</p>
                <p>{classInfo.description}</p>
            </div>
    } else if (classInfo == null) {
        info = <div className='classql'>
        <h2>{props.name}</h2>  
        <h2>Class Not Found</h2>
        </div>
    } else {
        info = <div className='classql'>
        <h2>Loading...</h2>
        </div>
    }
    return (
        <div>
        {info}
        </div>
    )
}
