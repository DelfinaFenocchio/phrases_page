import styles from './styles';

interface Props {
  children: React.ReactNode;
}

/**
 * section container to contain for example the section to add a new phrase
 * @param {object} props
 * @param {React.ReactElement} props.children
 */
const PhrasesList: React.FC<Props> = ({ children }) => (
  <div style={styles.container}>
    {children}
  </div>
);

export default PhrasesList;
