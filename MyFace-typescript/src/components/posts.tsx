import { useState, useEffect } from "react";

interface PostModel {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    postedBy: string,
}

export function PostsPage() {

    const [myData, setMyData] = useState<PostModel[] | null>(null);

    const getPostsPage = async () => {
        const response = await fetch("http://localhost:3001/posts");
        const data = await response.json();
        const results = data.results;

        console.log(results);
        setMyData(results);
    }

    useEffect(() => {
        getPostsPage();
    }, [])

    if (!myData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {myData.map((post) => (
                <div>
                    <h4>Posted by: {post.postedBy.username}</h4>
                    <p>{post.id}</p>
                    <p>{post.message}</p>
                    <img src={post.imageUrl}/>
                    <p>{post.createdAt}</p>
                </div>
            ))}
        </div>
    )

}