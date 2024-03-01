const Button1 = ({ handleClick, text }) => (
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

export default Button1;
