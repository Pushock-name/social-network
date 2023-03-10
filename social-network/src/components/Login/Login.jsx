import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Element } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";
import s from '../common/FormsControls/FormsControls.module.css'


const input = Element("Input");

const LoginForm = (props) => {

    return  <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='Email' name='email' component={input} validate={[required]} />
            </div>
            <div>
                 <Field placeholder='Password' name='password' component={input} validate={[required]} />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component={input} />
                remember me
            </div>
            {props.error 
            && <div className={s.formSummaryError}>
                {props.error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>     
};


const LoginReduxForm = reduxForm ({form: 'login'}) (LoginForm);


const Login= (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
       <LoginReduxForm onSubmit={onSubmit}/> 
    </div>
};

const mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth
})

export default connect(mapStateToProps, {login}) (Login);
