import React from 'react'
import "./Class.css"

export default function Class(props) {
  return (
    <div className='class'>
        <h2>{props.name}</h2>
        <p>Class {props.num}</p>
    </div>
  )
}
