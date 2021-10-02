import { Avatar } from '@mui/material';
import React from 'react';
import "./MessageSender.css";
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import  { useState } from "react";
import { useStateValue } from './StateProvider';

function MessageSender() {
    const [{user}, dispatch] = useStateValue();
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();  //this prevents refreh of the page

        setImageUrl("");
        setInput("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        value = {input}
                        onChange = {(event) => setInput(event.target.value)}
                        className="messageSender__input"
                        placeholder={`What's on your mind, ${user.displayName}?`}></input>
                    <input 
                        value = {imageUrl}
                        onChange = {(e) => {setImageUrl(e.target.value)}}
                        placeholder={"image URL (Optional)"}></input>
                    <button onClick={handleSubmit} type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <EmojiEmotionsOutlinedIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
