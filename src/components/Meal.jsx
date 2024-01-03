import Item from "./Item.jsx";
const Meal = ({ name, items, onlyVegetarian }) => {
    let itemsToDisplay = items;
    if (onlyVegetarian) {
        // If onlyVegetarian is true, filter out the non-vegetarian options
        itemsToDisplay = items.filter((item) => item.vegetarian === true);
    }
    // What should be displayed? The meal name and the Item components
    return (
        <>
            <h2>{name}</h2>
            {itemsToDisplay.map((item) => (
                <Item info={item} />
            ))}
        </>
    );
};

export default Meal;
