import React from 'react';
import {Link} from "react-router-dom";

const PasswordReset = () => {
    return (
        <div>
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
            <div className="mt-15 w-[400px] mx-auto py-40 text-center">
                <div className="bg-white shadow-md rounded px-12 pt-12 pb-12 mb-10">
                    <div className="mb-8">
                        <h2 className="font-semibold mb-2 text-2xl"> Email pour reinitialiser votre mot de passe </h2>
                    </div>

                    <form className="">
                        <div className="mb-3">
                            <input type="text" placeholder=" votre email"
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white
                 font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">
                            Submit
                        </button>
                        <div className="mt-3">
                            <Link to="/login" className=" mb-1 font-bold text-blue-500 hover:text-blue-800 flex">Connexion</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default PasswordReset;
