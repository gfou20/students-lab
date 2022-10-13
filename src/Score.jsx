const Score = (props) => {
  return ( 
    <>
      <h4>
        {props.scoreDate}:{props.score}
      </h4>
    </>
  );
}

export default Score;