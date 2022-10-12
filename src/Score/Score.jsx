const Score = (props) => {
  return (
    <div>
      <h3>{props.score.date}</h3>
      <h3>{props.score.score}</h3>
    </div>
  )
}
export default Score