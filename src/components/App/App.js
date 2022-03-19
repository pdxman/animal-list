import './App.css';

import animals from './data'
import AnimalCard from '../AnimalCard/AnimalCard';

console.log('animals? ', animals)

function App() {
  return (
    <div className="App">
        <h1>Animals List</h1>
        <div className="wrapper">
           {animals.map(animal => 
           <AnimalCard 
             diet={animal.diet}
             key={animal.name}
             name={animal.name}
             size={animal.size}
             scientificName={animal.scientificName}
           />
        )}
        </div>
    </div>
  );
}

export default App;
