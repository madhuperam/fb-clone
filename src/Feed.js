import React from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
import Post from './Post';

function FEed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oebT-Erez_xS7W3OpFBJY4k1WyZ4Ah3RU98ijlG_yyrstEpNnwbxpMrypdF_HQCT5_U&usqp=CAU"
                message="Yayyy its workingggg"
                timestamp="timestamp"
                username="madhu"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oebT-Erez_xS7W3OpFBJY4k1WyZ4Ah3RU98ijlG_yyrstEpNnwbxpMrypdF_HQCT5_U&usqp=CAU"
            />
            <Post 
                profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oebT-Erez_xS7W3OpFBJY4k1WyZ4Ah3RU98ijlG_yyrstEpNnwbxpMrypdF_HQCT5_U&usqp=CAU"
                message="Yayyy its workingggg"
                timestamp="timestamp"
                username="madhu"
            />
        </div>
    )
}

export default FEed
