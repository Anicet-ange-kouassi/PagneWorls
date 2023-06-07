import React from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
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
                    <Link to="#">authentication</Link>
                </h1>
            </div>
                <div className="container mx-auto lg:w-2/3 p-5">
                    <div className="grid grid-cols-2 gap-6 items-start ">
                        <div className="bg-white p-3  shadow rounded-lg col-span-2">
                            <h2 className="font-semibold text-2xl mb-3">Créer un nouveau compte</h2>
                            <div className="mb-3">
                                <input type="text" placeholder="Nom"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Prénom"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Adresse"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-3">
                                <input type="number" placeholder="Numéro"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Email"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <h2 className="font-semibold text-2xl mb-3">Adresse personnelle</h2>
                            <div className="mb-3">
                                <select className="w-full focus:border-gray-600 focus:ring-gray-500 rounded border-gray-600">
                                    <option value="ci">Côte d'Ivoire</option>
                                    <option value="ca">Cameroun</option>
                                    <option value="gh">Ghana</option>
                                    <option value="bf">Burkina Faso</option>
                                    <option value="mi">Mali</option>
                                    <option value="se">Senegal</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Ville"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Code Postal"
                                       className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                            </div>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 justify-center rounded focus:outline-none focus:shadow-outline" type="button">Signup</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default SignUp;
