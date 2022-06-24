import { useContext } from "react";
import CounterContext from "./CounterHandle";
import React from "react";

function Counter(){

    const context = React.useContext(CounterContext);

    console.log(context);

    return (
        <>
            <h1>Số: 0</h1>
            <button type="button">Tăng</button>
            <button type="button">Giảm</button>
        </>
    );

}

export default Counter;