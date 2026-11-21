import { Link,Navigate, useNavigate } from "react-router-dom";
import { useCart } from "./cartContext";
import './cart.css'

function Cart() {
  const { cart, removeFromCart, grandTotal } = useCart();
  console.log("Cart products:", cart);
  console.log("Cart length:", cart.length);

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/checkout", { state: { cart } });
  };

  return (
    <div className="cart-page">
      <h1>My Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty!</p>
          <Link to="/home">Continue Shopping</Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.title} width="120"/>

              <div>
                <h3>{item.title}</h3>
                <p>{item.discription}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹ {Number(item.price) * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Grand Total: ₹{grandTotal}</h2>
            <button onClick={handleClick}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;