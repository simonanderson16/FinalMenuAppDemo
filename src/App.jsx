import { useState } from "react";
import Menu from "./components/Menu";
import "./App.css";

function App() {
    // hard-coded data
    // is a JS object (like a HashMap or Dictionary in other languages)
    const data = {
        breakfast: [
            { food: "pancakes", price: 5.0, vegetarian: true },
            { food: "waffles", price: 5.0, vegetarian: true },
            { food: "orange juice", price: 2.0, vegetarian: true },
        ],
        lunch: [
            { food: "turkey sandwich", price: 8.0, vegetarian: false },
            { food: "grilled cheese", price: 6.0, vegetarian: true },
            { food: "hamburger", price: 8.0, vegetarian: false },
        ],
        dinner: [
            { food: "chicken alfredo", price: 10.0, vegetarian: false },
            { food: "tofu stir-fry", price: 9.0, vegetarian: true },
            { food: "chili", price: 8.0, vegetarian: false },
        ],
    };
    // What HTML shoudl be displayed? A div containing the Menu component
    return (
        <div className="App">
            <Menu menu={data} />
        </div>
    );
}

export default App;
