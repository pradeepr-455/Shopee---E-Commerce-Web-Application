import { useState, useEffect } from "react";
import "./order.css";

function MyOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(
            localStorage.getItem("myOrders") || "[]"
        );

        setOrders(savedOrders);
    }, []);

    return (
        <div className="my-orders">
            <h1>My Orders</h1>

            {orders.length === 0 ? (
                <p>You have no orders yet.</p>
            ) : (
                orders.map((order) => (
                    <div className="order-card" key={order.orderId}>
                        <div className="order-header">
                            <h3>Order ID: {order.orderId}</h3>
                            <span>{order.status}</span>
                        </div>
                        <p>Order Date: {order.orderDate}</p>
                        <div className="order-product">
                            <img src={order.product.img} alt={order.product.title} width="120"/>
                            <div>
                                <h3>{order.product.title}</h3>
                                <p>{order.product.discription}</p>
                                <p>Price: ₹{order.product.price}</p>
                            </div>
                        </div>

                        <div className="delivery-details">
                            <h3>Delivery Details</h3>
                            <p>Name: {order.deliveryAddress.name}</p>
                            <p>Mobile: {order.deliveryAddress.mobile}</p>
                            <p>Address: {order.deliveryAddress.street}</p>
                            <p>City: {order.deliveryAddress.city}</p>
                            <p>Pincode: {order.deliveryAddress.pincode}</p>
                        </div>
                        <h3>Total: ₹{order.product.price}</h3>
                    </div>
                ))
            )}
        </div>
    );
}

export default MyOrders;