const Student = (props) => {
  return (  
    <>
      <h3>{props.student.name}</h3>
      <h4>{props.student.bio}</h4>
    </>
  );
}

export default Student;