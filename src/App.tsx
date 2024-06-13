import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/FullInput';
import {Input} from './components/Input';
import {Button} from './components/Button';

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
        ]
    )

    let [title, setTitle] = React.useState('');
    console.log(title)

    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    }

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <div>
                <div>First principal</div>
                <FullInput addMessage={addMessage}/>
            </div>
            <div>
                <div>Second principal</div>
                <Input title={title} setTitle={setTitle}/>
                <Button name={'+'} callBack={callBackButtonHandler}/>
            </div>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}


export default App;
