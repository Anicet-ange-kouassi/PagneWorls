import React from 'react';
import {Link} from "react-router-dom";
import {BsFacebook} from "react-icons/bs";


const ArticleSelect = () => {
    return (
        <div>
            <div className="h-[20vh] bg-gradient-to-r from-purple-500 to-pink-500 pt-20">
                <h1 className="text-gray-50 text-5xl items-center  text-center">Vous pouvez ajouter encore plus</h1>
            </div>
            <div className="grid grid-cols-5 gap-6  p-10">
                <div className="col-span-3">
                    <BsFacebook>Facebook</BsFacebook>
                    <div className="aspect-square flex items-center justify-center">
                        <Link to="#">
                            <img src="pagne1.jpg" alt="/"/>
                        </Link>
                    </div>
                    <div className="flex relative">
                        <Link to="#" className="flex items-center absolute top-0 h-full text-white z-1 left-0  bg-black/10 hover:bg-black/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/>
                            </svg>
                        </Link>
                        <Link to="#" className="flex items-center absolute top-0 h-full text-white z-1 right-0  bg-black/10 hover:bg-black/20">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                            </svg>
                        </Link>
                        <Link to="#" className=" flex transition-colors  items-center justify-center border border-gray-200 hover:bg-gray-700">
                            <img src="pagne2.jpg" alt="/" className="w-36"/>
                        </Link>
                        <Link to="#" className="flex transition-colors  items-center justify-center border border-gray-200 hover:bg-gray-700">
                            <img src="pagne15.jpg" alt="/" className="w-36"/>
                        </Link>
                        <Link to="#" className="flex transition-colors  items-center justify-center border border-gray-200 hover:bg-gray-700">
                            <img src="pagne4.jpg" alt="/" className="w-36"/>
                        </Link>
                        <Link to="#" className="flex transition-colors  items-center justify-center border border-gray-200 hover:bg-gray-700">
                            <img src="pagne5.jpg" alt="/" className="w-36"/>
                        </Link>
                    </div>
                </div>
                <div className="col-span-2">
                    <h1 className="text-lg font-semibold">
                        Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K
                        Sensor, 25,600 DPI, RGB, Adjustable Weights, 11
                    </h1>
                    <p className="text-xl font-bold mb-3">$17.99</p>
                    <div className="flex items-center mb-3">
                        <p className="flex items-center text-orange-600 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clipRule="evenodd"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clipRule="evenodd"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clipRule="evenodd"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd"
                                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                      clipRule="evenodd"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                            </svg>
                        </p>
                        <Link to="#" className="ml-3">64 revues</Link>
                    </div>
                    <div className="flex justify-between items-center mb-3">
                        <label htmlFor="/">Quantité</label>
                        <input type="number" className="border-gray-600 w-24 py-1 px-2
                    rounded focus:border-gray-600 focus:ring-gray-500" />
                    </div>
                    <button  className="flex justify-center items-center btn-primary-cart w-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                        </svg>
                        Add to cart
                    </button>
                    <hr className="my-5"/>
                    <div className="edit_tableau">
                        <table>
                            <tbody>
                            <tr>
                                <td>Connectivity Technology</td>
                                <td>Anisco</td>
                            </tr>
                            <tr>
                                <td>Recommended Uses For Product</td>
                                <td>Manging</td>
                            </tr>
                            <tr>
                                <td>Brand</td>
                                <td>Logitech G</td>
                            </tr>
                            <tr>
                                <td>Compatible Devices</td>
                                <td>Anisco Computer</td>
                            </tr>
                            <tr>
                                <td>Series</td>
                                <td>Logitech G502 HERO High Performance Gaming Mouse</td>
                            </tr>
                            </tbody>
                        </table>

                        <p className="">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Deserunt suscipit natus quisquam optio voluptatem quo beatae
                            ex similique, pariatur laborum asperiores explicabo delectus
                            culpa cumque corrupti quasi incidunt at quos!
                        </p>
                        <h4>About the item</h4>
                        <ul className="list-disc pl-6">
                            <li>
                                Hero 25K sensor through a software update from G HUB, this
                                upgrade is free to all players: Our most advanced, with 1:1
                                tracking, 400-plus ips, and 100 - 25,600 max dpi sensitivity
                                plus zero smoothing, filtering, or acceleration
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ArticleSelect;
