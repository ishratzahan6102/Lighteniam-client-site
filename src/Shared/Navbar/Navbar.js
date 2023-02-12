import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Context';
import UseAdmin from '../../Hooks/UseAdmin';
import './Navbar.css';
import user1 from '../../assets/icons/user 1.png'
import search from '../../assets/icons/search 1.png'
import cart from '../../assets/icons/cart 1.png'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isAdmin] = UseAdmin(user?.email)

    const menu = <>
        <li><Link className="mx-2 font-bold rounded-none" active to='/'>Home</Link></li>
        { user?.uid? 
         <li><Link onClick={logOut} className="mx-2 font-bold rounded-none">Logout</Link></li>
         : 
         <li><Link className="mx-2 font-bold rounded-none" to='/login'>Login</Link></li>
        }
        <li><Link className="mx-2 font-bold rounded-none" to='/registration'>Registration</Link></li>
        {isAdmin &&
        <li><Link className="mx-2 font-bold rounded-none" to='/users'>Users</Link></li>
        }
        </>

    return (
        <div className="navbar bg-base-100 m-0 p-0 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link className="logo normal-case text-xl">Lighteniam</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menu}
                </ul>
            </div>
            <div className="navbar-end">
                <img src={user1} alt='user-1'/>
                <img src={search} alt='search'/>
                <img className='cart' src={cart} alt='cart'/>
            </div>
        </div>
    );
};

export default Navbar;