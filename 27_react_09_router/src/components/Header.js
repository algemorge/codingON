import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <header className="Header">
         <span>Its Header : Router Tutorial!</span>
         <div>
            <Link to='/' className='menu-Item'>HOME</Link>
            <Link to='/products' className='menu-Item'>Products</Link>
         </div>
      </header>
   )
}

export default Header;