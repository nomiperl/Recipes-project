import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AnimalsContext } from '../context/Animals.context';

export const Animal = () => {

    const { animals } = useContext(AnimalsContext);

    // hook שמכיל את כל הפרמטרים מה url
    const { animalIndex } = useParams();
    const animal =  animals[parseInt(animalIndex-1)];
    return <>
        { animal? <><h2>{animal.name}</h2><h3> כמות: { animal.amount }</h3><h3>פרוט: </h3>
        <div class="window"> {animal.desc} </div></> : <h2>אין מידע במערכת</h2>} 
    </>
     
}