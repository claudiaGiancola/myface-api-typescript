import React, { useState, useEffect } from "react";

export function Posts() {
    
    const [myData, setMyData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/posts")
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                setMyData(data);
            })
    }, [])

    if (!myData) {
        return <div>Waiting for data</div>
    }

    return (
        <>
            <div>
                Ciao
                {/* imageUrls.map(imageUrls => {
                        return <img className={`thumbnails ${props.selectedImgUrl === imageUrls ? "selected-thumb" : ""}`} onClick={() => (props.selectImg(imageUrls))} src={imageUrls} />
                    }) */}

                {/* {myData && {myData.results.map(post: any => {
                    return <p>{post.message}</p>
                })}} */}

                {/* {myData && {myData.results}} */}
            </div>
        </>
    );

}