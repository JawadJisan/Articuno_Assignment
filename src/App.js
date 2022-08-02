import './App.css';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar';
import Shipping from './components/Shipping';

function App() {
  return (
    <div className='ml-14 mr-14'>
      <Navbar></Navbar>
      <hr className='h-4' />
      <Shipping/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
