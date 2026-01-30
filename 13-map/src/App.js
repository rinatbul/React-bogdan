import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Counter } from './components/Counter'

const texts = [
  'Click Me',
  'Click again',
  'Click one more time',
  'Click',
  'Press me',
]

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button text={text} onClick={incrementCount} key={index} />
      })}
    </div>
  )
}

export default App
