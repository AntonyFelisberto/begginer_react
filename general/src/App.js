import './App.css';

function App() {

  const n = 10
  const name = 'Artorias'

  const handleMyEvent = (e) => {
    console.log(e)
  }

  const renderSomething = (x) => {
    if(x){
      return <h1>O dado é verdadeiro</h1>
    }else {
      return <h1>O dado é falso</h1>
    }
  }

  return (
    <div className="App">
      <button onClick={handleMyEvent}>Clique aqui</button>
      <button onClick={()=> console.log("hello")}>Clique aqui</button>
      <button onClick={()=> {
        if(true){
          console.log("hellos")
        }
      }}>Clique aqui
      </button>

      <h2 style={n < 10 ? {color:"purple"} : {color:"pink"}}>Dinamico</h2>
      <h2 style={n > 10 ? {color:"purple"} : {color:"pink"}}>Dinamico</h2>
      <h2 style={name === "Artorias" ? {color:"purple",backgroundColor:"blue"} : "none"}>Dinamico</h2>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
}

export default App;
