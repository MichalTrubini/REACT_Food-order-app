import Meal from "./Meal";
import cartData from "../Store/cart-context";
import './Meals.css'

const Meals = () => {

    const meals = [
        {
            title:'Sushi',
            description:'Finest fish and veggies',
            price: 22.99
         },
         {
            title:'Schnitzel',
            description:'A German specialty!',
            price: 16.50
         },
         {
            title:'Barbecue burger',
            description:'American, raw, meaty',
            price: 12.99
         },
         {
            title:'Green bowl',
            description:'Healthy... and green',
            price: 18.99
         }
    ]

    const orderedItems = []

    const onSubmitOrderHandler = (orderedItem) => {
      orderedItems.push(orderedItem);
      console.log(orderedItems);
    }

    return (
    <cartData.Provider 
      value={{
         cartData: orderedItems
      }}>
         <div className="meals">
         {meals.map(meal => <Meal onSubmitOrder={onSubmitOrderHandler} key={meal.title} title={meal.title} description={meal.description} price={meal.price}></Meal>)}
         </div>;
   </cartData.Provider>
    )
}

export default Meals;