import Badge from "../UI/Badge";
import CartIcon from "../UI/CartIcon";
import './Cart.css'

const Cart = () => {
    return <div className="cart">
        <CartIcon />
        <p>Your cart</p>
        <Badge/>
    </div>;
}

export default Cart;