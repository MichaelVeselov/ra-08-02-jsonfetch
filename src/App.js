import DataRequest from './components/DataRequest';
import './App.css';

const url = 'http://localhost:7070';

function App() {
  return (
    <div className='App'>
      <h1>React App...</h1>
      <DataRequest url={`${url}/data`} />
      <DataRequest url={`${url}/loading`} />
      <DataRequest url={`${url}/error`} />
    </div>
  );
}

export default App;
