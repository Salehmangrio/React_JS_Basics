/* Lift State Up is process to send data from 
        child to parent */

import { useState } from 'react';
import Child from '../liftUpState/child';

function Parent() {

    const [name, setName] = useState("Parent");

    const getData = (data) => {
        //getting Data from child
        //updating to parent
        setName(data)
    }

    return (
        <>
            <h1>{name}</h1>
            {
                //getData function is being used to get data as parameter
                //   and update data in name 
            }
            <Child func={getData} />
        </>
    )
}

export default Parent;