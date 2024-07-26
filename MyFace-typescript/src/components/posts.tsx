import { useState, useEffect } from "react";
import { User } from "./users";
// import { getPageOfPosts } from "../../../src/services/postService.ts";

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

export function PostsPage() {

    let postsUrl: string = "http://localhost:3001/posts";

    const [myData, setMyData] = useState<PostModel[] | null>(null);

    const [nextPg, setNextPg] = useState<string>("/posts");
    // const [previousPg, setPreviousPg] = useState<string | null>(null);

    const getPostsPage = async () => {
        // const response = await fetch(`http://localhost:3001/posts/`);
        const response = await fetch(postsUrl);

        const data = await response.json();
        const results = data.results;

        const previous = data.previous;
        const next = data.next;
        // "next": "/posts/?page=2&pageSize=1",

    
        setMyData(results);
        setNextPg(next);
        // setPreviousPg(previous);
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


                {/* <a>***** PREVIOUS *****</a> <br/> */}
                <a href={`http://localhost:5173${nextPg}`}>***** NEXT *****</a>


            </div>

        </>
    )

}