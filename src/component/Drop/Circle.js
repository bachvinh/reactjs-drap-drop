import React from 'react';

function Circle(props) {
    const dragStart = e => {
        e.target.classList.add('dragging');
        e.dataTransfer.setData('circle_id', e.target.id);

        setTimeout(()=> {
            e.target.style.display = 'none';
        },0)
    }

    const dragEnd = e => {
        if(e.target.classList.contains('dragging')) {
            e.target.classList.remove('dragging')
            e.target.style.display = 'block';
        }
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDragStart={dragStart}
            onDragEnd ={dragEnd}
            draggable={props.draggable}
        >
            {props.children}
        </div>
    )
}
export default Circle;
