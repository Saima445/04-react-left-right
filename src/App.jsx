import { useState } from "react";

function App() {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    // allClicks.push('L') ÄLÄ TEE NÄIN PUSHAAMALLA SUORAAN MUUTTUJAAN TAULUKKO, SEURAUKSENA VOI OLLA HANKALASTI HAVAITTAVA ONGELMA!
    const updateLeft = left + 1;
    setLeft(updateLeft);
    setTotal(updateLeft + right);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updateRight = right + 1;
    setRight(updateRight);
    setTotal(left + updateRight);
  };

  return (
    <>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(" ")}</p>
        <p>total {total}</p>
      </div>
    </>
  );
}

export default App;
