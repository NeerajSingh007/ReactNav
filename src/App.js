// import logo from './logo.svg';
// import './App.css';
import "./nav.css"

function App() {
  var arr = ["Services","Projects","About"];
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo"><h1>LOGOBAKERY</h1></div>
        <div className="links">{arr.map((el) =>{
           return <p className="gap">{el}</p>
        })}</div>
        <div><button className="but">Contact</button></div>
      </div>
    </div>
  );
}



export default App;
