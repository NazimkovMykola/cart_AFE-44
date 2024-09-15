import "./CartTotal.css"
const CartTotal = ({ totalPrice }) => {
  return (
    <div className="cartTotal">
      <div>Ціна товару £{totalPrice}</div>
      <div>Доставка: £10.00</div>
      <div>Ітого: {(Number(totalPrice) + 10).toFixed(2)}</div>
    </div>
  )
}

export default CartTotal
