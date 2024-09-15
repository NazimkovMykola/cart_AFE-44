import image from "../../assets/images/Screenshot_1.png"
import "./CartItem.css"

const CartItem = ({ quantity, setQuantity }) => {
  return (
    <div className="cartItem">
      <img src={image} width={"50px"} height={"50px"} alt="Product" />
      <div className="cartItem__text">
        <h2>Celtic Sea Salt (Fine & Dry)</h2>
        <span>£7.99</span>
        <span>Size: 200g</span>
      </div>
      <div>
        <button
          disabled={quantity === 1}
          className="cartItem__quantityButton"
          onClick={() => {
            setQuantity(quantity - 1)
          }}
        >
          -
        </button>
        <span className="cartItem__quantity">{quantity}</span>
        <button
          className="cartItem__quantityButton"
          onClick={() => {
            setQuantity(quantity + 1)
          }}
        >
          +
        </button>
      </div>
      <span className="cartItem__totalPrice">£{(7.99 * quantity).toFixed(2)}</span>
    </div>
  )
}
export default CartItem
