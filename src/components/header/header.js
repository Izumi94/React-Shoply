import search from '../assets/search.svg';
import phone from '../assets/phone.svg';
import user from '../assets/user.svg';
import cart from '../assets/cart.svg';


const Header = () => {
    return (
    <header className="header">
        <div className="container">
            <div className="header__top">
                <div>
                    <img src={phone} alt='phone'/>
                    <img src={search} alt='search'/>
                </div>
            </div>
            <div className="header__bottom">
                <nav className="header__nav nav">
                    <ul className="nav__menu">
                       <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                       <li className="nav__item"><a href="#" className="nav__link">New in</a></li>
                       <li className="nav__item"><a href="#" className="nav__link">Women product</a></li>
                       <li className="nav__item"><a href="#" className="nav__link">Men product</a></li>
                       <li className="nav__item"><a href="#" className="nav__link">Top brands</a></li>
                       <li className="nav__item"><a href="#" className="nav__link">Special offers</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}
 export default Header;