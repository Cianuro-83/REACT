import './App.css';
import Clock from './Clock';
import Orologio from './Orologio';

function App() {
  return (
    <>
      <div className="App">
        <h1>La mia prima app con REACT</h1>
      </div>
      <Clock show country='ITALIA' timezone='2' />
      <Clock country='RUSSIA' timezone='3' />
      <Clock country='CUBA' timezone='-6' />
      <h3>OROLOGIO DIGITALE</h3>
      <Orologio />


    </>
  );
}

export default App;
