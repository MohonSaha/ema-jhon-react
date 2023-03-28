import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];

        // Step:1 Get id
        for (const id in storedCart) {
            //Step:2 Get the product by using id.
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                // Step:3 Get the quantity of the product.
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //Step:4 add the addedProduct to the savedCart.
                savedCart.push(addedProduct);
            }
        }
        // Step:5 Set the cart.
        setCart(savedCart);


    }, [products])

    const addToCart = (product) => {
        // console.log(product);
        // const newCart = [...cart, product];

        //if product does not exist in the cart, then set quantity = 1;
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }

        //If exist update quantity by 1.


        setCart(newCart);
        addToDb(product.id)
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.slice(0, 10).map(product => <Product
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;