import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './checkout.css'

function Checkout() {
    const location = useLocation();
    const navigate = useNavigate()

    const product = location.state?.product;
const cartItems = location.state?.cart || [];

const itemsToCheckout = product ? [product] : cartItems;

const totalAmount = itemsToCheckout.reduce(
    (total, item) => total + Number(item.price) * (item.quantity || 1),
    0
); 

    const [address, setAddress] = useState({
        name: "",
        mobile: "",
        pincode: "",
        city: "",
        street: ""
    });

    const [confirmed, setConfirmed] = useState(false);

    if (itemsToCheckout.length === 0) {
        return (
            <div>
                <h2>No product selected</h2>
                <button onClick={() => navigate("/home")}>Continue Shopping</button>
            </div>
        );
    }

    const handleChange = (e) => {
        setAddress({
            ...address,
            [e.target.name]: e.target.value
        });
    };

    const handleConfirm = (e) => {
    e.preventDefault();

    const newOrder = {
    orderId: Date.now(),
    product: itemsToCheckout[0],
    products: itemsToCheckout,
    totalAmount: totalAmount,
    deliveryAddress: address,
    orderDate: new Date().toLocaleString(),
    status: "Confirmed"
};

    const existingOrders = JSON.parse(
        localStorage.getItem("myOrders") || "[]"
    );

    const updatedOrders = [...existingOrders, newOrder];

    localStorage.setItem(
        "myOrders",
        JSON.stringify(updatedOrders)
    );

    setConfirmed(true);
};

    if (confirmed) {
        return (
            <div className="order-success">
                <h2>Order Confirmed!</h2>
                <p>Thank you, {address.name}.</p>
                <p>Your order has been placed successfully!</p>

                {itemsToCheckout.map((item) => (
                    <p key={item.id}>{item.title} × {item.quantity || 1}</p>
                ))}

                <p>Total: ₹{totalAmount}</p>

                <button onClick={() => navigate("/home")}>Continue Shopping</button>
            </div>
        );
    }

    return (
        <div className="checkout-container">
            <h2>Delivery Details</h2>

            <div className="checkout-product">
    {itemsToCheckout.map((item) => (
        <div key={item.id} className="checkout-item">
            <img src={item.img} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity || 1}</p>
            <p>Subtotal: ₹ {Number(item.price) * (item.quantity || 1)}</p>
        </div>
    ))}
</div>

            <form onSubmit={handleConfirm}>
                <input name="name" placeholder="Recipient Name" value={address.name} onChange={handleChange} required/>
                <input name="mobile" type="tel" placeholder="Mobile Number" value={address.mobile} onChange={handleChange} pattern="[0-9]{10}" maxLength="10" required/>
                <input name="pincode" placeholder="Pincode" value={address.pincode} onChange={handleChange} pattern="[0-9]{6}" maxLength="6" required/>
                <input name="city" placeholder="City" value={address.city} onChange={handleChange} required/>
                <textarea name="street" placeholder="House number, street, area" value={address.street} onChange={handleChange} required/>

                <h3>Grand Total: ₹{totalAmount}</h3>

                <button type="submit">Confirm Order</button>
            </form>
        </div>
    );
}

export default Checkout;