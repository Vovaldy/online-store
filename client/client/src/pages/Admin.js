import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateGame from "../components/modals/CreateGame";
import CreateCategory from "../components/modals/CreateCategory";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCategoryVisible(true)}
            >
                Добавить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setGameVisible(true)}
            >
                Добавить игру
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
        </Container>
    );
};

export default Admin;