import React from 'react';

function Booking() {
  return (
      <div>
        <input placeholder="First + Last!" label="Full Name *"></input>
        <input placeholder="So we can keep in contact!" label="Phone Number"></input>
        <input placeholder="best place to send everything!" label="Email Address *"></input>
        <select label="What kind of Service are you looking for?">
            <option disabled>Select an option</option>
            <option>Boudoir Session</option>
            <option>Mentor Workshop</option>
            <option>One on One Mentoring</option>
            <option>Cozy Couples Lifestyle</option>
        </select>
        <input label="When do you want these photos done by?" placeholder="Are these photos for a holiday or special occasion?"></input>
        <textarea label="Tell me about you!" placeholder="WHY"></textarea>
        <select label="How did you hear about me?">
            <option disabled>Select an option</option>
            <option>Google</option>
            <option>Facebook</option>
            <option>Instagram</option>
        </select>


      </div>
    );
}

export default Booking;