import React,{useContext} from 'react'
import Singlechat from './Singlechat/Singlechat';
import UserContext from '../../context/user.context';

const Chatscreen = () => {
    const [user,setUser]=useContext(UserContext)

    return (
        <div className="chat__container">
            <div className="chat">
                <section className="chat__leftbar">
                    <div className="chat__leftbar--top">
                        <div className="user__info">
                            <img src={user.avatar}/>
                            <h2>{user.name}</h2>
                        </div>
                        <div className="chat__types--container">
                            <ul className="chat__types">
                                <li className="chat__types--item chat__item--active"><i className="fa fa-envelope"></i> Messages</li>
                                <li className="chat__types--item"><i className="fa fa-video-camera"></i> Video Calls</li>
                                <li className="chat__types--item"><i className="fa fa-phone"></i> Voice Calls</li>
                            </ul>
                        </div>
                    </div>

                    <div className="chat__leftbar--bottom">
                        <ul className="settings__area">
                            <li className="settings__area--item"><i className="fa fa-user-circle"></i> Profile</li>
                            <li className="settings__area--item"><i className="fa fa-cog"></i> Setting</li>
                            <li className="settings__area--item"><i className="fa fa-power-off"></i> Logout</li>
                        </ul>
                    </div>
                </section>

                <section className="chat__midbar">
                    <div className="form__group chat__search">
                        <input placeholder="Search"/>
                    </div>
                    <div className="sort__by margin-bottom-md">
                        <p>Sort by: <span>Most Recent <i className="fa fa-chevron-down"></i></span></p>
                    </div>
                    <div className="chat__contact--lists">
                        <Singlechat />
                        <Singlechat />
                        <Singlechat />
                        <Singlechat />
                        <Singlechat />
                        <Singlechat />
                    </div>
                </section>

                <section className="chat__rightbar">
                    <div className="user__info--section">
                        <section className="user__leftbar">
                            <div className="user__avatar">
                                <img src="https://www.verbalbeginnings.com/wp-content/uploads/2017/12/Diana.Wolf_.headshot-500x500.jpg" />
                                <span>&nbsp;</span>
                            </div>
                            <div className="user__details">
                                <h2>Annie Liaworth</h2>
                                <p>Active Now</p>
                            </div>
                        </section>

                        <section className="user__rightbar">
                            <ul className="call__options">
                                <li className="call__options--item"><i className="fa fa-video-camera"></i></li>
                                <li className="call__options--item"><i className="fa fa-phone"></i></li>
                                <li className="call__options--item"><i className="fa fa-cog"></i></li>
                            </ul>
                        </section>
                    </div>
                    <div className="chat__input--section">
                        <div className="chat__input">
                            <div className="microphone">
                                <i className="fa fa-microphone"></i>
                            </div>
                            <div className="form__group">
                                <input placeholder="Type your message..."/>
                            </div>

                            <div className="attachment__type">
                                <label htmlFor="attach-doc"><i className="fa fa-file-text-o"></i></label>
                                <input type="file" id="attach-doc"
                                    accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
                                    text/plain, application/pdf, image/*"
                                />

                                <label htmlFor="attach-image"><i className="fa fa-file-image-o"></i></label>
                                <input type="file" id="attach-image" accept="image/*"/>

                            </div>
                        </div>

                        <div className="send__button">
                            <i className="fa fa-paper-plane"></i>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Chatscreen
