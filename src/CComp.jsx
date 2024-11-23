import React, { Component } from 'react';
export class CComp extends React.Component {

    //FIRST ONE TO RUN IN LIFE-CYLCE is CONSTRUCTOR
    constructor() {
        super() //Always use to use "this" keyword or anything else
        this.state = {
            name: "Saleh",
            adr: "Sanghar",
            date: new Date().toTimeString().substring(0, 9)
        }

        console.log("Constructor Called");
    }

    changeData = () => {
        this.setState({
            name: "Ali",
            adr: "UAE",

        })
    }

    // This will run only once, when first component is completely rendered
    //constructor -> render -> this method
    componentDidMount() {
        console.log("componentDidMount called");
    }

    //this will run only when state is updated in component
    componentDidUpdate() {
        console.log("componentDidUpdate called");
        this.timeoutID = setTimeout(() => {
            this.setState({
                date: new Date().toTimeString().substring(0, 9)
            })
        }, 1000)
    }

    //Controlls ComponentDidUpdate =>render update OR not
    shouldComponentUpdate() {
        return true //render-update

        //render update MEANS change state on front-End
    }

    //called when this class Component will be removed
    componentWillUnmount() {
        console.warn("Class Component is No More!!");
        clearTimeout(this.timeoutID)

    }
    //constructor -> this method
    render() {
        console.log("Render");
        return (
            <>
                <h1>Hello from Class Component</h1>
                <h2>Name : {this.state.name}</h2>
                <h3>Address: {this.state.adr}</h3>
                <button onClick={this.changeData}>Change Data</button>
                {/* This is my Date Player 
                <h1>{this.state.date}</h1>*/}
            </>
        )
    }
}