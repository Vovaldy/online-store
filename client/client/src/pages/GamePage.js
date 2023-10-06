import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from 'react-router-dom'
import {createBasketGame, fetchOneGame} from "../http/gameAPI";
import {ADMIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useHistory} from 'react-router-dom'
import {Context} from "../index";

const GamePage = () => {
    const [game, setGame] = useState({info: []})
    const [toBasketVisible, setToBasketVisible] = useState('none')
    const [addBasketVisible, setAddBasketVisible] = useState('flex')
    const [toRegistrationVisible, setToRegistrationVisible] = useState('flex')
    const {id} = useParams()
    const {user} = useContext(Context)
    const history = useHistory()
    useEffect(() => {
        fetchOneGame(id).then(data => setGame(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + game.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{game.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {game.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray', marginBottom : '0px'}}
                    >
                        <h3>От: {game.price} руб.</h3>
                        <div>
                            {user.isAuth ?
                                <Button variant={"outline-dark"}
                                        style={{display: `${addBasketVisible}`}}
                                        onClick={() => {
                                            createBasketGame(user.id, game.id)
                                            setToBasketVisible('flex')
                                            setAddBasketVisible('none')
                                            setToRegistrationVisible('none')
                                        }}>
                                    Добавить в корзину
                                </Button>
                                :
                                <Button variant={"outline-dark"}
                                        style={{display: `${toRegistrationVisible}`}}
                                        onClick={() => {
                                            history.push(REGISTRATION_ROUTE)
                                        }}>
                                    Авторизуйтесь
                                </Button>
                            }
                            <Button variant={"outline-dark"}
                                    style={{display: `${toBasketVisible}`}}
                                    onClick={() => {
                                        history.push(BASKET_ROUTE)
                                    }}
                            >
                                Добавлено
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {game.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default GamePage;