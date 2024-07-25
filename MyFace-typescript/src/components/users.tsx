import { useState, useEffect } from "react";
import { User } from "./posts"

interface Post {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    postedBy: User,
    likedBy: Array<User>,
    dislikedBy: Array<User>
}

interface UserModel {
    id: number,
    name: string,
    username: string,
    email: string,
    coverImageUrl: string,
    profileImageUrl: string,
    posts: Array<Post>,
    likes: Array<Post>,
    dislikes: Array<Post>
}

export function UsersPage() {

    const [userData, setUserData] = useState<UserModel[] | null>(null);

    const getUsersPage = async () => {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        const results = data.results;

        console.log(results);
        setUserData(results);
    }

    useEffect(() => {
        getUsersPage();
    }, [])

    if (!userData) {
        return <div>Loading...</div>;
    }

    return (
        <>
        <div>
            {userData.map((user) => (
                <div>
                    <p>{user.name}</p>
                    <img src={user.profileImageUrl}/>
                </div>
            ))}
        </div>
        </>
    )

}