import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Email: shaurya252anand@gmail.com</li>
        <li>Phone: 91-8709400117</li>
      </ul>
      <div className="social-icons">
        <a href="https://github.com/Anand-Shaurya">
          <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/anand-shaurya-a50676200/">
          <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
        </a>
        <a href="https://leetcode.com/u/anand525shaurya/">
          <img src={`${process.env.PUBLIC_URL}/leetcode.png`} alt="LeetCode" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
