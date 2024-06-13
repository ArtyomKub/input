import React from 'react';

type ButtonPropsType = {
    name: string;
    callBack: () => void
}

export const Button = () => {
    return (
        <div>
            <button>+</button>
        </div>
    );
};

