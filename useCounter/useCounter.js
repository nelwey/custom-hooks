import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }
    const decrement = () => {
        if (counter === 0) return;
        setCounter((current) => current - 1);
    }
    const reset = () => {
        setCounter(10);
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }
}