import Badge from "../UI/Badge";
import CartIcon from "../UI/CartIcon";
import './CartMenu.css'

const CartMenu = () => {
    return <button className="cart">
        <CartIcon />
        <p>Your cart</p>
        <Badge/>
    </button>;
}

export default CartMenu;