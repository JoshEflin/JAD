import { useQuery } from "@apollo/client";
import { useState } from "react";
import { QUERY_ITEMS } from "../../utils/queries";
import { useContext } from "react";
import { CartContext } from "../../utils/cartContext";
import Description from "./descriptions";

const Products = () => {
  const cart = useContext(CartContext);
  const { loading, data } = useQuery(QUERY_ITEMS);
  const products = data?.getItems || [];

  return (
    <main>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 my-8 cursor-default">
          Welcome to JAD Grocery!
        </h1>
        <h2 className="inline-block py-2 px-4 font-semibold text-white bg-lime-600 mb-8 rounded-md cursor-default">
          {products.length
            ? `Viewing ${products.length} ${
                products.length === 1 ? "item" : "items"
              } in stock!`
            : "You have no items in stock!"}
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product, i) => {
            return (
              <div
                key={i}
                className={`group rounded-lg pb-4 bg-gray-100 hover:bg-green-300 cursor-pointer shadow-md hover:shadow-xl transitional-all duration-300`}
                // className="max-w-sm rounded overflow-hidden shadow-lg"
              >
                <div>
                  {product.photo ? (
                    <img
                      className="w-full h-48 object-cover group-hover:opacity-75 rounded-t-lg object-center"
                      src={product.photo}
                      alt={`The picture for ${product.name}`}
                    />
                  ) : null}
                  <div className="px-6 py-4">
                    <div className="text-lg font-medium text-gray-800">
                      {product.name}
                    </div>
                    <p className="text-gray-600 font-medium mb-1">
                      Price: ${product.price}
                    </p>
                    <p className="text-gray-600 font-medium mb-2">
                      Current Stock: {product.stock}
                    </p>
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        disabled={!product.inStock}
                        id={`cart-${product._id}`}
                        onClick={() => cart.AddOnetoCart(product.name)}
                        className={
                          product.inStock
                            ? "inline-flex justify-center items-center w-24 h-10 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            : "inline-flex justify-center items-center w-24 h-10 rounded-md bg-gray-200 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  cursor-not-allowed"
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Add
                      </button>
                      <button
                        onClick={() => cart.RemoveOnefromCart(product.name)}
                        className="inline-flex justify-center items-center w-24 h-10 rounded-md bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 12H4"
                          />
                        </svg>
                        Remove
                      </button>
                    </div>
                    <div className="flex justify-center">
                      <button
                        disabled={!product.inStock}
                        className={
                          product.inStock
                            ? "p-1 text-white bg-lime-600 border border-slate-300 hover:border-indigo-600 rounded-md shadow-lg shadow-indigo-500/40 mt-4"
                            : "p-1 text-white bg-red-600 border border-slate-300  rounded-md shadow-lg shadow-indigo-500/40 mt-4"
                        }
                        onClick={() => cart.AddOnetoCart(product.name)}
                      >
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Products;
