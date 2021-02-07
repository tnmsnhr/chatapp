import React,{useState, useContext,useEffect} from 'react';
import avatar1 from '../../images/avatar1.svg';
import avatar2 from '../../images/avatar2.svg';
import avatar3 from '../../images/avatar3.svg';
import avatar4 from '../../images/avatar4.svg';
import avatar5 from '../../images/avatar5.svg';
import Backdrop from '../Backdrop/Backdrop';
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/user.context';

const Avatar = () => {

    const [redirect, setRedirect]=useState(null)

    const [user,setUser]=useContext(UserContext)

    const toggleAvatarScreen = ()=>{
        setRedirect(<Redirect to='/'/>)
    }

    const chatHandler = ()=>{
        setRedirect(<Redirect to='/chat'/>)
    }

    const changeAvatarHanlder = e =>{
        if(e.target.dataset.avatar =='undefined') return;
        
        setUser({
            ...user,
            avatar:e.target.src
        })

        if(e.target.classList.value=='avatar__bottomrow'){
            return
        };
        e.target.closest('.avatar__bottomrow').querySelectorAll('.avatar__item').forEach(el=>{
            el.classList.remove('active__avatar')
        })

        e.target.closest('.avatar__item').classList.add('active__avatar')

        console.log(user.avatar)
        

        
    }

    return (
        <>
        <Backdrop clicked={toggleAvatarScreen}/>
        <div className="avatar__container">
            <div className="avatar">
                <section className="avatar__upperrow">
                    <img src={user.avatar} alt="default"/>
                    <h1 className="heading-md avatar__caption">{`Hi ${user.name.split(' ')[0]}, Choose your avatar wisely`}</h1>
                </section>

                <section className="avatar__bottomrow" onClick={changeAvatarHanlder}>
                    <div className="avatar__item">
                        <img src={avatar1} alt="avatar 1" data-avatar="avatar1"/>
                    </div>
                    <div className="avatar__item">
                        <img src={avatar2} alt="avatar 2" data-avatar="avatar2"/>
                    </div>
                    <div className="avatar__item">
                        <img src={avatar3} alt="avatar 3" data-avatar="avatar3"/>
                    </div>
                    <div className="avatar__item">
                        <img src={avatar4} alt="avatar 4" data-avatar="avatar4"/>
                    </div>
                    <div className="avatar__item">
                        <img src={avatar5} alt="avatar 5" data-avatar="avatar5" />
                    </div>
                </section>
                <section className="avatar__button--area">
                    <button className="btn btn-primary btn-full" onClick={chatHandler}>Start chatting</button>
                </section>
            </div>
        </div>
        {redirect}
        </>
    )
}

export default Avatar
