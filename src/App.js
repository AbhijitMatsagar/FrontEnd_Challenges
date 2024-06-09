import logo from './logo.svg';
import './App.css';
import BoxContainer from './BoxContainer';

function App() {
  const boxMatrix = [
    [1, 1, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [0, 1, 1, 1]
  ]
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
      <BoxContainer boxMatrix={boxMatrix}  />
    </div>
  );
}

export default App;
