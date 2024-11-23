import CompReUse from "./CompReUse";
import img from "./../assets/car.png"

function CompUser() {

    const UserData = [
        {
            name: "Saleh",
            email: "Saleh@example.com",
            num: "03284740",
            image: img
        },
        {
            name: "Ali",
            email: "Ali@example.com",
            num: "87274652",
            image: img
        },
        {
            name: "Saleem",
            email: "Saleem@example.com",
            num: "657284740",
            image: img
        },
        {
            name: "Amjad",
            email: "amjad@example.com",
            num: "878799652",
            image: img
        },
    ]

    const getValue = () => {
        console.log("Function is used as props");
    };

    return (
        <>
            {
                UserData.map(
                    (user, index) =>
                        <CompReUse key={index} data={user} func={getValue} />
                )
            }
        </>
    )
}

export default CompUser