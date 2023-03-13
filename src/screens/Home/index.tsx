import { useState } from 'react';
import { type Phrase as PhraseType } from '@types';
import { PhrasesList, AddNewPhrase } from '../../components/molecules';
import { phrasesItems } from '../../helpers';
import styles from './styles';

/**
 * main component for the app
 */
const Home : React.FC = () => {  
  const [phrases, setPhrases] = useState<PhraseType[]>(phrasesItems);

  /**
   * function to add new phrase
   * @param {string} newPhrase
   */
  const handleAddNewPhrase = (newPhrase): void => {
    const infoNewPhrase = {
      id: crypto.randomUUID(),
      text: newPhrase
    };
    const newPhrases = [
      ...phrases,
      infoNewPhrase
    ];

    setPhrases(newPhrases);
  };
  
  /**
   * function to remove a phrase
   * @param {string} id 
   */
  const handleRemovePhrase = (id): void => {
    const newPhrases = phrases.filter(phrase => phrase.id !== id);
    setPhrases(newPhrases);
  };

  return (
    <div style={styles.container}>
      <AddNewPhrase handleAddNewPhrase={handleAddNewPhrase}/>
      <PhrasesList phrases={phrases} handleRemovePhrase={handleRemovePhrase} />
    </div>
  );
};

export default Home;
