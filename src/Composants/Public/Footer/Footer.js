import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="table-fixed">
            <div >
                <div className="flex justify-between items-center text-white bg-gray-600 p-1 py-10">
                    <div className="border-y-1 ">

                    </div>
                    <div className="flex items-center  ">
                        <nav>
                            <ul>
                                <li className="flex items-center py-navbar-item px-navbar-item block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-6 h-6 mr-2">
                                        <path
                                            d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z"/>
                                        <path
                                            d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z"/>
                                        <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"/>
                                    </svg>
                                    <h2>Livraison</h2>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center ">
                        <nav>
                            <ul>
                                <li className="flex items-center py-navbar-item px-navbar-item block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-6 h-6 mr-2">
                                        <path fillRule="evenodd"
                                              d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                              clipRule="evenodd"/>
                                    </svg>

                                    <h2>Appelez-le +225 07 59 68 11 37</h2>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center ">
                        <nav>
                            <ul>
                                <li className="flex items-center py-navbar-item px-navbar-item block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-6 h-6 mr-2">
                                        <path fillRule="evenodd"
                                              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <h2>Garantie de remboursement</h2>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center ">
                        <nav>
                            <ul>
                                <li className="flex items-center py-navbar-item px-navbar-item block">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                         className="w-6 h-6 mr-2">
                                        <path fillRule="evenodd"
                                              d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                              clipRule="evenodd"/>
                                        <path
                                            d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"/>
                                    </svg>

                                    <h2>30 jours de retour</h2>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="border-y-1 ">

                    </div>

                </div>
            </div>
            <div>
                <div className="bg-gray-50  items-center text-center p-1 py-5">
                        <Link to="#" className="font-bold">Politique de confidentialité Termes et conditions d'utilisation Information sur le site</Link>
                </div>
            </div>
            <div className="flex justify-between items-center bg-gray-600 text-white py-10">
                <div className="border-y-1 ">
                </div>
                <div className="flex items-center  ">
                    <nav>
                        <ul>
                            <li className="flex items-center py-navbar-item px-navbar-item block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6 mr-2">
                                    <path fillRule="evenodd"
                                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                          clipRule="evenodd"/>
                                </svg>
                                <h2>Côte D'Ivoire, Yamoussoukro</h2>
                            </li>
                            <li className="flex items-center py-navbar-item px-navbar-item block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6 mr-2">
                                    <path fillRule="evenodd"
                                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                          clipRule="evenodd"/>
                                </svg>
                                <h2>+ 225 07 59 68 11 37</h2>
                            </li>
                            <li className="flex items-center py-navbar-item px-navbar-item block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6 mr-2">
                                    <path
                                        d="M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z"/>
                                    <path
                                        d="M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z"/>
                                </svg>

                                <Link to="">kouassiangeanicet941@gmail.com</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center  ">
                    <nav>
                        <ul>
                            <li>
                                <h2 className="font-bold">Service client</h2>
                                <Link to="#">Mon compte</Link>
                            </li>
                            <li>
                                <Link to="#">Historique des commandes</Link>
                            </li>
                            <li>
                                <Link to="#">FAQ</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center ">
                    <nav>
                        <ul>
                            <li>
                                <h2 className="font-bold">Société</h2>
                                <Link to="#">A propos de nous</Link>
                            </li>
                            <li>
                                <Link to="#">Recherche avancée</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center ">
                    <nav>
                        <ul>
                            <li>
                                <h2 className="font-bold">Pourquoi nous choisir</h2>
                                <Link to="#">Guide d'achat</Link>
                            </li>
                            <li>
                                <Link to="#">Blog</Link>
                            </li>
                            <li>
                                <Link to="#">Relation avec les acheteurs</Link>
                            </li>
                            <li>
                                <Link to="#">Contactez-nous</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="border-y-1 ">

                </div>

            </div>

        </div>

    );
};

export default Footer;
