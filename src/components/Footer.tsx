import { Link } from 'react-router-dom'
//@ts-ignore
import logo from '../assets/images/tesla-9-logo.png'
import FooterLogo from '../assets/images/FooterLogo.png'

function Footer() {

    return (
        <footer className="footer grid bg-purple-600 text-slate-100 grid-cols-3 py-1 p-0 w-full">
            <div className='flex text-xs items-center justify-center'> Queens Public Library © 2024

            </div>
            <div className='flex text-xs items-center justify-center'>
            <Link to='/'><img src={FooterLogo} className='w-auto h-4 md:h-6 opacity-70 hover:opacity-100 transition duration-500'/></Link>

            </div>
            <div className='flex items-center justify-center'>
                <Link to='/'><i className="fa-brands fa-x-twitter mx-2 hover:text-white transition duration-700"></i></Link>
                <Link to='/'><i className="fa-brands fa-instagram mx-2 hover:text-white transition duration-700"></i></Link>
                <Link to='/'><i className="fa-brands fa-facebook mx-2 hover:text-white transition duration-700"></i></Link>
                <Link to='/'><i className="fa-brands fa-youtube mx-2 hover:text-white transition duration-700"></i></Link>

            </div>
      </footer>
);}

export default Footer