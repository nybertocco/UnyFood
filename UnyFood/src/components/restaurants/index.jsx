import "./styles.css"

export default function Restaurants() {
    return(
        <div className="restaurants-container">
            <h3>Conheça nossos resturantes</h3>

            <div className="container-cards">
            <RestaurantCard title="Restaurante 1" category="Category 1" color="yellow"/>
            <RestaurantCard title="Restaurante 2" category="Category 2" color="blue"/>
            <RestaurantCard title="Restaurante 3" category="Category 3" color="pink"/>
            <RestaurantCard title="Restaurante 4" category="Category 4" color="green"/>
            <RestaurantCard title="Restaurante 5" category="Category 5" color="violet"/>
            <RestaurantCard title="Restaurante 6" category="Category 6" color="grey"/>
            <RestaurantCard title="Restaurante 7" category="Category 7" color="black"/>
            <RestaurantCard title="Restaurante 8" category="Category 8" color="orange"/>
            </div>
        </div>
    )
}

function RestaurantCard(props) {
    return(
        <div className="restaurant-card">
        <div className="avatar" style={{ background: props.color }}/>

        <div className="content-info">
            <p>{props.title}</p>
            <p>{props.category}</p>
        </div>
    </div>
    )
}