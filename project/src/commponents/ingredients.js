import React, {useState} from 'react';

const Ingredient = (props) => {
    return <tr>
        <td>{props.content.name}</td>
        <td>{props.content.amount}</td>
        <td>{props.content.amountType}</td>
    </tr>
}

const AddIngridient = (props) => {
    
    const onSubmit = (e) => {
        e.preventDefault();
        debugger;
        props.setInAdd(false);
    }

    return <form onSubmit={onSubmit}>
        <input type=""/>
        <input type=""/>
        <select>
            <option>כף</option>
            <option>כוס</option>
            <option>כפית</option>
            <option>קורט</option>
            <option>קילו</option>
            <option>גרם</option>
            <option>ליטר</option>
            <option>מ"ל</option>
        </select>
        <button type="submit">אישור</button>
    </form>
}

export const Ingredients = (props) => {

    const [inAdd, setInAdd] = useState(false);

    return (
        <>
        <h4>המצרכים</h4>
        <table className="table">
            <tbody>
                <tr>
                    <th>שם</th><th>כמות</th><th>אופן מדידה</th>
                </tr>
                { props.ingredients.map((p,i)=><Ingredient content={p} del={()=>{props.del(i)}}/>) }
            </tbody>
        </table>
        { inAdd? <AddIngridient setInAdd={setInAdd}/>: <div onClick={()=>{setInAdd(!inAdd)}}>הוסף מוצר +</div>}
        </>
    )
}