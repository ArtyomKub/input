import React from 'react';

export const FullInput = () => {

    const [title, setTitle] = React.useState('');

    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} value={title} />
            <button onClick={()=>{}}>+</button>
        </div>
    );
};
