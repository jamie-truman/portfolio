import React, { useState, useEffect } from 'react'
import Confetti from 'react-confetti'

function App() {
  const [isCelebrating, setIsCelebrating] = useState(false)

  useEffect(() => {
    setIsCelebrating(true)
    // Set a timeout to stop the celebration effect after 5 seconds
    setTimeout(() => {
      setIsCelebrating(false)
    }, 5000)
  }, [])

  return (
    <div className="App">
      {isCelebrating && <Confetti />}
      <div className="bg-silver border-2 border-black rounded-lg p-4 w-1/2 mx-auto my-5 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-center">
          Tailwinds is working!
        </h1>
      </div>
    </div>
  )
}

export default App
