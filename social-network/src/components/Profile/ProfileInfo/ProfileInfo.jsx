import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';




const ProfileInfo = (props) => {
  if (!props.profile) {
    console.log(props.profile)
    return <Preloader />
  }
  
    return (
      <div>
        <div className={s.banner}>
          <img src="https://www.kartinki24.ru/uploads/gallery/main/7/kartinki24_ru_anime_83.jpg" alt="Баннер" />
        </div>
        <div className={s.description__box}>
          <img src={props.profile.photos.large} alt='Аватар пользователя'/>
          <div>Имя: {props.profile.fullName}</div>
          <div>Место работы: {props.profile.lookingForAJobDescription}</div>
          <div>Ищу работу: {props.profile.lookingForAJob ? 'Да' : 'Нет'}</div>
          <div>Контакты:</div>
          <div>{props.profile.contacts.facebook}</div>
          <div>{props.profile.contacts.website}</div>
          <div>{props.profile.contacts.vk}</div>
          <div>{props.profile.contacts.twitter}</div>
          <div>{props.profile.contacts.instagram}</div>
          <div>{props.profile.contacts.youtube}</div>
          <div>{props.profile.contacts.github}</div>
          <div>{props.profile.contacts.mainLink}</div>
        </div>
      </div>
    );
};

export default ProfileInfo;