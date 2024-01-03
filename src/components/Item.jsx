const Item = ({ info }) => {
    return (
        <p>
            {info.food} (${info.price})
        </p>
    );
};

export default Item;
