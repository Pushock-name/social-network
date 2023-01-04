import s from './Post.module.css';




const Post = (props) => {
    return (
          <div className={s.item}>
            <img src='https://deadline.com/wp-content/uploads/2022/11/avatar-the-way-of-water.jpg' alt='Аватар'></img>
            <div>{props.message}</div>
            <div>Like {props.likesCount}</div>
          </div>   
    );
};

export default Post;