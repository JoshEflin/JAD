import { createContext, useState } from "react";
import { QUERY_ITEMS } from "./queries";
import { ApolloProvider, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_ITEM, UPDATE_INVENTORY } from "./mutations";

export const CartContext = createContext({
    items: [],
    GetQuantity: () => { },
    CartQuantity: () => {},
    AddOnetoCart: () => { },
    RemoveOnefromCart: () => { },
    DeletefromCart: () => { },
    GetTotalCost: () => { },
});

export default function CartProvider({ children }) {
    const [getQuantity, { error }] = useMutation(GET_ITEM);
 const [cartProducts, setCartProducts] = useState([]);

    async function GetQuantity(name) {
        try {
        const quantity = await getQuantity({
            variables: { foodItem:  name  },
        });
        console.log(quantity);
        if (quantity === undefined) {
            return 0;
        }
        const stock = {stock: quantity.data.item.stock, price: quantity.data.item.price, description: quantity.data.item.description, photo: quantity.data.item.photo};
        return stock
        } catch (err) {
            console.error(err);
        }
    }
     function CartQuantity(name) {
        const quantity = cartProducts.find(product => product.foodItem === name)?.stock;
        
        if (quantity === undefined) {
            return 0;
        }
        return quantity;
    }

     function AddOnetoCart (name) {
        const quantity = GetQuantity(name)
        {quantity.then((data)=>{ 
            console.log({insidecart: data})
            const photo = data.photo;
            const desc = data.description;
            const price = data.price;
            const cart = CartQuantity(name);
             if (cart === 0) {
                 setCartProducts(
                [...cartProducts,
                {
                    foodItem: name,
                    price: price,
                    photo: photo,
                    stock: 1,
                    description: desc
                }]
            )   
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.foodItem === name  ? { ...product, price: price , stock: product.stock + 1 }
                            : product           
                )
            )
           
            }
        })}
        }

     function RemoveOnefromCart(name) {
        const quantity = CartQuantity(name);

        if (quantity === 1) {
            DeletefromCart(name);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.foodItem === name
                            ? { ...product, stock: product.stock - 1 }
                            : product
                )
            )
        }
    }

    function DeletefromCart(name) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.foodItem != name;
                })
        )
    }

    function GetTotalCost() {
        
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = CartQuantity(cartItem.foodItem);
            totalCost += (cartItem.price * cartItem.stock);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        GetQuantity,
        CartQuantity,
        AddOnetoCart,
        RemoveOnefromCart,
        DeletefromCart,
        GetTotalCost
    }


    return (
        <CartContext.Provider value={contextValue}>
            
            {children}
            
        </CartContext.Provider>

    )
}



