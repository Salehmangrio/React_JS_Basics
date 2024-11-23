import { Button } from "react-bootstrap"
function Child(props) {
    return (
        <>
            <hr />
            <h1>Button is in child</h1>
            <Button
                variant="dark"
                onClick={
                    //Data is sent to Parent in parameter func()
                    () => props.func("Data sent to Parent")
                }>
                Open Console
            </Button>
        </>
    )
}
export default Child