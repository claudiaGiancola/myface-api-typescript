import { useState, useEffect } from "react";
import { User } from "./users";
import { UserModel } from "./users";

export function UserDetails(props: User) {

    // const [detailsData, setDetailsData] = useState<User | null>(null);

    // const getUsersPage = async () => {
    //     const response = await fetch(`http://localhost:3001/users/{${props.id}}`);
    //     const data = await response.json();
    //     const results = data.results;

    //     console.log(results);
    //     setUserData(results);
    // }

    // useEffect(() => {
    //     getUsersPage();
    // }, [])

    return (
        // <p>{props.name}</p>
        <p>THIS USER</p>
    )

}
