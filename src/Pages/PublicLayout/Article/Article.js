import React from 'react';
import {Link} from "react-router-dom";

const Article = () => {
    return (
        <div>
            <div className="h-[20vh] bg-gradient-to-r from-purple-500 to-pink-500 pt-20">
                <h1 className="text-gray-50 text-5xl items-center  text-center">Le temple de la culture africaine</h1>
            </div>
            <div className=" p-3 items-center flex grid-cols-2 divide-x ">
                <h1 className="font-bold">
                    <Link className=" flex items-center py-navbar-item px-navbar-item block" to="/home">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>
                        </svg>
                        Home
                    </Link>
                </h1>
                <h1 className="px-4 font-bold">
                    <Link to="/article">Article</Link>
                </h1>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-4  p-10" >
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne1.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles" > Add to cart</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne2.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/article" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne5.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne7.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne9.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne10.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne8.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden rounded-md shadow border  transition-colors border-gray-600 hover:border-gray-600" >
                    <Link to="/articles">
                        <img src="pagne6.jpg" alt='article' className="rounded-t-md transition hover:scale-105 hover:rotate-1" />
                    </Link>
                    <div className="p-3">
                        <h3>
                            <Link to="/articles" className="text-gray font-semibold hover:text-gray-600">
                                Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                                Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                            </Link>

                        </h3>
                        <p className="text-lg font-semibold">$17.99</p>
                        <div className="flex justify-between mt-3">
                            <button className=" flex items-center btn-primary-like ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
                                </svg>
                            </button>
                            <button className="flex items-center btn-primary-cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-6 h-6 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                                <Link to="/articles">
                                    Add to cart
                                </Link>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Article;
