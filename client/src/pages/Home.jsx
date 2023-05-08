import { useQuery } from '@apollo/client';
import {Container,
    Card,
    Button,
    Row,
    Col} from "react-bootstrap";
import { QUERY_ITEMS } from '../utils/queries';
import React, { useState, useContext} from 'react';
import { CartContext } from '../utils/cartContext';


const Home = () => {
    const cart = useContext(CartContext);
    const [getGroceries, setGroceries] = useState([]);
    const [search, setSearch] = useState('');
    const { loading, data } = useQuery(QUERY_ITEMS);
    const products = data?.getItems || [];
    // const { loading, data } = useQuery();
    // const productQuantity = cart.GetQuantity(products.name);
    return (
        <main>      
            <Container className=''>
                        <h1>Welcome to the store!</h1>
                            <h2 className='pt-5'>
                            {products.length
                                ? `Viewing ${products.length} saved ${products.length === 1 ? 'product' : 'products'}:`
                                : 'You have no items in stock!'}
                            </h2>
                          <div className = "flex flex-row flex-wrap space-y-4 space-x-4 overflow-auto">  
                            {products.map((product) => {
                                return (
                                    <Row xs={1} md={3} key={products._id} className="basis-1/4 bg-white-100 rounded border-double border-4 border-slate-600 shadow-xl">
                                <Col md="4" align="center"key={product._id}>
                                    <Card border='dark'>
                                    {product.image ? <Card.Img src={product.image} alt={`The picture for ${product.name}`} variant='top' /> : null}
                                    <Card.Body>
                                        <Card.Title>{product.name}</Card.Title>
                                        <p className='small'>Price: ${product.price}</p>
                                        <Card.Text>Current Stock: {product.stock}</Card.Text>
                                        <Button variant='primary' className='p-1 text-white bg-lime-600 border border-slate-300 hover:border-indigo-600 rounded-md shadow-lg shadow-indigo-500/40' onClick={() => cart.AddOnetoCart(product.name)}>
                                        Add to Cart
                                        </Button>
                                    </Card.Body>
                                    </Card>
                                </Col>
                                </Row>
                                );
                            })}
                            </div>
             </Container>            
        </main>
    );
};

export default Home;