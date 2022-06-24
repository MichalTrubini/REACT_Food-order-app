import Meal from "./Meal";
import './Meals.css'

const Meals = () => {

    const meals = [
        {
            title:'Sushi',
            description:'Finest fish and veggies',
            price: '$22.99'
         },
         {
            title:'Schnitzel',
            description:'A German specialty!',
            price: '$16.50'
         },
         {
            title:'Barbecue burger',
            description:'American, raw, meaty',
            price: '$12.99'
         },
         {
            title:'Green bowl',
            description:'Healthy... and green',
            price: '$18.99'
         }
    ]

    return <div className="meals">
        {meals.map(meal => <Meal key={meal.title} title={meal.title} description={meal.description} price={meal.price}></Meal>)}
        </div>;
}

export default Meals;