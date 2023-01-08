import { NavLink } from 'react-router-dom';
import s from'./Header.module.css';




const Header = (props) => {
    return (
        <header className={s.header}> 
            <div className={s.logo}>
                <img src='data:image/png;base64,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' alt="Логотип"></img>
            </div>
            <div className={s.login__box}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>  
    );
};

export default Header;