import React,{useRef, useState, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import loginImage from '../../images/login.svg';
import UserContext from '../../context/user.context';

const Login = () => {

    const inputRef=useRef();
    const [redirect,setRedirect]=useState(null);
    const [user,setUser]=useContext(UserContext)

    const submitHandler = e =>{
        e.preventDefault()
        setUser({
            ...user,
            name:inputRef.current.value
        })
        setRedirect(<Redirect to="/choose-avatar/"/>)
    }

    return (
        <>
        <div className="login__container">
            <div className="login">
                <section className="login__left">
                    <div className="login__form">
                        <p className="para-sm loginform__text">START FOR FREE</p>
                        <h1 className="heading-lg">Create an account</h1>
                        <form onSubmit={submitHandler}>
                            <div className="form__group">
                                <input placeholder="Enter your name" ref={inputRef} required defaultValue={user.name}/>
                            </div>
                            <div>
                                <button className="btn btn-primary btn-full" type="submit">Set up</button>
                                <button className="btn btn-default btn-full margin-top-sm" type="reset">Reset</button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="login__right">
                    <img src={loginImage} alt="writing screen"/>
                    <h1 className="login__dialogue heading-lg">Start chatting with your co-workers</h1>
                </section>
            </div>
        </div>
        {redirect}
        </>
    )
}

export default Login
