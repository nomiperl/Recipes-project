import './App.css';
import { Login } from './commponents/Login';
import { Header } from './commponents/Header';
import { Menu } from './commponents/Menu';
import { useState } from 'react';

function App() {

    const [currentUser, setCurrentUser] = useState(null)

    return ( 
    <div className = "App" >
        <Header/>
        {
            currentUser==null? <Login setConfig={setCurrentUser}/>: ''
        }
        <div className = "appContent">
            <Menu/>
        </div>
    </div >
    );
}

export default App;

