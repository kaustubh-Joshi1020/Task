import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Pumps from './components/Pumps';
import Footer from './components/Footer';

function App() {
  return (
    <div className='home'>
      <Header/>
      <Content/>
      <Pumps/>
      <Footer/>
    </div>
  );
}

export default App;
