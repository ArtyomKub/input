import React from 'react';

export const FullInput = () => {

    const [title, setTitle] = React.useState('');

    const onClickHandler = () => {

    }

    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
