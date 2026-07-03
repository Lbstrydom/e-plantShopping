import { useState } from 'react'
import ProductList from './ProductList.jsx'
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
            <p>
              Welcome to Paradise Nursery, where green meets serenity! We are
              passionate about bringing a touch of nature into your home and
              workspace. Our carefully curated collection of premium houseplants
              is hand-selected to purify your air, brighten your rooms, and
              nurture your well-being. Whether you are a seasoned plant parent or
              just beginning your green journey, our aromatic, medicinal, and
              easy-care plants make it simple to build your own indoor paradise.
              Grow with us and let nature flourish in every corner of your life.
            </p>
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
