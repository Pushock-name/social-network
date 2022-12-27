import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';



const App = (props) => {
  return (
        <div className='app__wrapper'>
          <Header />
          <main className='main'>
            <Navbar />
            <div className='content'>
              <Routes>
                <Route path='/profile' 
                  element={<Profile  
                  store={props.store}/>} />
                <Route path='/dialogs/*' 
                  element={<DialogsContainer
                  store={props.store} />} />
              </Routes>
            </div>    
          </main>  
        </div>
  )
}

export default App;
