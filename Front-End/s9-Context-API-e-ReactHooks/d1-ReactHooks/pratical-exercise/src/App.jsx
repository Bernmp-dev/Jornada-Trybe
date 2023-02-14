import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header>
      <h1>TrybeMail</h1>
      </header>
      <button type='button'>Marcar todos como lido</button>
      <button type='button'>Marcar todos como nao lido</button>
    </div>
  )
};

export default App
