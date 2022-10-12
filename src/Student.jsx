import React from 'react'
import { studentData } from './Data.js';

function Student(props) {
  return (
    <div>
      {studentData.map(function (student, index) {
          props.setStudent(student)
          index = index++
        return(
        <div>
              <h2>{props.student.name}</h2>
              <p>{props.student.bio}</p>  
        </div>
        )
      })}
    </div>
  )
}

export default Student