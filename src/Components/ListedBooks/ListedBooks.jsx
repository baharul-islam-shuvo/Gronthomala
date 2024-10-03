import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {

    const [tab, setTab] = useState(0);
    return (
        <div>
            <div className="bg-[#13131315] py-6 rounded-2xl mb-10">
                <p className="text-center text-3xl font-extrabold">Books</p>
            </div>
            <div className="text-center mb-32 lg:mb-14">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white text-lg px-8 h-14">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52">
                        <Link to="">
                            <li><a>Rating</a></li>

                        </Link>
                        <Link to="">
                            <li><a>Number of pages</a></li>

                        </Link>
                        <Link to="">
                            <li><a>Publisher year</a></li>

                        </Link>
                    </ul>
                </details>
            </div>
            
            <div className="flex items-center lg:-mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
                <Link to=""
                    onClick={() => setTab(0)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 0 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Read list</span>
                </Link>

                <Link to={`wishlist`}
                    onClick={() => setTab(1)}
                    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tab === 1 ? 'border border-b-0' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Wishlist</span>
                </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;