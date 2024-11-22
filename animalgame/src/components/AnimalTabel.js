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

    return (
        <div className='container'>
            <table className='gameTable'>
                <thead>
                    <th colSpan='3'>Animal Matching Game</th>
                </thead>
                <tbody>
                    <tr>
                        <th>Result</th>
                        <th>Animal Name</th>
                        <th>Select the Animal</th>
                    </tr>
                    <tr>
                        <td className='result'>{result}</td>
                        <td className='randomAnimal'>{randomAnimal.name.toUppercase()}</td>
                        <td className='animalGrid'>
                            {animals.map((animal) =>(
                            <div>
                                    key={animal.name}
                                    onClick={() => handleAnimalClick(animal.name)}
                                    <img src={require(`./assets/${animal.image}`)} alt={animal.name} className='animalImage' />
                            </div> 
                            ))}
                       </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default AnimalTable