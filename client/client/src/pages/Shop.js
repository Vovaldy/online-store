import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BrandBar from "../components/BrandBar";
import GameList from "../components/GameList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchGame, fetchCategory} from "../http/gameAPI";
import Pages from "../components/Pages";
import CategoryBar from "../components/CategoryBar";

const Shop = observer(() => {
    const {game} = useContext(Context)

    useEffect(() => {
        fetchCategory().then(data => game.setCategories(data))
        fetchBrands().then(data => game.setBrands(data))
        fetchGame(null, null, 1, 3).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchGame(game.selectedCategory.id, game.selectedBrand.id, game.page, 4).then(data => {
            game.setGames(data.rows)
            game.setTotalCount(data.count)
        })
    }, [game.page, game.selectedCategory, game.selectedBrand,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <CategoryBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <GameList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;