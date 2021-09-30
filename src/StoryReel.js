import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oebT-Erez_xS7W3OpFBJY4k1WyZ4Ah3RU98ijlG_yyrstEpNnwbxpMrypdF_HQCT5_U&usqp=CAU"
                image="https://cdn.myanimelist.net/r/360x360/images/manga/3/222295.jpg?s=7610f4abfe48cd6ed7f89b30aa21f17a"
                title="Madhu"
            />
            <Story
                profileSrc="https://i.pinimg.com/originals/73/47/78/7347789b4ef2131e1de720843891bd58.jpg"
                image="https://cdna.artstation.com/p/assets/images/images/027/941/642/large/danil-luzin-solo-leveling-7.jpg?1593018968"
                title="Tanjiro"
            />
            <Story
                profileSrc="https://www.anime-planet.com/images/characters/thumbs/145910.jpg?t=1561844048"
                image="https://otakusnotes.com/wp-content/uploads/2021/07/Top-20-Strongest-Solo-Leveling-Characters-Ranked-opx.jpeg"
                title="Inosuke"
            />
            <Story
                profileSrc="https://wallpaperaccess.com/full/1111744.jpg"
                image="https://i.pinimg.com/originals/7b/46/22/7b4622e0f5a1b8b963228ec257f67c28.png"
                title="Zenitsu"
            />
            <Story
                profileSrc="https://www.enjpg.com/img/2020/nezuko-46.jpg"
                image="https://theawesomeone.com/wp-content/uploads/2020/12/Solo-Leveling-Anime-1.jpg"
                title="Nezuko"
            />
        </div>
    )
}

export default StoryReel
