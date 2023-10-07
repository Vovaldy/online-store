import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {GAME_ROUTE} from "../utils/consts";
import star from "../assets/star.png"

const GameItem = ({game}) => {
    const history = useHistory()
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(GAME_ROUTE + '/' + game.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + game.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>{game.price}</div>
                    <div className="d-flex align-items-center">
                        <div>{game.rating}</div>
                        <Image src={star}/>
                    </div>
                </div>
                <div>{game.name}</div>
            </Card>
        </Col>
    );
};

export default GameItem;