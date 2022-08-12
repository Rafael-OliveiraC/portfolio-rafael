import Main from "./components/main/Main"
import './app.scss'

function App() {
  const width = window.innerWidth
  if(width < 1024){
    return (
      <div className="App">
        <h1>DISPONIVEL APENAS EM DESKTOP</h1>
      </div>
    );
  }


  return (
    <Main />
  )
}

export default App
