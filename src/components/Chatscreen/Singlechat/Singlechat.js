import React from 'react'

const Singlechat = () => {
    return (
        <div className="singlechat__container">
            <div className="single__chat--item">
                <section className="chat__user--info">
                    <img src="https://i.pinimg.com/564x/d1/ef/69/d1ef69158c082b9d6f72a604016c931d.jpg"/>
                </section>

                <section className="message__highlight--area">
                    <div className="message__highlight">
                        <section className="contact__name">
                            <h4>Teddy Sun</h4>
                        </section>
                        <section className="message__info">
                            <div><p className="chat__content">Anytime works for me. What about you?</p></div>
                            <div><p className="chat__time">3.45 PM</p></div>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Singlechat
