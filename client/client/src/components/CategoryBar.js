import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ListGroup from "react-bootstrap/ListGroup";

const CategoryBar = observer(() => {
    const {game} = useContext(Context)
    return (
        <ListGroup>
            {game.categories.map(category =>
                <ListGroup.Item
                    style={{cursor: 'pointer'}}
                    active={category.id === game.selectedCategory.id}
                    onClick={() => game.setSelectedCategory(category)}
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default CategoryBar;