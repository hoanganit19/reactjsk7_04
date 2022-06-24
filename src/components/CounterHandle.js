import React from "react";
import { useState } from "react";
import { useContext } from "react";

const CounterContext = React.createContext();

function CounterHandle(){

    const [count, setCount] = useState(1);

    const countUp = () => {
        let newCount = count+1;
        setCount(newCount);
    }

    const countDown = () => {
       
        let newCount = count-1;
        setCount(newCount);
    }

    const counterObj = {
        count: count,
        countUp: countUp,
        countDown: countDown
    }

    return (
       <CounterContext.Provider value={counterObj}>
            <Counter />
       </CounterContext.Provider>
    );
}

function Counter(){

    const context = useContext(CounterContext);

    return (
        <>
            <h1>Số: {context.count}</h1>
            <button type="button" onClick={context.countUp}>Tăng</button>
            <button type="button" onClick={context.countDown}>Giảm</button>
        </>
    );

}



export default CounterHandle;