import { useNavigate } from 'react-router-dom';
import { WelcomePage, Background } from './WelcomePage.styles.js';
import Button from '../../components/atoms/Button/Button.tsx';

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/exercises');
  };

  return (
    <WelcomePage>
      <Background>
        <picture>
          <source srcSet='/bg.webp' />
          <img src="/bg_compressed.png" alt="" />
        </picture>
      </Background>
      <Button onClick={handleClick} type="primary" size="big">
        Get Started
      </Button>
    </WelcomePage>
  );
};

export default Welcome;