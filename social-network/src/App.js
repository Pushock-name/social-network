import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {
  return (
        <div className='app__wrapper'>
          <Header />
          <main className='main'>
            <Navbar />
            <div className='content'>
              <Routes>
                <Route path='/profile' element={<Profile  />} />
                <Route path='/dialogs/*' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer/>} />
              </Routes>
            </div>    
          </main>  
        </div>
  )
}

export default App;
