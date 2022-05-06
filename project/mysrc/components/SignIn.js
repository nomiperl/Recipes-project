import React, { useContext, useState } from 'react';
import { UserContext } from '../context/User.context';

export const Signin = () => {
    const { signin } = useContext(UserContext);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const innerSignin = (e) => {
        e.prevenDefault();
        console.log('about to sign in', username, password);
        signin(username, password);
    }

    return <form onSubmit={(e) => innerSignin(e)}>
        <input type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)} /> <br />
        <input type="password" placeholder="password"  value={password} onChange={e => setPassword(e.target.value)} /> <br />
        <button type="submit"> sign in </button>
    </form>
}