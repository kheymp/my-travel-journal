import { useState } from 'react'
import Header from './Components/Header.jsx'
import Entry from './Components/Entry.jsx' 
import locationData from './data.js'

function App() {
  const [count, setCount] = useState(0)

  const locationElements = locationData.map((entry) => <Entry {...entry} />)

  return (
    <>

      <Header />
      {locationElements}
    </>
  )
}

export default App
