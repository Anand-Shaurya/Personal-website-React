import React from 'react';

const Home = () => {
  return (
    <section id="home">
      <img src={`${process.env.PUBLIC_URL}/profile.jpeg`} alt="Anand Shaurya" className="profile-photo" />
      <h1>Anand Shaurya</h1>
      <p>Backend Developer | FastAPI | React Developer</p>
    </section>
  );
};

export default Home;
