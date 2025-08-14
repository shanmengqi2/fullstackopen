import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.count === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={props.good} />
          <StatisticLine text='neutral' value={props.neutral} />
          <StatisticLine text='bad' value={props.bad} />
          <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
          <StatisticLine text='average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <StatisticLine text='positive' value={(props.good / (props.good + props.neutral + props.bad)) * 100} />
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [count, setCount] = useState(0)

  const setFeedback = (feedback) => {
    if (feedback === 'good') {
      setGood(good + 1)
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1)
    } else if (feedback === 'bad') {
      setBad(bad + 1)
    }
    setCount(count + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <Button text='good' onClick={() => setFeedback('good')} />
        <Button text='neutral' onClick={() => setFeedback('neutral')} />
        <Button text='bad' onClick={() => setFeedback('bad')} />
      </div>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} count={count} />
    </div>
  )
}

export default App