import React from 'react'
import Loader from 'react-loader-spinner'

function LoaderSpinner() {
  return (
    <Loader 
      type="Circles" 
      color="#FFF" 
      height={80} 
      width={80}
      // timeout={30000}
    />
  )
}

export default LoaderSpinner