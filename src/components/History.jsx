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

export default History;
