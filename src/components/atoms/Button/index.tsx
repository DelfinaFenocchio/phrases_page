/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { type Button as ButtonType } from '@types';
import styles from './styles';

/**
 * custom button component
 * @param {object} props
 * @param {string} props.text button text
 * @param {() => void | Promise<void> } props.onClick on click callback
 * @param {boolean} props.disabled if component should be disabled
 * @param {'submit' | 'reset' | 'button'} props.type button type
 * // TODO: reuse default button styles to not repeat it in buttondisabled
 */
const Button: React.FC<ButtonType> = ({ text, onClick, disabled, type = 'button' }) => {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      style={!disabled ? styles.button : styles.buttonDisabled} 
      type={type}>
      {text}
    </button>
  );
};

export default Button;
