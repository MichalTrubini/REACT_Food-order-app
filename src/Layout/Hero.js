import './Hero.css'

const Hero = () => {
    return <>
        <div className="main-image">
            <img src='./meals.jpg' alt='meals'/>
        </div>;
        <div className='hero__text'>
            <h1>Delicious food, delivered to you</h1>
            <p>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
            <p>All our meals are cooked with high quality ingredients, just-in-time and of course by experienced chefs!</p>
        </div>
    </>
}

export default Hero;