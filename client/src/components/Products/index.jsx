import { useQuery } from "@apollo/client";
import { Container, Card, Button, Row, Form, Col } from "react-bootstrap";
import { QUERY_ITEMS } from "../../utils/queries";
import {  useContext } from "react";
import { CartContext } from "../../utils/cartContext";

const Products = () => {
  const cart = useContext(CartContext);
  // const [getGroceries, setGroceries] = useState([]);
  // const [search, setSearch] = useState("");
  const { loading, data } = useQuery(QUERY_ITEMS);
  const products = data?.getItems || [];

 
  return (
    <main>
      <Container>
        <h1 className="text-5xl font-semibold">Welcome to JAD Grocery!</h1>
        <h2 className="inline-block p-1 font-extralight font-semibold bg-lime-600 m-3 rounded-md bg-opacity-25">
          {products.length
            ? `Viewing ${products.length} ${
                products.length === 1 ? "item" : "items"
              } in stock!`
            : "You have no items in stock!"}
        </h2>
        <div key={products._id} className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => {
            return (
              
              <Row key={product._id}>
                <div>
                  <Card className="shadow-2xl">
                    {product.photo ? (
                      <Card.Img
                        src={product.photo}
                        alt={`The picture for ${product.name}`}
                        variant="top"
                      />
                    ) : null}
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <p className="small">Price: ${product.price}</p>
                      <Card.Text>Current Stock: {product.stock}</Card.Text>
                      <>
                        <Form as={Row}>
                          <Form.Label column ='true' sm="6">In Cart: </Form.Label>
                        <Col sm="6">
                          <Button sm="6" onClick={() => cart.AddOnetoCart(product.name)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Add</Button>
                        <Button sm="6" onClick={() => cart.RemoveOnefromCart(product.name)} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Remove</Button>
                        </Col>
                        </Form>
                        <Button  onClick={() => cart.DeletefromCart(product.name)} className="mt-3 inline-flex w-full justify-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Delete Item</Button>
                      </>
                      <Button
                        variant="primary"
                        className="p-1 text-white bg-lime-600 border border-slate-300 hover:border-indigo-600 rounded-md shadow-lg shadow-indigo-500/40"
                        onClick={() => cart.AddOnetoCart(product.name)}
                      >
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
