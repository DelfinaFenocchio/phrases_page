import { Colors } from '../../../assets';

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '1rem',
    marginBottom: '1rem',
    width: '100%',
  },
  input: {
    border: 'none',
    height: '1.5rem',
    width: '100%',
    borderRadius: '10px',
    backgroundColor: Colors.secondary,
    color: Colors.white,
    paddingLeft: '0.5rem',
  },
};

export default styles;
