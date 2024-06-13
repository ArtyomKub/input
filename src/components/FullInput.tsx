import React from 'react';

export const FullInput = () => {

    const [title, setTitle] = React.useState('');

    const onClickHandler = () => {

    }

    const onChangeInputHandler = () => {
        setTitle(title);
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
