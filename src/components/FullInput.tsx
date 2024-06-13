import React, {ChangeEvent} from 'react';

export const FullInput = () => {

    const [title, setTitle] = React.useState('');
    console.log(title)

    const onClickHandler = () => {

    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    return (
        <div>
            <input onChange={()=>onChangeInputHandler}/>
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};
