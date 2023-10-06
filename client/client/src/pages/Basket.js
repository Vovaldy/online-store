import React, {useContext, useEffect} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import {fetchBasketGame} from "../http/gameAPI";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import BasketItem from "../components/BasketItem";

const Basket = observer(() => {
    const {user} = useContext(Context)
    const {game} = useContext(Context)
    let price = 0

    useEffect( () => {
        fetchBasketGame(user.user.id).then(data =>
        game.setBasket(data))

        },[])


    return (
        <Container>
            <Row className="mt-lg-3 mb-3">
                <h1>Ваша корзина</h1>
            </Row>
            <table className="table text-center">
                <thead>
                <tr>
                    <th scope="col">Название</th>
                    <th scope="col">Изображение</th>
                    <th scope="col">Рейтинг</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Со скидкой</th>
                </tr>
                </thead>
                <tbody>
                    {game.basket.map(game =>
                        <BasketItem key={game.game.id} game={game.game}/>
                    )}
                </tbody>
            </table>

            <Container className='sticky-lg-top'>
                {game.basket.map(game =>
                    {price = +price + +game.game.price}
                )}
                <Row>
                    <div className="col-2">
                        Общая стоимость: {price}
                    </div>
                    <div className="col-2 mb-5">
                        <Button variant={"outline-dark"}>
                            Купить
                        </Button>
                    </div>
                </Row>
            </Container>
        </Container>
    );
});

export default Basket;