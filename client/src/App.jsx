import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Recipe from "./components/Recipe";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Homepage from "./components/Homepage";
import "./App.css";
import CartProvider from "./utils/cartContext";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const redirectToSuccessPage = () => {
    return <Navigate to="/success" />;
  };
  return (
    <ApolloProvider client={client}>
      <Router>
        <CartProvider>
          <div className="w-screen mx-auto">
            <Header />
            <div className="min-h-screen overflow-x-hidden">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/products" element={<Products />} />
                <Route path="/recipes" element={<Recipe />} />

                <Route path="/success" element={<Success />} />
                <Route path="/cancel" element={<Cancel />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </CartProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
