import { PureComponent } from 'react'
import { Button } from 'react-bootstrap';

class PureComponentExample extends PureComponent {
    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    increValue=()=> {
        this.state.count<5?
        this.setState(
            { count: this.state.count + 1 }
        ):
        this.setState(
            { count: this.state.count }
        );

    }

    render() {
        console.log(`Rendering at :${this.state.count}`);
        return (
            <>
                <h1>Pure Component Example</h1><br />
                <h1>Count: {this.state.count}</h1><br />
                <Button variant='success' onClick={this.increValue}><h1>See State</h1></Button>
            </>
        )
    }
}

export default PureComponentExample;