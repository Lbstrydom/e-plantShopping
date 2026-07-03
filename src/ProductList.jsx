import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from './CartSlice.jsx'
import CartItem from './CartItem.jsx'
import './ProductList.css'

const plantsArray = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        name: 'Snake Plant',
        image:
          'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        description: 'Produces oxygen at night, improving air quality.',
        cost: '$15',
      },
      {
        name: 'Spider Plant',
        image:
          'https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg',
        description: 'Filters formaldehyde and xylene from the air.',
        cost: '$12',
      },
      {
        name: 'Peace Lily',
        image:
          'https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg',
        description: 'Removes mold spores and purifies the air.',
        cost: '$18',
      },
      {
        name: 'Boston Fern',
        image:
          'https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114241_1280.jpg',
        description: 'Adds humidity to the air and removes toxins.',
        cost: '$20',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        name: 'Lavender',
        image:
          'https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1200&auto=format&fit=crop',
        description: 'Calming scent, used in aromatherapy.',
        cost: '$20',
      },
      {
        name: 'Jasmine',
        image:
          'https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1200&auto=format&fit=crop',
        description: 'Sweet fragrance, promotes relaxation.',
        cost: '$18',
      },
      {
        name: 'Rosemary',
        image:
          'https://cdn.pixabay.com/photo/2019/10/11/07/28/rosemary-4541241_1280.jpg',
        description: 'Invigorating scent, often used in cooking.',
        cost: '$15',
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        name: 'Aloe Vera',
        image:
          'https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg',
        description: 'Soothes skin and heals minor wounds.',
        cost: '$14',
      },
      {
        name: 'Echinacea',
        image:
          'https://cdn.pixabay.com/photo/2014/07/08/14/26/echinacea-386993_1280.jpg',
        description: 'Boosts immune system and reduces inflammation.',
        cost: '$16',
      },
      {
        name: 'Chamomile',
        image:
          'https://cdn.pixabay.com/photo/2016/07/13/17/58/chamomile-1514827_1280.jpg',
        description: 'Soothes anxiety and promotes better sleep.',
        cost: '$15',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        name: 'ZZ Plant',
        image:
          'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=1200&auto=format&fit=crop',
        description: 'Thrives in low light and requires minimal watering.',
        cost: '$25',
      },
      {
        name: 'Pothos',
        image:
          'https://cdn.pixabay.com/photo/2018/07/11/06/47/pothos-3530413_1280.jpg',
        description: 'Tolerant of neglect and low light conditions.',
        cost: '$10',
      },
      {
        name: 'Succulent',
        image:
          'https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg',
        description: 'Stores water in leaves, needs little care.',
        cost: '$18',
      },
    ],
  },
]

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false)
  const [addedToCart, setAddedToCart] = useState({})
  const dispatch = useDispatch()

  // total number of items across all plant types in the cart
  const totalQuantity = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  )

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant))
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }))
  }

  const handleCartClick = (e) => {
    e.preventDefault()
    setShowCart(true)
  }

  const handleContinueShopping = () => {
    setShowCart(false)
  }

  const handleHomeClick = (e) => {
    e.preventDefault()
    setShowCart(false)
    if (onHomeClick) onHomeClick()
  }

  return (
    <div>
      <header className="navbar">
        <div className="navbar-brand" onClick={handleHomeClick}>
          <img
            className="navbar-logo"
            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
            alt="Paradise Nursery logo"
          />
          <div className="navbar-title">
            <h3>Paradise Nursery</h3>
            <em>Where Green Meets Serenity</em>
          </div>
        </div>
        <div className="navbar-links">
          <a href="#" onClick={handleHomeClick}>
            Home
          </a>
          {showCart ? (
            <a href="#" onClick={handleContinueShopping}>
              Plants
            </a>
          ) : (
            <a href="#" onClick={(e) => e.preventDefault()} className="active">
              Plants
            </a>
          )}
          <a href="#" onClick={handleCartClick} className="cart-link" aria-label="Cart">
            <svg
              className="cart-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              width="32"
              height="32"
            >
              <rect width="256" height="256" fill="none" />
              <circle cx="80" cy="216" r="12" />
              <circle cx="184" cy="216" r="12" />
              <path
                d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L39.6,32.5A8,8,0,0,0,31.9,26.7H16"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
            <span className="cart-count">{totalQuantity}</span>
          </a>
        </div>
      </header>

      {!showCart ? (
        <div className="product-grid-wrapper">
          {plantsArray.map((categoryObj, catIndex) => (
            <div key={catIndex} className="category-section">
              <h2 className="category-heading">{categoryObj.category}</h2>
              <div className="product-grid">
                {categoryObj.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                    />
                    <div className="product-info">
                      <h3 className="product-title">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">{plant.cost}</p>
                      <button
                        className={`product-button ${
                          addedToCart[plant.name] ? 'added' : ''
                        }`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  )
}

export default ProductList
