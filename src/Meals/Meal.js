import Button from "../UI/Button";
import './Meal.css'

const Meal = (props) => {
    return <div className="meal">
        <div className="meal__item">
            <h3 className="meal__title">{props.title}</h3>
            <p className="meal__description">{props.description}</p>
            <p className="meal__price">{props.price}</p>
        </div>
        <form className="meal__user">
            <label htmlFor="meal-amount">Amount</label>
            <input id="meal-amount" type="number" value={props.amount} min="1" step="1"></input>
            <Button>Add</Button>
        </form>
    </div>;
}

export default Meal;
