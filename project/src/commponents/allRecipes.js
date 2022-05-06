import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.production.min';
import { url } from '../data/general';
import { url2 } from '../data/general';

export const AllRecipes = () => {

    const [allRecipes, setAllRecipes] = useState([]);
    // useEffect(()=>{
    //     get();
    // },[]);
    // const get = () => {
    //     console.log("get function");
    //     fetch(`https://localhost:44344/api/recipes`, {
    //         mode: 'no-cors',
    //         method: 'GET',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => { 
    //         setAllRecipes(data); })
    //         .catch(error => console.error('Unable to get items.', error));
    // }

    const get = () => {
        axios.get(url2)
            .then(data=>{
              
                setAllRecipes(data.data);
                

                
            }
            

            )
            .catch(err=>{
                console.log(err)
            })
    }

// get();
    return <div>
        <h1>המתכונים שלנו</h1>
        {/* <button onClick={get}>Get Request</button> */}
       
        <button onClick={get}>כל המתכונים</button>
        {allRecipes.map(recipe => <h2>{JSON.stringify(recipe.name)}</h2>)}
            {/* {allRecipes.map(recipe => <h2>{JSON.stringify(recipe)}</h2>)}
         */}
    </div>
}