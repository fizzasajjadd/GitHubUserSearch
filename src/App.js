import './App.css';
import SearchGithub from './components/SearchGithub';


function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className='header'>
          <h1>Github Profile Search</h1>
        </div>

        <div>
          <SearchGithub
          />
        </div>
        </div>
        </div>
    

  );
}

export default App;
