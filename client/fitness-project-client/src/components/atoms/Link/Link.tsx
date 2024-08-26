import { useNavigate } from 'react-router-dom';
import { StyledLink } from './Link.style';
type LinkProps = {
  children: any;
  to: string;
  style: any;
  onClick?: () => void;
};

const Link: React.FC<LinkProps> = ({ children, to }) => {
  const navigate = useNavigate();

  const click = () => {
    navigate(to);
  };
  return <StyledLink onClick={click}>{children}</StyledLink>;
};

export default Link;
