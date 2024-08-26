import React from 'react';
import { WelcomePage, Background } from './WelcomePage.styles.js';
import Button from '../../components/atoms/Button/Button.tsx';

const Welcome = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <>
    <WelcomePage>
    <Background>
      <picture>
      <source srcSet='/bg.webp'/>
      <img src="/bg_compressed.png" alt="" />
      </picture>
      </Background>
        <Button onClick={handleClick} type="primary" size="big">
          Start Now
        </Button>
      </WelcomePage>
    </>
  );
};

export default Welcome;
