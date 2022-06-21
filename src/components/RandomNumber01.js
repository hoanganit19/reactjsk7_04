import React from "react";

export default class RandomNumber01 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number: 0
        };
    }

    randomNumber = () => {
        const number = Math.round(Math.random() * 100);
        this.setState({
            number: number
        });
    }

    render(){
        return (
            <>
                <h2>{this.state.number}</h2>
                <button type="button" onClick={this.randomNumber}>
                    Random
                </button>
            </>
        );
    }
 }