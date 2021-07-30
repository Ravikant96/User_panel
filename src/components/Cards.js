import React from 'react'
import Card from './Card';

function Cards(props) {

    const { users } = props;

    return (
        <div className="cards">
            {users.map(c => (<Card key={c.Id} user={c} />))}
        </div>
    )
}

export default Cards
