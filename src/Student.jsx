import Score from "./Score";

const Student = (props) => {
  return (  
    <>
      <h2>{props.student.name}</h2>
      <h3>{props.student.bio}</h3>
      {props.student.scores.map(score => <Score key={score} score={score} scoreDate={props.student.date}/>)}
    </>
  );
}

export default Student;