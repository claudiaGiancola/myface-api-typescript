import React, { useState, useEffect } from "react";

export function PostsPage() {

    // const [myData, setMyData] = useState(null);
    // const [myData, setMyData] = useState({
    //     data: [],
    //     loading: true
    // });
    const [myData, setMyData] = useState([]);

    const getPostsPage = async () => {
        const response = await fetch("http://localhost:3001/posts");
        const result = await response.json();
        setMyData(result);
    }

    // useEffect(() => {
    //     const fetchData = async () => {
    //       const response = await fetch('http://localhost:3001/posts');
    //       const result = await response.json();
    //       setMyData({
    //         data: result,
    //         loading: false
    //       });
    //     };

    //     fetchData();
    //   }, []);

    useEffect(() => {
        getPostsPage();
        console.log(result);
    }, [])

    // useEffect(() => {
    //     fetch("http://localhost:3001/posts", { method: "GET" })
    //         .then(response => {
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log(data);
    //             setMyData(data);
    //         })
    // }, [])



    // useEffect(() => {
    //     fetch("http://localhost:3001/posts")
    //     .then(response => response.json())
    //     .then(data => setMyData(data.message))
    //   },[])


    // if (myData.loading) {
    //     return <div>Loading...</div>;
    //   }

    return (
        <>
            <div>
                Ciao
                {/* {myData && {myData}} */}

                {/* {myData} */}

                {myData.map((data: any) => {
                    return <div>{data.message}</div>
                })}

            </div>
        </>
    );

}