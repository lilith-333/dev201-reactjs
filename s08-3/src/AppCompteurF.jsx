import React from 'react'
import CompteurF from './CompteurF'
import { useState } from 'react'

export default function AppCompteurF() {
  const [isMonter,setIsMonter] = useState(true)

  return (
    <>
      <div style={{ background: "lightgray", padding: "20px" }}>
        <button disabled={isMonter}
          onClick={() => setIsMonter(true)}>
          Monter
        </button>

        <button disabled={!isMonter}
          onClick={() => setIsMonter(false)}>
          Demonter
        </button>

        {isMonter && <CompteurF />}
      </div>
    </>
  )
}

