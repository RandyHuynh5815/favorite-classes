import React, {useState, useEffect} from 'react'
import "./Class.css"

export default function Class(props) {
  const [classInfo, setClassInfo] = useState({});

  const url = "https://api.peterportal.org/rest/v0/courses/";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url + props.name);
      const data = await response.json();
      setClassInfo(data);
    }
    fetchData();
  }, [props.name])

  let info;
  if (classInfo.id) {
    info = <div className='class'>
            <h2>{props.name}</h2>
            <h2>{classInfo.title}</h2>
            <p>{classInfo.department_name}</p>
            <p>{classInfo.description}</p>
          </div>
  } else if (classInfo.error) {
    info = <div className='class'>
      <h2>{props.name}</h2>  
      <h2>Class Not Found</h2>
    </div>
  } else {
    info = <div className='class'>
      <h2>Loading...</h2>
    </div>
  }
  return (
    <div>
      {info}
    </div>
  )
}
