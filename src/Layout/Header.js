import CartMenu from '../Cart/CartMenu';
import './Header.css'

const Header = () => {
    return <header className="header">
        <div className="logo">ReactMeals</div>
        <CartMenu />
    </header>;
}

export default Header;