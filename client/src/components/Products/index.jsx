import { useQuery } from '@apollo/client';
import {Container,
    Card,
    Button,
    Row} from "react-bootstrap";
import { QUERY_ITEMS } from '../../utils/queries';
import React, { useState, useContext} from 'react';
import { CartContext } from '../../utils/cartContext';

const Products = () => {
  const cart = useContext(CartContext);
  const [getGroceries, setGroceries] = useState([]);
  const [search, setSearch] = useState('');
  const { loading, data } = useQuery(QUERY_ITEMS);
  const products = data?.getItems || [];
  // const { loading, data } = useQuery();
  console.log(cart.items);
  // const productQuantity = cart.GetQuantity(products.name);
  return (
      <main>      
          <Container>
                      <h1 className='text-5xl font-semibold'>Welcome to JAD Grocery!</h1>
                          <h2 className='inline-block p-1 font-extralight font-semibold bg-lime-600 m-3 rounded-md bg-opacity-25'>
                          {products.length
                              ? `Viewing ${products.length} ${products.length === 1 ? 'item' : 'items'} in stock!`
                              : 'You have no items in stock!'}
                          </h2>
                        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">  
                          {products.map((product) => {
                              return (
                                  <Row key={products._id} >
                              <div key={product._id}>
                                  <Card className="shadow-2xl" >
                                  {product.photo ? <Card.Img src={product.photo} alt={`The picture for ${product.name}`} variant='top' /> : null}
                                  <Card.Body>
                                      <Card.Title>{product.name}</Card.Title>
                                      <p className='small'>Price: ${product.price}</p>
                                      <Card.Text>Current Stock: {product.stock}</Card.Text>
                                      <Button variant='primary' className='p-1 text-white bg-lime-600 border border-slate-300 hover:border-indigo-600 rounded-md shadow-lg shadow-indigo-500/40' onClick={() => cart.AddOnetoCart(product.name)}>
                                      Add to Cart
                                      </Button>
                                  </Card.Body>
                                  </Card>
                              </div>
                              </Row>
                              );
                          })}
                          </div>
           </Container>            
      </main>
  );
};

export default Products;