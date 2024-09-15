import { useState } from "react"
import "./App.css"
import CartItem from "./components/CartItem/CartItem"
import CartTotal from "./components/CartTotal/CartTotal"

function App() {
  //підняття стейту
  // він робить компонент який був state => stateless
  const [quantity, setQuantity] = useState(1)
  return (
    <div>
      <CartItem quantity={quantity} setQuantity={setQuantity} />
      <CartTotal totalPrice={(7.99 * quantity).toFixed(2)} />
    </div>
  )
}

export default App
