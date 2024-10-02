import { Link, NavLink } from "react-router-dom";

const NavBar = () => {

    const link =
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg' : 'font-semibold px-4 py-2'} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg' : 'font-semibold px-4 py-2'} to="/listed-books">Listed Books</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'border border-[#23BE0A] text-[#23BE0A] font-semibold px-4 py-2 rounded-lg' : 'font-semibold px-4 py-2'} to="/pages-to-read">Pages to Read</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            link
                        }
                    </ul>
                </div>
                <Link to="/"><a className="btn btn-ghost text-2xl font-bold">GronthoMala</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold gap-4">
                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn px-7 py-4 bg-green-500 text-white">Sign In</a>
                <a className="btn px-7 py-4 bg-cyan-500 text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;