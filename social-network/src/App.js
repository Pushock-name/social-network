import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';



const App = (props) => {
  return (
        <div className='app__wrapper'>
          <Header />
          <main className='main'>
            <Navbar />
            <div className='content'>
              <Routes>
                <Route path='/profile' element={<Profile  state={props.state.profilePage} dispatch={props.dispatch}/>} />
                <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/>} />
              </Routes>
            </div>    
          </main>  
        </div>
  )
}

export default App;
