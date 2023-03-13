import { type Phrase as PhraseType } from '@types';
import styles from './styles';

interface Props {
  phrase: PhraseType;
  handleRemovePhrase: (id: string) => void
}

/**
 * component to show phrase. 
 * TODO: open a modal to see the entire phrase when the user clicks on the item
 * @param {object} props
 * @param {PhraseType} props.phrase
 * @param {(text: string) => void | Promise<void> } props.handleRemovePhrase function to remove a phrase 
 */
const PhraseItem: React.FC<Props> = ({ phrase, handleRemovePhrase }) => {
  const { text, id } = phrase;
  return (
    <div style={styles.container} key={id}>
      <button style={styles.deleteIcon} onClick={() => { handleRemovePhrase(id); }}>X</button>
      {text.length > 30 ?
        (
          <div>
            {`${text.substring(0, 70)}...`}<a href="#">Ver más</a>
          </div>
        ) :
        <p style={styles.text}>{text}</p>
      }
    </div>
  );
};

export default PhraseItem;
