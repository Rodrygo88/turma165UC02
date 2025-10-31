import { useState } from 'react'
import CalculadoraPage from './Pages/CalculadoraPage/CalculadoraPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalculadoraPage />
    </>
  )
}

export default App
