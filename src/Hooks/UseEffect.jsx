import { useEffect, useState } from "react"

export default function UseEffectExample(){
    const [count,setCount]=useState(0)
    //useEffect work as componentDidMount+componentDidUpdate+componentWillUnmount
    //STYNTAX : useEffect( ()=>{} ) OR SYNTAX 2: useEffect(()=>{},[])
    // 1. if only ()=>{} passed, useEffect will be called at Mount and Each Update
    // 2. if ()=>{},[] passed, useEffect will be called only once when mounted
    // 3. if ()=>{},[dep,cep] passed, useEffect will be called only when "dep" and "cep" updated
    
    useEffect(
        ()=>{
            console.log("useEffect called");
            
        },
        [count]
    )

    return(
        <>
        <h1>USE EFFECT</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}><h1>Increment</h1></button>
        </>
    )

}