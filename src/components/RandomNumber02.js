import { useState } from "react";

export default function RandomNumber02(){

    const [number, setNumber] =  useState(0);

    const randomNumber = () => {
        const number = Math.round(Math.random() * 100);
        setNumber(number);
    }

    return (
        <>
            <h2>Số: {number}</h2>
            <button type="button" onClick={randomNumber}>
                Random
            </button>
        </>
    );

}