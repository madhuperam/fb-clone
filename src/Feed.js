import React, {useEffect, useState} from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';
import db from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) => 
        setPosts(snapshot.docs.map((doc) => ({id:doc.id, data: doc.data()})))
        );
    }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post)=> (
                <Post 
                    key={post.id}
                    profilePic ={post.data.profilePic}
                    image={post.data.image}
                    username={post.data.username}
                    timestamp={post.data.timestamp}
                    message={post.data.message}
                />
            ))}
        </div>
    )
}

export default Feed
