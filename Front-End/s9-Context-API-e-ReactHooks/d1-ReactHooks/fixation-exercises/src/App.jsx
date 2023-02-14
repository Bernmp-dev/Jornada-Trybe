import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [city, setCity] = useState('')
  const [module, setModule] = useState('')

  return (
    <div className="App">
      <form>
         <input
          type="text"
          placeholder='Nome Completo'
          value={ name }
          onChange={({target}) => setName(target.value)}
         />

         <input
          type="number"
          placeholder='Idade'
          value={ age }
          onChange={({target}) => setAge(target.value)}
         />

         <input
          type="text"
          placeholder='Cidade'
          value={ city }
          onChange={({target}) => setCity(target.value)}
         />

         <div className='radio'>
           <label htmlFor="module1" >Fundamentos
             <input
              type="radio"
              name="module"
              id="module1"
              value="Fundamentos"
              checked={module === "Fundamentos"}
              onChange={({target}) => setModule(target.value)}
             />
           </label>

           <label htmlFor="module2" >Front-End
             <input
              type="radio"
              name="module"
              id="module2"
              value="Front-End"
              checked={module === "Front-End"}
              onChange={({target}) => setModule(target.value)}
             />
           </label>

           <label htmlFor="module3" >Back-End
             <input
              type="radio"
              name="module"
              id="module3"
              value="Back-End"
              checked={module === "Back-End"}
              onChange={({target}) => setModule(target.value)}
             />
           </label>
          </div>

          <button 
            type="submit"
            onClick={(event) => {event.preventDefault()}}
          >Enviar
          </button>
      </form>
      
    </div>
  )
}

export default App
