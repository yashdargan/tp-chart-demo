import { useState } from 'react'
import Charts from './components/Charts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
<Charts />
    </div>
  )
}

export default App
