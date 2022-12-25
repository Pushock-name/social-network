import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from './Profile.module.css';




const Profile = (props) => {
  
    return (
        <div className={s.profile}>
          <ProfileInfo />
          <MyPosts state={props.state} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;