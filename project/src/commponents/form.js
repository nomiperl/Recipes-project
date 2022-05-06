import React, { useState } from 'react';
import { Ingredients } from './ingredients';
import { Stages } from './Stages';

export const Form = ()=> {

    const [ ingredients, setIngridients ] = useState([]);

    const delIngridient = (i) => {
        setIngridients(ingredients.filter((p,index)=>index!==i));
    }

    const addIngridient = (ingridient) => {
        setIngridients(ingredients.concat(ingridient));
    }

    const [ stages, setStages ] = useState([]);

    const delStage = (i) => {
        setStages(stages.filter((s,index)=>index!==i));
    }

    const addStage = (stage) => {
        setStages(stages.concat(stage));
    }

    const tabs = [
        {
            id: "information",
            title: "אודות", 
            content: <></>},
        {
            id: "ingredients",
            title: "מצרכים",
            content: <Ingredients ingredients={ingredients} del={delIngridient} add={addIngridient}/>
        },
        {
            id: "preparation_stages",
            title: "שלבי הכנה",
            content: <Stages stages={stages} del={delStage} add={addStage}/>
        },
    ];

    const submit = () => {
        
    }

    return <form onSubmit={submit}>
        <h1>מתכון חדש</h1>
        <ul className="nav nav-tabs">
            { tabs.map((t,i)=><li key={i+"link"} className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href={'#'+t.id}>{t.title}</a>
            </li>)}
        </ul>
       <div className="tab-content">
            { tabs.map((t,i)=><div key={i+"content"} className="tab-pane container fade" id={t.id}>
                {t.content}
            </div>)}
       </div>
    </form>
}