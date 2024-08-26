import { cleanup, screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/atoms/Button/Button';
import { colors } from '../colors';

afterEach(cleanup);

describe('Button Component', () => {
  test('Renders the button with the correct label', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);

    expect(buttonElement).toBeInTheDocument();
  });

  test('Check sending button type', () => {
    render(
      <Button onClick={() => {}} type="premium">
        Click Me
      </Button>,
    );

    const buttonElement = screen.getByText(/Click Me/i);

    expect(buttonElement).toHaveStyle(`background-color: ${colors.orange}`);
  });

  test('Check default button if not sending props', () => {
    render(<Button onClick={() => {}}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);

    expect(buttonElement).toHaveStyle(`background-color: ${colors.primary}`);
    expect(buttonElement).toHaveStyle(`width: 351px`);
  });

  test('Check custom styles for specific type', () => {
    render(
      <Button onClick={() => {}} type="outlined" backgroundColor={colors.cyan} color={colors.orange}>
        Click Me
      </Button>,
    );

    const buttonElement = screen.getByText(/Click Me/i);

    expect(buttonElement).toHaveStyle(`background-color: ${colors.cyan}`);
    expect(buttonElement).toHaveStyle(`color: ${colors.orange}`);
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click Me</Button>);

    const buttonElement = screen.getByText(/Click Me/i);

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalled();
  });
});
