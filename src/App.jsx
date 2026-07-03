import { useState } from 'react'
import ProductList from './ProductList.jsx'
import AboutUs from './AboutUs.jsx'
import './App.css'

function App() {
  const [showProductList, setShowProductList] = useState(false)

  const handleGetStartedClick = () => {
    setShowProductList(true)
  }

  return (
    <div className="app-container">
      <div
        className={`landing-page ${showProductList ? 'fade-out' : ''}`}
      >
        <div className="background-image"></div>
        <div className="content">
          <div className="landing-content">
            <h1>Paradise Nursery</h1>
            <div className="divider"></div>
            <AboutUs />
            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div
        className={`product-list-container ${showProductList ? 'visible' : ''}`}
      >
        <ProductList onHomeClick={() => setShowProductList(false)} />
      </div>
    </div>
  )
}

export default App
