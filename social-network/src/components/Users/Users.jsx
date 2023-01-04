import s from './Users.module.css';
import React from 'react';
import userPhoto from '../../assets/images/Макима.jpeg'


const Users = (props) => {

     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

     let pages = [];

      for (let i = 1; i <= pagesCount; i++) {
          pages.push(i);
      }
    

      return  <div>  
        <div>
        {pages.map(page => <span onClick={(event) => props.onPageChanged(page)} className={props.currentPage === page ? s.selected : ''}>{page}</span>)}
        </div>
        { 
        props.users.map((user) => <div key={user.id} className={s.user}>
            <div className={s.avatar__follow__container}>
              <div className={s.avatar}>
                <img src={user.photos.small !=null ? user.photos.small : userPhoto} alt="Аватар пользователя"/>
              </div>
              <div className={s.follow}> 
              {user.followed 
                ? <button onClick={ () => { props.unfollow(user.id) } }>Unfollow</button> 
                : <button onClick={ () => { props.follow(user.id) } }>Follow</button>}
              </div>  
            </div>
            <div className={s.userdata__container}>
              <div className={s.username__status__container}>
                <div className={s.username}>
                  {user.name}
                </div>
                <div className={s.status}>
                  {user.status}
                </div>
              </div>
              <div className={s.country__city__container}>
                <div className={s.country}>
                  {'user.location.country'}
                </div>
                <div className={s.city}>
                  {'user.location.city'}
                </div>
              </div>  
            </div>
          </div>) 
        }
    </div>
    }

        

export default Users;