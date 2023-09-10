import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import PageFooter from './Components/PageFooter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <div>
        <PageFooter />
      </div>
    </div>
  );
}

export default App;
