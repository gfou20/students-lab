import './App.css';
import Student from './Student';
import { useState } from 'react';

function App() {
  const [student, setStudent] = useState([])

  return (
    <>
      <h1>Student Data</h1>
      <Student student={student} setStudent={setStudent}/>
    </>
  )
}

export default App;
