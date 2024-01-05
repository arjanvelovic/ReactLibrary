import { useState} from 'react'
import { Link } from 'react-router-dom'
//@ts-ignore
import logo from '../assets/images/navbarlogowhite.png'
import { useAuth0 } from '@auth0/auth0-react';


function Navbar() {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const pullUp = () => {
        setIsVisible(false)
    }

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    const signOutOnClick = () => {
        logout();
    };

    const signInOnClick = () => {
        loginWithRedirect();
    };

    return (
    <nav className='flex bg-purple-800 h-full py-3 justify-center'>
        <div className='grid grid-cols-2 md:grid-cols-4 w-10/12'>
            <div id='navlogo' className='flex items-center'>
                <Link to='/'><img src={logo} className='md:max-h-14 md:w-auto md:h-auto h-8 opacity-80 hover:opacity-100 transition duration-500'/></Link>
            </div>
            <div className='hidden md:flex col-span-2 items-center ms-2'>
                <button className='mx-2 bg-purple-100 rounded border-purple-200 border hover:bg-purple-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to='/'>Home</Link>
                </button>
                <button className= 'mx-2 bg-purple-100 rounded border-purple-200 border hover:bg-purple-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to='/books'>Books</Link>
                </button>
                <button className= 'mx-2 bg-purple-100 rounded border-purple-200 border hover:bg-purple-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to='/cart'>Cart</Link>
                </button>
            </div>
            <div className='hidden md:flex justify-self-end items-center'>
            {!isAuthenticated ? 
            <button className=' bg-purple-100 rounded border-purple-200 border hover:bg-purple-600 hover:text-gray-200 w-20 h-12 transition duration-500'>
                    <Link to="/" onClick={signInOnClick}>
                        Sign In
                    </Link>
            </button>
            :
            <button className='mx-2 bg-purple-600 text-gray-200 rounded hover:bg-purple-200 hover:text-gray-600 w-20 h-12 transition duration-500'>
                <div>
                    <Link to="/" onClick={signOutOnClick}>
                        Sign Out
                    </Link>
                </div>
            </button>
            }
            </div>
            <div className="md:hidden flex justify-end items-center">
                <button onClick={dropDown} className= 'transition duration-700 h-10 bg-purple-100 rounded border-purple-300 border hover:bg-purple-600 hover:text-gray-200 w-12'> <i className='fas fa-bars'></i> </button>
            </div>
        </div>

        { isVisible ? (
            <div className='md:hidden grid grid-col-1 z-10 absolute bg-purple-800 mt-12 w-full'>
                <button className= 'mt-4 h-10 mx-24 bg-purple-200 rounded border-purple-300 border hover:bg-purple-600 hover:text-gray-200 transition duration-500'>
                    <Link to='/' onClick={pullUp}>Home</Link>
                </button>
                <button className= 'mt-3 h-10 mx-24 bg-purple-200 rounded border-purple-300 border hover:bg-purple-600 hover:text-gray-200 transition duration-500'>
                    <Link to='/books' onClick={pullUp}>Books</Link>
                </button>
                <button className= 'mt-3 h-10 mx-24 bg-purple-200 rounded border-purple-300 border hover:bg-purple-600 hover:text-gray-200 transition duration-500'>
                    <Link to='/cart' onClick={pullUp}>Cart</Link>
                </button>
                <button className='mt-3 h-10 mx-24 bg-purple-200 rounded border-purple-300 border hover:bg-purple-600 hover:text-gray-200 transition duration-500'>
                Log In
                </button>
                <button className= 'mt-3 mb-4 h-10 mx-24 bg-purple-600 text-gray-200 rounded hover:bg-purple-200 hover:text-gray-600 transition duration-500'>
                    Sign Up
                </button>
            </div>
            ) : (
            <></>
            ) }
        
    </nav>
);}

export default Navbar