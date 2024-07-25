import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Post, PostModel } from "./posts";

export interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    profileImageUrl: string,
    coverImageUrl: string,
    posts: Array<PostModel>,
    likes: Array<PostModel>,
    dislikes: Array<PostModel>
}

export interface UserModel {
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
                    <Link to={`/users/${user.id}`}>
                    <p>{user.name}</p>
                    <img className="profile-pic" src={user.profileImageUrl}/></Link>
                </div>
            ))}
        </div>
        
        </>
    )

}