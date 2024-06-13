import React, {ChangeEvent} from 'react';

export const Input = () => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }


    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
        </div>
    );
};

