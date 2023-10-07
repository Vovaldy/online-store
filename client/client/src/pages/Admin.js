import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateGame from "../components/modals/CreateGame";
import CreateCategory from "../components/modals/CreateCategory";
import DeleteBrand from "../components/modals/DeleteBrand";
import DeleteGame from "../components/modals/DeleteGame";
import DeleteCategory from "../components/modals/DeleteCategory";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [gameVisible, setGameVisible] = useState(false)
    const [brandDeleteVisible, setBrandDeleteVisible] = useState(false)
    const [categoryDeleteVisible, setCategoryDeleteVisible] = useState(false)
    const [gameDeleteVisible, setGameDeleteVisible] = useState(false)

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
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setCategoryDeleteVisible(true)}
            >
                Удалить категорию
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandDeleteVisible(true)}
            >
                Удалить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setGameDeleteVisible(true)}
            >
                Удалить игру
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateGame show={gameVisible} onHide={() => setGameVisible(false)}/>
            <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
            <DeleteBrand show={brandDeleteVisible} onHide={() => setBrandDeleteVisible(false)}/>
            <DeleteGame show={gameDeleteVisible} onHide={() => setGameDeleteVisible(false)}/>
            <DeleteCategory show={categoryDeleteVisible} onHide={() => setCategoryDeleteVisible(false)}/>
        </Container>
    );
};

export default Admin;