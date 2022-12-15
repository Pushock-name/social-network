import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';




const App = () => {
  return (
    <div className="app__wrapper">
      <Header />
      <main className='main__content'>
        <Navbar />
        <Profile />
      </main>  
    </div> 
  );  
}

export default App;
