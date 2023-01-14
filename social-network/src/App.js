import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import {Routes, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { initializedApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';



class App extends React.Component {

  componentDidMount() {
    this.props.initializedApp()
  }
  
  render() {

  if (!this.props.initialized) {  
  return <Preloader />  
  }

  return (
        <div className='app__wrapper'>
          <HeaderContainer />
          <main className='main'>
            <Navbar />
            <div className='content'>
              <Routes>
                <Route path="/profile" element={<ProfileContainer />}>
                  <Route path=":userId" element={<ProfileContainer />} />
                </Route>
                <Route path='/dialogs/*' element={<DialogsContainer />} />
                <Route path='/users' element={<UsersContainer/>} />
                <Route path='/login' element={<LoginPage/>} />
              </Routes>
            </div>    
          </main>  
        </div>
        )
    }
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
  });  

export default connect (mapStateToProps, {initializedApp}) (App);
