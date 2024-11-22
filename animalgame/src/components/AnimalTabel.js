import React, {useState,useEffect} from 'react';
import { animals } from '../AnimalsDb';
import '../compo.css';
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
                    <tr>
                        <th colSpan='3'>Animal Matching Game</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td width='10%'>Result</td>
                        <td width='20%'>Animal Name</td>
                        <td width='70%'>Select the Animal</td>
                    </tr>
                    <tr>
                        <td className='result'>{result}</td>
                        <td className='randomAnimal'>{randomAnimal ? randomAnimal.name.toUpperCase() : 'Loading...'}</td>
                        <td className='animalGrid'>
                            {animals.map((animal) =>(
                                <div key={animal.name}
                                    onClick={() => handleAnimalClick(animal.name)} className="animalItem">
                                  
                                    <img src={`/assets/${animal.img}`} alt={animal.name} className='animalImage' />
                            </div> 
                            ))}
                       </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default AnimalTable;