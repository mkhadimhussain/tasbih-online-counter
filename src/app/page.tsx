'use client'

import { useState } from "react"

export default function Home() {
  const [ count, setCount] = useState(0)

  function handleInc() {
    setCount( count + 1)
  }

  function handleDec() {
    setCount( count - 1)
  }

  function handleReset() {
    setCount( count * 0)
  }


  return (
    <main 
    className="h-screen bg-[url('/images/bg-img.jpg')] bg-cover bg-center flex items-center justify-center">

      <div className="text-center">
        <h1
        className="text-4xl font-semibold shadow-lg mt-10 mb-10">TASBIH ONLINE COUNTER</h1>

        <h2
        className="text-9xl font-bold mb-3">{count}</h2>

      
        <div className="flex gap-3 justify-center">
          <button
          className="bg-red-600 hover:bg-gray-600 py-3 px-6 text-white text-4xl rounded-l-full shadow-lg"
          onClick={handleDec}
          >-</button>

          <button type="reset"
          className="bg-cyan-600 hover:bg-gray-600 py-3 px-6 text-white text-4xl shadow-lg"
          onClick={handleReset}
          >Reset</button>

          <button
          className="bg-green-600 hover:bg-gray-600 py-3 px-5 text-white text-4xl rounded-r-full shadow-lg"
          onClick={handleInc}
          >+</button>
        </div>

      </div>
      

      
    </main>
  )
}