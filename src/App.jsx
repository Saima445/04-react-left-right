import { useState } from "react";
import Button1 from "./components/Button1";
import History from "./components/History";
import Button2 from "./components/Button2";
import Display from "./components/Display";

function App(props) {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const [value, setValue] = useState(10);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    // allClicks.push('L') ÄLÄ TEE NÄIN PUSHAAMALLA SUORAAN MUUTTUJAAN TAULUKKO, SEURAUKSENA VOI OLLA HANKALASTI HAVAITTAVA ONGELMA!
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  // const handleClick = () => {
  //   console.log("clicked the button");
  //   setValue(0);
  // };

  const hello = (who) => () => {
    console.log("hello", who);
  };

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
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
        {/* {value} */}
        <button onClick={hello("world")}>button</button>
        <button onClick={hello("react")}>button</button>
        <button onClick={hello("function")}>button</button>
      </div>
      <hr></hr>
      <div>
        <Display value={value} />
        <Button2 handleClick={() => setToValue(1000)} text="thousand" />
        <Button2 handleClick={() => setToValue(0)} text="reset" />
        <Button2 handleClick={() => setToValue(value + 1)} text="increment" />
      </div>
    </>
  );
}

// HUOM Hookeja siis kuuluu kutsua ainoastaan React-komponentin
// määrittelevän funktion rungosta. JA älä koskaan määrittele komponenttia toisen komponentin sisällä.

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
