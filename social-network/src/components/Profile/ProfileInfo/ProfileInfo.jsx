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
        </div>
      </div>
    );
};

export default ProfileInfo;