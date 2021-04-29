import './App.css';
import Photos from './components/Photos';
import './components/Photos.module.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Zdes budet nazvanie, naverno </h1>
        <Photos />
      </div>
    </div>
  );
}

export default App;
