import './App.css'
import { PetInfo } from './components/PetInfo'

function App() {
  return <div className="App">
    <PetInfo petName={'Cat'} years={5}/>
    <PetInfo petName={'Dog'} years={2}/>

  </div>
}

export default App
