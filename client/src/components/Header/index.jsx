import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Disclosure, Menu, Transition, Dialog } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import NavComponent from "./NavComponent";
import Profile from "../../pages/Profile";
import { CartContext } from "../../utils/cartContext";
import { Button } from "react-bootstrap";
import newIcon from "../../assets/NewLogo.png";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { UPDATE_INVENTORY } from "../../utils/mutations";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

import Auth from "../../utils/auth";

const leftNav = [
  { name: "Home", href: "" },
  { name: "Recipes", href: "recipes" },
  { name: "Products", href: "products" },
];
const rightNav = [
  { name: "Login", href: "login" },
  { name: "Signup", href: "signup" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const headerRef = useRef(null);
  const [updateStock, { d }] = useMutation(UPDATE_INVENTORY);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const [openM, setOpen] = useState(false);
  const handleShow = () => setOpen(true);
  const cancelButtonRef = useRef(null);
  const cart = useContext(CartContext);
  console.log(cart.items);
  function submitCheckout() {
    const productIds = [];

    updateStock({
      variables: { products: cart.items },
    });

    cart.items.forEach((item) => {
      productIds.push(item);
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const [isCurrent, setIsCurrent] = useState("Home");
  const handleNavClick = (clicked) => {
    return setIsCurrent(clicked);
  };
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.stock,
    0,
  );
  return (
    <Disclosure
      as="nav"
      className={`bg-green-800 sticky w-full top-0 z-10`}
      ref={headerRef}
    >
      {({ open }) => (
        <>
          <Transition.Root show={openM} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10"
              initialFocus={cancelButtonRef}
              onClose={setOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white-100 sm:mx-0 sm:h-10 sm:w-10"></div>
                          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-bold leading-6 text-gray-900"
                            >
                              SHOPPING CART
                            </Dialog.Title>
                            <div className="mt-2">
                              {productsCount > 0 ? (
                                <>
                                  <p className="text-sm text-gray-500">
                                    Items in the cart:
                                  </p>
                                  {cart.items.map((currentProduct) => (
                                    <>
                                      <h1
                                        className="text-base font-bold leading-6 text-gray-900"
                                        key={currentProduct.id}
                                      >
                                        {currentProduct.foodItem}
                                      </h1>
                                      <img
                                        className="w-1/4"
                                        src={currentProduct.photo}
                                      ></img>
                                      <p className="text-base font-bold leading-6 text-gray-900">
                                        {" "}
                                        Quantity: {currentProduct.stock}
                                      </p>
                                      <p className="text-gray-500">
                                        -{currentProduct.description}
                                      </p>
                                      <p className="text-base font-bold leading-6 text-gray-900">
                                        Price: ${currentProduct.price}{" "}
                                      </p>
                                      <Button
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-red-300 sm:mt-0 sm:w-auto"
                                        onClick={() =>
                                          cart.DeletefromCart(
                                            currentProduct.foodItem,
                                          )
                                        }
                                      >
                                        Remove
                                      </Button>
                                      <hr></hr>
                                    </>
                                  ))}
                                  <h2 className="text-2xl font-bold leading-6 text-gray-900">
                                    Total: {cart.GetTotalCost().toFixed(2)}
                                  </h2>
                                </>
                              ) : (
                                <h2>Your cart is empty!</h2>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 px-4 py-3 gap-x-2 sm:flex sm:flex-row-reverse sm:px-6">
                        <Button
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-400 sm:mt-0 sm:w-auto"
                          onClick={submitCheckout}
                        >
                          Purchase items!
                        </Button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-grey-400 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src={newIcon}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={newIcon}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavComponent
                      navigation={leftNav}
                      isCurrent={isCurrent}
                      handleNavClick={handleNavClick}
                      classNames={classNames}
                    />
                    {Auth.loggedIn() ? (
                      <>
                        <Link
                          className="text-gray-300 p-2 rounded-md hover:text-white hover:underline mx-3 text-lg font-medium"
                          onClick={logout}
                        >
                          Logout
                        </Link>
                      </>
                    ) : (
                      <NavComponent
                        navigation={rightNav}
                        isCurrent={isCurrent}
                        handleNavClick={handleNavClick}
                        classNames={classNames}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {Auth.loggedIn() ? (
                  <>
                    <button
                      className="text-gray-300 p-2 rounded-md hover:text-white hover:bg-gray-600 mx-3 text-sm font-medium"
                      onClick={handleShow}
                    >
                      Cart {productsCount} Items
                    </button>
                  </>
                ) : (
                  <Link
                    className="text-gray-300 p-2 rounded-md hover:text-white hover:bg-gray-600 mx-3 text-sm font-medium"
                    to="/Login"
                  >
                    Cart {productsCount} Items
                  </Link>
                )}
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {leftNav.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "underline text-white"
                      : "text-gray-300 hover:underline hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
              {Auth.loggedIn() ? (
                <>
                  <Link
                    className="text-gray-300 p-2 rounded-md hover:text-white hover:underline mx-3 text-lg font-medium"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </>
              ) : (
                <NavComponent
                  navigation={rightNav}
                  isCurrent={isCurrent}
                  handleNavClick={handleNavClick}
                  classNames={classNames}
                />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
