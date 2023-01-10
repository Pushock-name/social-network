import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';



const ProfileInfo = (props) => {
  if (!props.profile) {
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
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>
    )
  }

export default ProfileInfo;


