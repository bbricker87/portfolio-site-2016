import React from "react";

export default function(props) {
  return(
    <footer>
      <div className="footer container clearfix">
        <h1 className="footer__title col-xs-24">Contact Me</h1>
        <div className="contact col-xs-24 col-md-12">
          <div className="contact-detail">
            <h3 className="contact-detail__title">Email</h3>
            <p className="contact-detail__text">bbricker09@gmail.com</p>
          </div>
          <div className="contact-detail">
            <h3 className="contact-detail__title">Phone</h3>
            <p className="contact-detail__text">(330) 904-7331</p>
          </div>
          <div className="contact-detail">
            <h3 className="contact-detail__title">Address</h3>
            <p className="contact-detail__text">228 Bachtel Street SE
              <br/>North Canton, OH 44720
            </p>
          </div>
        </div>
        <div className="form col-xs-24 col-md-12">
          <label className="form__label" for="name" required>Name</label>
          <input className="form__input" type="text" id="name" />
          <label className="form__label" for="email">Email</label>
          <input className="form__input" type="email" id="email" required />
          <label className="form__label" for="message">Message</label>
          <textarea className="form__input form__textarea" id="message" required></textarea>
          <button className="button button--primary button--form">Send</button>
        </div>
      </div>
    </footer>
  );
};
