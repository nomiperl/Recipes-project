import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = React.createContext({});

export const UserContextProvider = (props) => {
    // props.children - ערך שמור שמכיל את כל התוכן שנשלח בתוך הקומפוננטה
    const { children } = props;
    const [user, setUser] = useState({});

    useEffect(() => {
        // setTimeout(() => {
        //     setUser({ name: 'vvvv',});
        // }, 2000);
    }, []);

    const contextValue = {
        user,
        logout() { alert('logout'); },
        async signin(username, password) {
            try {
                const user = await axios.post('http://localhost:8080/user/login', {
                    username,
                    password,
                });
                setUser(user);
            } catch (error) {
                alert('error to sign in');
            }
        }
    };

    return <UserContext.Provider value={ contextValue } > 
                { children } 
            </UserContext.Provider>;
}