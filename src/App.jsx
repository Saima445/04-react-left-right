import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <section>
        <p>the app is used by pressing the buttons</p>
      </section>
    );
  }
  return (
    <section>
      <p>button press history: {props.allClicks.join(" ")}</p>
    </section>
  );
};

const Button = ({ handleClick, text }) => (
  //Jos haluat konsoliin printtauksen debuggausta silmällä pitäen,
  //tee se ilman destrukturointia:
  // const Button = (props) => {
  //   console.log('props value is', props) HUOM tulostettavat asiat erotellaan pilkulla!
  //   const {handleClick, text} = props
  //   return (
  //     <button onClick={handleClick}>{text}</button>
  //   )
  // }
  <button onClick={handleClick}>{text}</button>
);

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

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
        <Button handleClick={handleLeftClick} text="left" />
        <Button handleClick={handleRightClick} text="right" />
        {right}
        <History allClicks={allClicks} />
      </div>
    </>
  );
}

export default App;
