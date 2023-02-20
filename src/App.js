import './App.css';
import Navbar from './components/Navbar';
import JavaScriptProjects from './components/JavascriptProjects'
import BusinessCard from './components/BusinessCard';
import ButtonsSelection from './components/buttons';

function App() {
  return (
    <span className="App">
      <Navbar />
        <div className='container'>
          <BusinessCard />
          <ButtonsSelection />
          <JavaScriptProjects />
        </div>
    </span>
  );
}

export default App;