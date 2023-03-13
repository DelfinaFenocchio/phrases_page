import { type Input as InputType } from '@types';
import styles from './styles';

/**
 * custom input component
 * @param {object} props
 * @param {(text: string) => void | Promise<void> } props.onChangeText
 * @param {string} props.key key for the component
 * @param {string} props.value input value
 * @param {Function} props.getRef reference to the component
 * @param {string} props.placeholder input placeholder
 */
const Input: React.FC<InputType> = ({
  key = '',
  onChangeText,
  value,
  getRef,
  placeholder
}) => {
  return (
    <div style={styles.container}>
      <input
        placeholder={placeholder}
        style={styles.input}
        name={key}
        key={`${key}Input`}
        onChange={(event) => {
          onChangeText(event.target.value);
        }}
        value={value}
        ref={getRef}
      />
    </div>
  );
};

export default Input;
