import React,{ useEffect, useState }  from 'react';
import { url } from '../data/general';

export const Login = (props) => {

    const { setConfig } = props;
    const [User, setUser] = useState();

    useEffect(() => {
        setConfig(User);
    });

    const enter = (e, route, error_messege) => {
        e.preventDefault();
        const user = { 
            Name: e.target.parentElement.Name.value,
            Password: e.target.parentElement.Password.value
        }
        setUser(user);
        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // }).then(data=>{ 
        //     if (data.status === 401) {
        //         alert(error_messege);
        //     }
        //     setUser(user);
        // })
        // .catch(e=>{
        //     console.log(e);
        // })
    }

    return <form id="login" className="container p-5 my-5">
        <h4>התחברות</h4>
        <label htmlFor="name" className="form-label">שם משתמש</label>
        <input type="text" className="form-control" name="Name" required minLength="2"/>
        <label htmlFor="password" className="form-label">סיסמא</label>
        <input type="password" className="form-control" name="Password" required/><br/>
        <button className="btn btn-outline-info" onClick={(e)=>{enter(e, 'Login', 'שם המשתמש או הסיסמא שגויים')}}>כניסה</button>
        <button className="btn btn-outline-info btn-group" onClick={(e)=>enter(e, 'New', 'שם המשתמש כבר קיים')}>פתיחת חשבון חדש</button>    
    </form>;
     
}