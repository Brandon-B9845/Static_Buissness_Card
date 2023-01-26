import Info from './components/Info.js'
import MainText from './components/About.js'
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Info />
      <MainText />
      <Footer />
      </header>
    </div>
  );
}

export default App;
