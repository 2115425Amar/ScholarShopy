import React from 'react'
import "./Spinner.css"
import { ClockLoader } from 'react-spinners'
const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <ClockLoader />
    </div>
  )
}

export default Spinner

