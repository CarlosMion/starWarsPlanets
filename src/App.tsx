import './App.css';

import Planets from '../Planets';

const App = () => {
  console.log(usePlanets());
  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <Planets />
    </div>
  );
};

export default App;
