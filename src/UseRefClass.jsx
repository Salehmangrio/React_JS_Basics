import { Component, createRef } from "react";

class UseRefClass extends Component{
    constructor(){
        super();
        this.inputRef=createRef();
    }

    componentDidMount(){
        
    }

    getVal=()=>{
        console.log(this.inputRef.current.value); 
    }
    render(){
        return(
            <>
            <h1>useRef in Class Components</h1>
            <input type="text" ref={this.inputRef}/>
            <button onClick={()=>this.getVal()}>Click Me</button>
            </>
        )
    }
}

export default UseRefClass;