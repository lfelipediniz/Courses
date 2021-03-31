import { useState } from 'react';

interface ButtonProps { // 'type' could also be used

    color: string;
    children: string;
}

export function Button(props: ButtonProps) { // button 
    
    const [counter, setCounter] = useState(1);

    function increment() {

        setCounter(counter + 1); // this CREATES a new value for variable     
    }

    return (

        <button

        type='button'
        style={{backgroundColor: props.color }}
        onClick= {increment} >

        {props.children} <strong>{counter}</strong>

        </button>
    )
    
}