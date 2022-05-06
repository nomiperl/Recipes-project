import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import { AllRecipes } from './allRecipes';
import { Content } from './Content';
import { Form } from './form';


export const Menu = () => {

    const routes = [
        {name: "מתכון חדש", route: "newRecipe", element: <Form/>},
        {name: "כל המתכונים", route: "allRecipes", element: <AllRecipes/>},
    ]

    return <>
        <div id="globalMenu">
            { routes.map((r,i)=><Link to={r.route} className="btn btn-outline-success" key={"link"+i}>{' '+r.name+' '}</Link>) }
        </div>
        <div id="localMenu">
        <Routes>
            {routes.map(((r,i)=><Route key={"route"+i} path={r.route} element={r.element}>
                <Route path=":Index" element={<Content src={r.route}/>}/>
            </Route>))}
        </Routes>
        </div>
    </>
}