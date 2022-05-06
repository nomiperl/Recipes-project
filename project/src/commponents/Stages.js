import React from 'react';

const Stage = (props) => {
    return <tr>
        <td>{props.content.name}</td>
        <td>{props.content.desc}</td>
    </tr>
}

export const Stages = (props) => {

    return (
        <>
        <h4>שלבי ההכנה</h4>
        <table className="table">
            <tbody>
                <tr>
                    <th>שם</th><th>תאור</th>
                </tr>
                { props.stages.map((p,i)=><Stage content={p} del={()=>{props.del(i)}}/>) }
            </tbody>
        </table>
        
        </>
    )
}