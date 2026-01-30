import { useState } from 'react'
import { generateRandomNum } from '../utils/generateRandomNum'

export const RandomNumber = ({max}) => {

  const [randomNum, setRandomNum] = useState(generateRandomNum(max))
  const generate = ()=>{
    setRandomNum(generateRandomNum(max))
  }

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={generate}>
        Generate new random number
      </button>
    </div>
  )
}
