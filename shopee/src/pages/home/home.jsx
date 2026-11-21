import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import{FaUser,FaShoppingCart,FaGift,FaBoxOpen,FaTshirt,FaLaptop,FaFootballBall,FaMobile,FaInstagram,FaFacebook,FaYoutube,FaLinkedin,FaGithub} from 'react-icons/fa';
import './home.css';
import { useCart } from "../cart/cartContext";
import { useProducts } from "../../context/productContext";

function Home(){
    let navigate = useNavigate()

    const {products} = useProducts()

    let databaseCard = [
        {img:"./images/casual shoe1.jpg",offer:"Flat 50% OFF",details:"On selected Formal shoes",valid:"Limited offer"},
        {img:"./images/handbag.jpg",offer:"Flat 30% OFF",details:"New Arrivals",valid:"Limited offer"},
        {img:"./images/watch.jpg",offer:"Flat 50% OFF",details:"Casual wear",valid:"Limited offer"},
        {img:"./images/laptop.jpg",offer:"Flat 20% OFF",details:"Latest version",valid:"Limited offer"},
        {img:"./images/mobile.jpg",offer:"Flat 30% OFF",details:"Coming soon",valid:"Limited offer"}
    ]

    function SliderTemplate(props){
        return(
            <div className="offer-card">
                <div className="offer-list">
                    <img src={props.img}/>
                    <div className="offer-text">
                        <h2>{props.offer}</h2>
                        <p>{props.details}</p>
                        <span>{props.valid}</span>    
                    </div>
                </div>
            </div>   
        )
    }
    function ProductTemplate(props){
        const { addToCart } = useCart();
        const handleBuyNow = () => {
        const product = {
            id: props.id,
            img: props.img,
            title: props.title,
            discription: props.discription,
            price: props.price
        };

        navigate("/checkout", {
            state: { product }
        });
    };


        const handleAddToCart = () => {
        const product = {
            id: props.id,
            img: props.img,
            title: props.title,
            discription: props.discription,
            price: props.price
        };

        addToCart(product)
        console.log("Success message triggered");
    };
        return(
            <div className="product-container">
                <img src={props.img} alt="Image not found"></img>
                <div className="product-details">
                    <p className="product-title">{props.title}</p>
                    <p>{props.discription}</p>
                    <p>&#8377;{props.price}</p>
                </div>
                <div className="product-button">
                    <button onClick={handleBuyNow}>Buy Now</button>
                    <button onClick={handleAddToCart}>Add to cart</button>
                </div>
            </div>
        )
    }
    return(
        <div>
            <main>
                <div className="main-container">
                    <div>
                        <div className="block-img">
                            <img src="./images/shopee.png" alt="logo" width="100px" height="100px" title="shopee"/>
                        </div>
                    </div><br/>
                    <div className="search">
                        <div className="search-row">
                            <input placeholder="Search for Product, Brands and More"/>
                        </div>
                        <div id="log" className="search-row">
                            <Link className="search-link" to={"/login"}><FaUser className="user"/><span>Login</span></Link>
                        </div>
                        <div id="cart" className="search-row">
                            <Link to={"/cart"} className="search-link"><FaShoppingCart className="shoping"/><span>Cart</span></Link>
                        </div>
                        <div id="order" className="search-row">
                            <Link to={"/order"} className="search-link"><FaGift className="gift"/><span>Order</span></Link>
                        </div>
                    </div>
                    <hr/>

                    <div className="catagory">
                        <div className="catagory-row">
                            <a href="#show-product" id="you"><FaBoxOpen className="box"/><span>For You</span></a>
                        </div>
                        <div className="catagory-row">
                            <a href="#show-product" id="you"><FaTshirt className="shirt"/><span>Fashion</span></a>
                        </div>
                        <div className="catagory-row">
                            <a href="#show-product" id="you"><FaMobile className="mbl"/><span>Mobile</span></a>
                        </div>
                        <div className="catagory-row">
                            <a href="#show-product" id="you"><FaLaptop className="lap"/><span>Electronics</span></a>
                        </div>
                        <div className="catagory-row">
                            <a href="#show-product" id="you"><FaFootballBall className="ball"/><span>Sports</span></a>
                        </div>
                    </div>
                    <hr/>

                    <div className="slider">
                        <div className="slider-track">
                            <img src="./images/poster.jpg" alt="Flat 50% OFF"/>
                            <img src="./images/poster1.jpg" alt="New Arrivals"/>
                            <img src="./images/poster2.jpg" alt="Festival Sales"/>

                            <img src="./images/poster.jpg" alt="Flat 50% OFF"/>
                            <img src="./images/poster1.jpg" alt="New Arrivals"/>
                            <img src="./images/poster2.jpg" alt="Festival Sales"/>
                        </div>
                    </div>
                    <div className="card-container">
                        {databaseCard.map((value,index)=>{
                            return(
                                <SliderTemplate img={value.img} offer={value.offer} details={value.details} valid={value.valid}/>
                            )
                        })}
                    </div>
                    <section id="show-product">
                    <div className="show-container">
                        {products.map((value)=>{
                            return(
                                <ProductTemplate key={value.id} id={value.id} img={value.img} title={value.title} discription={value.discription} price={value.price}/>
                            )
                        })}
                    </div>
                    </section>


                    <div className="footer-container">
                        <div className="footer-card">
                            <div className="footer-card-row">
                                <div className="row-level">
                                    <h3>Shop Non-Stop in Shopee</h3>
                                    <p>Welcome to Shopee — Find It. Love It. Buy It.

We believe shopping should be simple, enjoyable, and accessible to everyone. Our goal is to bring your favorite products together in one place, helping you discover great styles, explore new trends, and enjoy a smooth shopping experience.

From everyday essentials to the latest trends, we're here to make every shopping experience special.</p>
                                </div>
                            </div>
                            <div className="footer-card-row">
                                    <h3>Reach out to me</h3>
                                    <div className="card-row-icon">
                                        
                                        <FaLinkedin className="icons"/>
                                        <FaGithub className="icons"/>  
                                        <FaInstagram className="icons"/>
                                        <FaFacebook className="icons"/>
                                        <FaYoutube className="icons"/>
                                        
                                    </div>
                            </div>
                            <div className="footer-card-row">
                                <div className="row-level">
                                    <h3>Contact me</h3>
                                    <p>Pradeep R</p>
                                    <p>Python Full Stack Developer</p>
                                    <p>455adeep@gmail.com</p>
                                    <p>+91 7868836124</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-cards">
                            <div className="footer-cards-row">
                                <h4>More About me</h4>
                                <p>Hi! I'm a passionate Python Full Stack Developer skilled in Python, Django, HTML, CSS, JavaScript, and SQL. I enjoy building responsive websites, user-friendly web applications, and database-driven systems. I am currently expanding my knowledge of Django and REST API development.
                                    I focus on writing clean code, solving problems, and delivering quality work that meets clients' needs. I am eager to collaborate with clients, learn new technologies, and turn ideas into practical digital solutions.
                                    Let's work together to bring your ideas to life!</p>
                                <div className="cards-row">
                                    <h4>Check my Profiles at</h4>
                                    <FaLinkedin className="icons"/>
                                    <span><a href="https://www.linkedin.com/in/pradeep-r-40b178404" target="_blank">linkedin.com/in/pradeep-r-40b178404</a></span>
                                    <FaGithub className="icons"/>
                                    <span><a href="https://www.github.com/pradeepr-455" target="_blank">github.com/pradeepr-455</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home;