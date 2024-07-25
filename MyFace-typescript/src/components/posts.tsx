import { useState, useEffect } from "react";
// import { getPageOfPosts } from "../../../src/services/postService.ts";
import { User } from "./users";

export interface Post {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    postedBy: User,
    likedBy: Array<User>,
    dislikedBy: Array<User>
}

export interface PostModel {
    id: number,
    message: string,
    imageUrl: string,
    createdAt: string,
    postedBy: User,
    likedBy: Array<User>,
    dislikedBy: Array<User>
}

// export interface PageOfPosts {
//     results: Array<T>,
//     next: string | null,
//     previous: string | null,
//     total: any
// }

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
        <>
        <div>
            {myData.map((post) => (
                <div>
                    <h4>Posted by: {post.postedBy.username}</h4>
                    <p>{post.message}</p>
                    <img className="post-img" src={post.imageUrl} />
                    <p>{post.createdAt}</p>
                    {post.likedBy.length === 1 ? (
                        <p>{post.likedBy.length} like</p>
                    ) : (
                        <p>{post.likedBy.length} likes</p>
                    )}
                    {post.likedBy.length === 1 ? (
                        <p>{post.dislikedBy.length} dislike</p>
                    ) : (
                        <p>{post.dislikedBy.length} dislikes</p>
                    )}
                </div>
            ))}
        </div>

        <div className="page-turner">

        {/* <a href={getPageOfPosts.previous}>Previous</a>
        <a href={getPageOfPosts.next}>Next</a> */}

{/*         
            {getPagesOfPosts.previous ? (
                <a href={getPagesOfPosts.previous}>Previous</a>
            ) : (
                <div></div>
            ) }; */}
            

        </div>

        </>
    )

}