import { useState } from 'react';
import { type PhrasesList as PhrasesListType } from '@types';
import { PhraseItem, Input, Section } from '../../atoms';
import styles from './styles';

interface Props {
  phrases: PhrasesListType;
  handleRemovePhrase: (id: string) => void;
}

/**
 * Component to list the phrases and filter. the search is performed as the user types in the input
 * @param {object} props
 * @param {object} props.phrases
 */
const PhrasesList: React.FC<Props> = ({ phrases, handleRemovePhrase }) => {
  const [textToSearch, setTextToSearch] = useState('');
  const filteredPhrases = phrases.filter((phrase) => phrase.text.includes(textToSearch));

  return (
    <Section>
      <text style={styles.title}>Lista de frases</text>
      <Input onChangeText={setTextToSearch} placeholder="Buscar frase" value={textToSearch} />
      <div style={styles.containerList}>
        {filteredPhrases.length > 0 ? (
          filteredPhrases.map((phrase) => (
            <PhraseItem phrase={phrase} key={phrase.id} handleRemovePhrase={handleRemovePhrase} />
          ))
        ) : (
          <p>No hay frases</p>
        )}
      </div>
    </Section>
  );
};

export default PhrasesList;
