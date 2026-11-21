import { createContext, useContext, useState } from "react";

const ProductContext = createContext();

const initialProducts = [
        {id:1,img:"./images/formal shoe1.jpg",title:"Bata",discription:"Men PU Formal Derbys",price:"499"},
        {id:2,img:"./images/dress1.jpg",title:"Western wear",discription:"Women Embroidered Shirt Midi Dress",price:"599"},
        {id:3,img:"./images/pant.jpg",title:"WROGN",discription:"Men Straight Fit Light Fade Stretchable Jeans",price:"899"},
        {id:4,img:"./images/shirt.jpg",title:"HIGHLANDER",discription:"Men Solid Casual Shirt",price:"463"},
        {id:5,img:"./images/stand1.jpg",title:"KHALINI",discription:"Girls Digital Peacock Printed Shirt Collar Ready to Wear Lehenga & Blouse",price:"799"},
        {id:6,img:"./images/stand2.jpg",title:"KHALINI",discription:"Women Ethnic Motifs Embroidered Thread Work Indie Prints Kurta",price:"570"},
        {id:7,img:"./images/watch2.jpg",title:"TIMEX",discription:"Round 39mm Blue Dial Analog Men Watch - TW0TG6515",price:"999"},
        {id:8,img:"./images/dress.jpg",title:"Rimeline",discription:"Printed Pure Cotton Maxi Flared Skirts",price:"570"}
    ]

export function ProductProvider({ children }) {
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("products");

        return savedProducts
            ? JSON.parse(savedProducts)
            : initialProducts;
    });

    function addProduct(product) {
        const newProduct = {
            ...product,
            id: Date.now()
        };

        setProducts((previousProducts) => {
            const updatedProducts = [
                ...previousProducts,
                newProduct
            ];

            localStorage.setItem(
                "products",
                JSON.stringify(updatedProducts)
            );

            return updatedProducts;
        });
    }

    function deleteProduct(id) {
        setProducts((previousProducts) => {
            const updatedProducts = previousProducts.filter(
                (product) => product.id !== id
            );

            localStorage.setItem(
                "products",
                JSON.stringify(updatedProducts)
            );

            return updatedProducts;
        });
    }

    return (
        <ProductContext.Provider value={{ products, addProduct, deleteProduct }}>{children}</ProductContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductContext);
}