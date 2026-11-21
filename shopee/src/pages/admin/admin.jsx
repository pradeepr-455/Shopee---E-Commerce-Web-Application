import { useState } from "react";
import { useProducts } from "../../context/productContext";
import './admin.css'
import { Link } from "react-router-dom";

function Admin() {
    const { products, addProduct, deleteProduct } = useProducts();
    const [product, setProduct] = useState({
        title: "",
        discription: "",
        price: "",
        img: ""
    });

    function handleChange(e) {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    function handleAddProduct(e) {
        e.preventDefault();

        addProduct({
            ...product,
            price: Number(product.price)
        });

        setProduct({
            title: "",
            discription: "",
            price: "",
            img: ""
        });
    }

    return (
        <div className="admin-container">
            <div className="title">
                <h1>ADMIN PORTAL</h1>
                <Link to={"/home"} className="link-tag"><p>Back to Home</p></Link>
                <hr></hr>
            </div>

            <h2>Add New Product</h2>

            <form className="new-product" onSubmit={handleAddProduct}>
                <input name="title" placeholder="Product Name" value={product.title} onChange={handleChange} required/>
                <input name="discription" placeholder="Product Description" value={product.discription} onChange={handleChange} required/>
                <input name="price" type="number" placeholder="Product Price" value={product.price} onChange={handleChange} min="1" required/>
                <input name="img" placeholder="Image path or URL" value={product.img} onChange={handleChange} required/>
                <button type="submit">Add Product</button>
            </form>

            <h2>Manage Products</h2>

            {products.map((item) => (
                <div className="products">
                    <div className="admin-product" key={item.id}>
                        <img src={item.img} alt={item.title} width="150"/>

                        <div className="product-details">
                            <p>{item.title}</p>
                            <p>{item.discription}</p>
                            <p>₹{item.price}</p>
                        </div>
                        <div className="product-button">
                            <button onClick={() => deleteProduct(item.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Admin;