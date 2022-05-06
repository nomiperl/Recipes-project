import React, { useState } from 'react';


export const Header = () => {

    const ichul = ["לילה טוב","לפנות-בוקר טוב","בוקר אור","בוקר טוב","צהרים טובים","אחר-צהרים טובים","ערב טוב","לפנות-לילה טוב"];
    const date = Date();
    const hourIndex = date.indexOf(':');
    const houre = parseInt(date.slice(hourIndex-2,hourIndex));

    const [time, setTime] = useState(houre);

    setTimeout(()=>{setTime(time+6)},(3-houre%3)*1000*60*60);

    return <div id="header">
        <span>מתכוניאדה</span>
        <span>{ichul[Math.floor(houre/3)]}</span>
        <a className="btn btn-info" href='http://localhost:3000/'>החלף משתמש</a>
    </div>
}