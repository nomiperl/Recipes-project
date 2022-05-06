import React, { useState } from 'react';
import { animals } from '../data/animals';

export const AnimalsContext = React.createContext({});

export const AnimalsContextProvider = (props) => {
    const [_animals, setAnimals] = useState(animals);

    const contextValue = {
        animals: _animals,
        addAnimal(animal) {
            setAnimals([..._animals, animal]);
        }
    };

    return <AnimalsContext.Provider value={contextValue} >
        {props.children}
    </AnimalsContext.Provider>
}