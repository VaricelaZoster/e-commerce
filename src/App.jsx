import React from 'react'
import Navigation from './customer/components/Navigation/Navigation'
import HomePage from './customer/pages/Homepage/HomePage'

const App = () => {
  return (
    <div>
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  )
}

export default App