import React, {useState,useEffect} from 'react';
import { animals } from '../AnimalsDb';
function AnimalTable(props) {
    
    const [randomAnimal, setRandomAnimal] = useState(null)
    const [result, setResult] = useState('');

    useEffect(() => {
        generateRandomAnimal()
    }, []);

    const generateRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random() * 10)+1;
        setRandomAnimal(animals[randomIndex]);
        setResult('');
    }

    const handleAnimalClick = (selectedAnimal) => { 
        if (selectedAnimal === randomAnimal.name) {
            setResult('Won');
        } else {
            setResult('Lost');
        }
    }

    

}

export default AnimalTable