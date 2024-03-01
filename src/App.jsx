import { useState } from "react";
import Button1 from "./components/Button1";
import History from "./components/History";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [value, setValue] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    // allClicks.push('L') ÄLÄ TEE NÄIN PUSHAAMALLA SUORAAN MUUTTUJAAN TAULUKKO, SEURAUKSENA VOI OLLA HANKALASTI HAVAITTAVA ONGELMA!
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <>
      <div>
        {left}
        <Button1 handleClick={handleLeftClick} text="left" />
        <Button1 handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
      <hr></hr>
      <div>
        {value}
        <button onClick={() => setValue(0)}>button</button>
      </div>
    </>
  );
}

// function App(props) {
//   const [value, setValue] = useState(0);

//   return (
//     <>
//       {value}
//       <button onClick={() => setValue(0)}>button</button>
//       </>
// )}

// HUOM Hookeja siis kuuluu kutsua ainoastaan React-komponentin
// määrittelevän funktion rungosta:

// const App = (props) => {
//   // nämä ovat ok
//   const [age, setAge] = useState(0)
//   const [name, setName] = useState('Juha Tauriainen')

//   if ( age > 10 ) {
//     // ei ehtolauseessa
//     const [foobar, setFoobar] = useState(null)
//   }

//   for ( let i = 0; i < age; i++ ) {
//     // eikä myöskään loopissa
//     const [rightWay, setRightWay] = useState(false)
//   }

//   const notGood = () => {
//     // ei muiden kuin komponentin määrittelevän funktion sisällä
//     const [x, setX] = useState(-1000)
//   }

//   return (
//     //...
//   )
// }

export default App;
