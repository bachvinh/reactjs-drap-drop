import React from 'react';

function Box(props) {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('circle_id');
        const card = document.getElementById(card_id);

        e.target.appendChild(card);

    }

    const drapOver = e => {
        e.preventDefault();

    }

    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={drapOver}
            className={props.className}
        >
            {props.children}
        </div>
    )
}
export default Box;
