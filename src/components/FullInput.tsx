import React, {ChangeEvent} from 'react';

type FullInputPropsType = {
    addMessage: ()=>void
}

export const FullInput = (props:FullInputPropsType) => {

    const [title, setTitle] = React.useState('');
    console.log(title)

    const onClickButtonHandler = () => {

    }

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    return (
        <div>
            <input onChange={()=>onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};
