import React, {ChangeEvent} from 'react';

export const FullInput = () => {

    const [title, setTitle] = React.useState('');

    const onClickHandler = () => {

    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(title);
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
