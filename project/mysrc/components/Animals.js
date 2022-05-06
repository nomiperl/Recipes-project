import React, { useContext } from 'react';
import { Link, Outlet } from "react-router-dom";
import { AnimalsContext } from '../context/Animals.context';

export const Animals = () => {
    const { animals } = useContext(AnimalsContext);
    return <>
        <h2>מה לא חסר בגננו הנחמד:</h2>
        <ul className="animals window">
            { animals.map((p, i) => <li key={"animal"+i}> 
            <Link to={"/ourAnimals/" + (i + 1)}>{p.name}</Link></li>) }
        </ul>
        {/* כאן נכנס החלק של הניתוב שאמור להתחלף - בניתוב פנימי */}
        <Outlet />
    </>
}

// tabnine