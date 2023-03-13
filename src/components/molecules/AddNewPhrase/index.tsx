import { useState } from 'react';
import { Input, Button, Section } from '../../atoms';
import styles from './styles';

interface Props {
  handleAddNewPhrase: (text: string) => void;
}

/**
 * component to add new phrase
 * @param {object} props
 * @param {function} props.handleAddNewPhrase to add new phrase
 */
const AddNewPhrase: React.FC<Props> = ({ handleAddNewPhrase }) => {
  const [newPhrase, setNewPhrase] = useState('');

  /**
   * reset the new phrase'state and calls the function that adds the new phrase
   * @param {SyntheticEvent} the react event
   */
  const handleSubmit = (e): void => {
    e.preventDefault();
    handleAddNewPhrase(newPhrase);
    setNewPhrase('');
  };

  return (
    <Section>
      <text style={styles.title}>Agregá una frase</text>
      <form onSubmit={handleSubmit}>
        <Input onChangeText={setNewPhrase} placeholder="Agregar frase" value={newPhrase} />
        <Button text="Agregar" disabled={newPhrase.length === 0} type="submit" />
      </form>
    </Section>
  );
};

export default AddNewPhrase;
