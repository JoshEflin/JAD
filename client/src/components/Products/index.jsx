import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../../utils/queries";
import {  useContext } from "react";
import { CartContext } from "../../utils/cartContext";

const Products = () => {
  const cart = useContext(CartContext);
  // const [getGroceries, setGroceries] = useState([]);
  // const [search, setSearch] = useState("");
  const { loading, data } = useQuery(QUERY_ITEMS);
  const products = data?.getItems || [];
  console.log(products)

 
  return (
    <main>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 my-8 cursor-default">Welcome to JAD Grocery!</h1>
        <h2 className="inline-block py-2 px-4 font-semibold text-white bg-green-600 mb-8 rounded-md cursor-default">
          {products.length
            ? `Viewing ${products.length} ${
                products.length === 1 ? "item" : "items"
              } in stock!`
            : "You have no items in stock!"}
        </h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => {
            return (
              
              <div key={product._id} className='max-w-sm rounded overflow-hidden shadow-lg'>
                <div>
                    {product.photo ? (
                      <img
                        className='w-full h-48 object-cover object-center'
                        src={product.photo}
                        alt={`The picture for ${product.name}`}
                      />
                    ) : null}
                    <div className='px-6 py-4'>
                      <div className='font-bold text-xl mb-2'>{product.name}</div>
                      <p className="text-gray-700 font-medium mb-2">Price: ${product.price}</p>
                      <p className="text-gray-600 font-medium mb-4">Current Stock: {product.stock}</p>
                      <div className='flex items-center mt-4'>
                        <div className='flex items-center'>
                          <button id={`cart-${product._id}`} onClick={() => cart.AddOnetoCart(product.name)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Add
                          </button>
                          <button onClick={() => cart.RemoveOnefromCart(product.name)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Remove
                          </button>
                        </div>
                        <div className='flex items-center'>
                        <button  onClick={() => cart.DeletefromCart(product.name)} className="mt-3 inline-flex w-full justify-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Delete Item</button>
                        </div>
                      </div>
                      <button
                        className="p-1 text-white bg-lime-600 border border-slate-300 hover:border-indigo-600 rounded-md shadow-lg shadow-indigo-500/40"
                        onClick={() => cart.AddOnetoCart(product.name)}
                      >
                        Add to Cart
                      </button>
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
