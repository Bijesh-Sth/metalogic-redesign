import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticlesComponent from '../components/animations/ParticlesComponent';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
     
      <ParticlesComponent />
     
      <div className='block'>
        <h1>Welcome to Metalogic!</h1>
        <p>This is the homepage content.</p>
      </div>
      <Footer />
    </div>

  );
};

export default Home;
