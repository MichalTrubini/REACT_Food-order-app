import Cart from '../Cart/Cart';
import './Header.css'

const Header = () => {
    return <header className="header">
        <div className="logo">ReactMeals</div>
        <Cart />
    </header>;
}

export default Header;