import React,{useState} from 'react';

function AnimalTable(props) {
    
    const [randomAnimal, setRandomAnimal] = useState(null)
    const [result, setResult] = useState('');

    useEffect(() => {
        generateRandomAnimal()
    }, []);

    const generateRandomAnimal = () => {
        const randomIndex = Math.floor(Math.random() * 10)+1;
        setRandomAnimal(props.animals[randomIndex]);
        setResult('');
    }
}