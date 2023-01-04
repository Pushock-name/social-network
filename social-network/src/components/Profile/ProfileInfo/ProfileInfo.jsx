import s from './ProfileInfo.module.css';




const ProfileInfo = () => {
    return (
      <div>
        <div className={s.banner}>
          <img src="https://www.kartinki24.ru/uploads/gallery/main/7/kartinki24_ru_anime_83.jpg" alt="Баннер" />
        </div>
        <div className={s.description__box}>
          avatar + description
        </div>
      </div>
    );
};

export default ProfileInfo;