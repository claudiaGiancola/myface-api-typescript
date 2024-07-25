import { useState, useEffect } from "react";
import { User } from "./users";
import { UserModel } from "./users";
import { useParams } from "react-router-dom";

export function UserDetails() {

    const { id } = useParams();

    const [detailsData, setDetailsData] = useState<User | null>(null);

    const getDetailsData = async () => {
        const response = await fetch(`http://localhost:3001/users/${id}`);
        const details = await response.json();

        console.log(details);
        setDetailsData(details);
    }

    useEffect(() => {
        getDetailsData();
    }, [])

    if (!detailsData) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>
                <img className="cover-pic" src={detailsData.coverImageUrl} />
                <img className="profile-pic" src={detailsData.profileImageUrl} />
                <p>ID: {id}</p>
                <p>Name: {detailsData.name}</p>
                <p>Username: {detailsData.username}</p>
            </div>
            <h4>USER POSTS:</h4>
            <div className="flex-container">
                {detailsData.posts.map((post) => (
                    <div>
                        {/* <h4>Posted by: {post.postedBy.username}</h4> */}
                        <p>{post.message}</p>
                        <img className="post-img" src={post.imageUrl} />
                        <p>{post.createdAt}</p>
                        {/* {post.likedBy.length === 1 ? (
                        <p>{post.likedBy.length} like</p>
                    ) : (
                        <p>{post.likedBy.length} likes</p>
                    )} */}
                        {/* {post.likedBy.length === 1 ? (
                        <p>{post.dislikedBy.length} dislike</p>
                    ) : (
                        <p>{post.dislikedBy.length} dislikes</p>
                    )} */}
                    </div>
                ))}
            </div>
            <h4>LIKED POSTS:</h4>
            <div className="flex-container">
                {detailsData.likes.map((post) => (
                    <div> <p>{post.message}</p>
                        <img className="post-img" src={post.imageUrl} />
                        <p>{post.createdAt}</p>
                    </div>
                ))}
            </div>
            <h4>DISLIKED POSTS:</h4>
            <div className="flex-container">
                {detailsData.dislikes.map((post) => (
                    <div> <p>{post.message}</p>
                        <img className="post-img" src={post.imageUrl} />
                        <p>{post.createdAt}</p>
                    </div>
                ))}
            </div>
        </>
    )

}
