import React, { useState } from "react";
import "./feedback.css";
import axios from "axios";
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

export default function Feedback() {
  const [hover, setHover] = useState(0); // To store the hovered star
  const [subscribed, setSubscribed] = useState(false);

  // Input Fields
  const [rating, setRating] = useState(0); // To store the clicked rating
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Subscribe = async (e) => {
    e.preventDefault();

    const formdata = new FormData();

    formdata.append("rating", rating);
    formdata.append("name", name);
    formdata.append("email", email);
    formdata.append("message", message);

    

    try {

      console.log("Posting........");

      const response = await axios.post(`/user/feedback`, formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.data.data;
      console.log(data);
    } catch (error) {
      console.error("FeedBack not Posting :)", error);
    } finally {
      console.log("Feed Back POsted");
      setEmail("");
      setMessage("");
      setName("");
      setRating("");
      setSubscribed(true);
    }
  };

  return (
    <div className="feedback-body">
      <ReactNotifications />

      <h1 data-aos="zoom-in">
        <center>Please FeedBack</center>
      </h1>

      <form onSubmit={Subscribe}>
        <div className="feedback-rating">
          {stars.map((_, i) => (
            <i
              key={i}
              className={`fa-solid fa-star ${i < (hover || rating) ? "star-hover" : ""}`}
              onMouseEnter={() => setHover(i + 1)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i + 1)}
            ></i>
          ))}
        </div>

        <div className="text-feedback">
          <input
            required
            data-aos="flip-left"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name *"
          />
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-aos="zoom-in-down"
            type="email"
            placeholder="Em@il *"
          />
        </div>

        <div className="feedback-txtarea">
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            data-aos="fade-up"
            placeholder="Leave Comment"
          ></textarea>
        </div>

        <div className="subscribe">
          <button
            style={{
              backgroundColor: subscribed ? "#edb64a" : "",
              color: subscribed ? "white" : "",
            }}
            type="submit"
          >
            {subscribed ? "Subscribed" : "Subscribe"}
          </button>
        </div>
      </form>
    </div>
  );
}

const stars = [0, 1, 2, 3, 4];
