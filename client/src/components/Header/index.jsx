import { Fragment, useRef, useState, useContext, useEffect } from 'react';
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';
import NavComponent from './NavComponent';
import Profile from '../../pages/Profile'
import { CartContext } from '../../utils/cartContext';
import { Button } from 'react-bootstrap';
import newIcon from '../../assets/NewLogo.png'

import Auth from "../../utils/auth";

const leftNav = [
  { name: "Home", href: "#" },
  { name: "Recipes", href: "recipes" },
  { name: "Products", href: "products" },
];
const rightNav = [
  { name: "Login", href: "login"},
  { name: "Signup", href: "signup"},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const [openM, setOpen] = useState(false)
  const handleShow = () => setOpen(true);
  const cancelButtonRef = useRef(null)
  const cart = useContext(CartContext);
  
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };

  const [isCurrent, setIsCurrent] = useState("Home");
  const handleNavClick = (clicked) => {
    return setIsCurrent(clicked);
  };
const productsCount = cart.items.reduce((sum, product)=> sum + product.stock,0);
  return (
    <Disclosure as="nav" className={`bg-green-800 sticky w-full top-0`}>
      {({ open }) => (
        <>
         <Transition.Root show={openM} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
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
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white-100 sm:mx-0 sm:h-10 sm:w-10">
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                SHOPPING CART
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                
                                                  {productsCount > 0 ?
                                                <>
                                                <p className="text-sm text-gray-500">Items in the cart:</p>
                                                {cart.items.map((currentProduct) => (
                                                <>
                                                <h1 key={currentProduct.id}>{currentProduct.foodItem}</h1>
                                                <p> Quantity: {currentProduct.stock}</p>
                                                <p>Price: ${currentProduct.price} </p>
                                                <Button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto' onClick={()=> cart.DeletefromCart(currentProduct.foodItem)}>Remove</Button>
                                                <hr></hr>
                                                 </>
                                                ))}
                                                <h2>Total: {cart.GetTotalCost().toFixed(2)}</h2>
                                                
                                                </>  
                                                : <h2>Your cart is empty!</h2>
                                                }
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <Button className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'>
                                                  Purchase items!
                                                </Button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
                      classNames = {classNames}
                    />
                    {Auth.loggedIn() ? (
                      <>
                      <Link className='text-gray-300 p-2 rounded-md hover:text-white hover:underline mx-3 text-lg font-medium' onClick={logout}>
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
               {/* LOGIN LOGOUT CART GOES HERE */}

                {/* {Auth.loggedIn() ? (
                  <>
                  <Link className='text-gray-300 p-2 rounded-md hover:text-white hover:bg-gray-600 mx-3 text-sm font-medium' onClick={logout}>
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
                )} */}
                <button className="text-gray-300 p-2 rounded-md hover:text-white hover:bg-gray-600 mx-3 text-sm font-medium" onClick={handleShow}>Cart {productsCount} Items</button>
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to='/profile'
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>
          

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {leftNav.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "underline text-white"
                      : "text-gray-300 hover:underline hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>

  );
};


export default Header;
