import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import { About } from './components/About';
import { Animals } from './components/Animals';
import { Settings } from './components/Settings';
import { Animal } from './components/Animal';
import { Signin } from './components/SignIn';
import { UserContextProvider } from './context/User.context';
import { AnimalsContextProvider } from './context/Animals.context';


const routes = [{
    route: 'about',
    Component: <About/>,
    name: 'אודות',
    content: <></>
}, {
    route: 'settings',
    Component: <UserContextProvider><Signin /><Settings/></UserContextProvider>,
    name: 'הרשמה',
    content: <></>
}, {
    route: 'ourAnimals',
    Component: <AnimalsContextProvider><Animals /></AnimalsContextProvider>,
    name: 'החיות שלנו',
    content: <Route path=":animalIndex"  element={<Animal/>}/>
}];

function App() {
    return ( 
    <div className = "App" >
        <header>
            <h1>ברוכים הבאים לגן החיות</h1>
        </header>
        <menu >
        <ul > 
             { routes.map(route => < li key = { route.route } >
             < Link to = { route.route } > { route.name } </Link>
              </li > ) } 
        </ul>
        </menu >
        <div >
            <Routes >  
                {
                   routes.map(route => <Route key={route.name} path={route.route} element={route.Component}>{route.content}</Route>)
                }
            </Routes> 
        </div>
    </div>
    );
}

export default App;
