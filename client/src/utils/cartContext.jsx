import { createContext, useState } from "react";
import { QUERY_ITEMS } from "./queries";
import { ApolloProvider, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_ITEM, UPDATE_INVENTORY } from "./mutations";

export const CartContext = createContext({
    items: [],
    GetQuantity: () => { },
    AddOnetoCart: () => { },
    RemoveOnefromCart: () => { },
    DeletefromCart: () => { },
    GetTotalCost: () => { },
});

export default function CartProvider({ children }) {
    const [getQuantity, { error }] = useMutation(GET_ITEM);
 const [cartProducts, setCartProducts] = useState([]);

    async function GetQuantity(name) {
        
        // try {
        const data = await getQuantity({
            variables: { name:  'salt'  },
        });

        if (data === undefined) {
            return 0;
        }
        console.log(data);
        //     setCartProducts([data.stock]);
        return data.stock;
        // } catch (err) {
        //     console.error(err);
        // }
    }

    function AddOnetoCart(name) {
        const quantity = GetQuantity(name);

        if (quantity === 0) {
            setCartProducts(
                [...cartProducts,
                {
                    name: name,
                    stock: 1
                }]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.name === name ? { ...product, stock: product.stock + 1 }
                            : product
                )
            )
        }
    }

    function RemoveOnefromCart(name) {
        const quantity = GetQuantity(name);

        if (quantity == 1) {
            DeletefromCart(name);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.name === name
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
                    return currentProduct.name != name;
                })
        )
    }

    function GetTotalCost() {
        
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getQuantity(cartItem.name);
            totalCost += (productData.price * cartItem.quantity);
        });
        return totalCost;
    }

    const contextValue = {
        items: cartProducts,
        GetQuantity,
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

