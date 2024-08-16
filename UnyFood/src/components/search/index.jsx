import Button from "../button"
import "./styles.css"

export default function Search() {
    return(
        <section className="search-container">
            <h2>Nosso objetivo é servir você!</h2>
            
            <div className="container-input">
                <input placeholder="Encontre um restaurante perto de você"/>
              <Button title="Encontrar"/>
            </div>
        </section>
    )
}