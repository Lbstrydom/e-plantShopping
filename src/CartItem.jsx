import { useDispatch, useSelector } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice.jsx'
import './CartItem.css'

function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  // strip the leading "$" and convert cost to a number
  const unitCost = (item) => parseFloat(item.cost.substring(1))

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    return cart
      .reduce((total, item) => total + unitCost(item) * item.quantity, 0)
      .toFixed(2)
  }

  // Total number of plants across all types in the cart
  const totalQuantity = () =>
    cart.reduce((total, item) => total + item.quantity, 0)

  const handleContinueShopping = (e) => {
    e.preventDefault()
    if (onContinueShopping) onContinueShopping()
  }

  const handleCheckoutShopping = () => {
    alert('Coming Soon! Thank you for shopping with Paradise Nursery.')
  }

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))
  }

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))
    } else {
      // dropping below 1 removes the item entirely
      dispatch(removeItem(item.name))
    }
  }

  const handleRemove = (item) => {
    dispatch(removeItem(item.name))
  }

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => (unitCost(item) * item.quantity).toFixed(2)

  return (
    <div className="cart-container">
      <h2 className="cart-total">
        Total Cart Amount: ${calculateTotalAmount()}
      </h2>
      <p className="cart-count-summary">
        Total plants in cart: {totalQuantity()}
      </p>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Start adding some plants!</p>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">Unit Price: {item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    -
                  </button>
                  <span className="cart-item-quantity-value">
                    {item.quantity}
                  </span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="continue-shopping-container">
        <button
          className="continue-shopping-btn"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <button
          className="checkout-btn"
          onClick={handleCheckoutShopping}
          disabled={cart.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default CartItem
