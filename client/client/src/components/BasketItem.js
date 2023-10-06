import React from 'react';
import Image from "react-bootstrap/Image";
const BasketItem = ({game}) => {
    return (
        <tr>
                <td>{game.name}</td>
                <td><Image width={150} height={150} src={process.env.REACT_APP_API_URL + game.img}/></td>
                <td>{game.rating}</td>
                <td>{game.price}</td>
                <td><s>{game.price}</s> -> {game.price}</td>

        </tr>
    );
};

export default BasketItem;