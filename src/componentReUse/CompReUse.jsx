export default function CompReUse(props) {
    const { name, email, num, image} = props.data;
    props.func()
    return (
        <div style={{
            height: "200px",
            backgroundColor: "red",
            padding: "20px",
            margin: "20px",
            borderRadius: "10px",
            boxShadow: "4px 4px 4px black",
        }
        }>
            <img src={image}
                style={{
                    position: "relative",
                    height: "100%",
                    borderRadius: "10px",
                    float: "left",
                }}
            />
            <h1 style={{ color: "white", marginLeft: "200px" }}>
                {name}</h1>
            <h2 style={{ color: "yellow", marginLeft: "200px" }}>
                {email}</h2>
            <h2 style={{ color: "blue", marginLeft: "200px" }}>
                {num}</h2>
        </div>
    )
}