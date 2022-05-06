import React, { useContext } from 'react';
import { UserContext } from '../context/User.context';


export const About = (props) => {
    const { children } = props;
    const { logout } = useContext(UserContext);
    return <div>
        <h2> אודות גן החיות { children } </h2>
        <h3><div class="window">גן החיות הוקם בשנת 2021, ע"י תלמידת-תכנות 
        משועממת, במטרה למלא אחר משימת שעורי הבית שניתנו 
        במסגרת קורס ריאקט רב חשיבות.
        גן החיות הינו טרי למדי אך בעל סיכוי טוב להתפתח.
        לתרומות ניתן לפנות להנהלת הגן, בכתובת http://localhost:3000
        </div></h3>
        <button  onClick={logout}> ליציאה </button>
    </div>
}