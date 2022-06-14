import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './sendMessage.css';

export const SendMessage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xyqmh8', 'template_jie5s7k', form.current, 'k6K9hPclgnT8T65AI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="sendMessage__container" id="send-message">
      <h1><b>Send a Message</b></h1>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" /><br></br>
      <label>Email</label>
      <input type="email" name="user_email" /><br></br>
      <label>Text</label>
      <textarea id="btn" name="message" /><br></br>
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};

export default SendMessage;