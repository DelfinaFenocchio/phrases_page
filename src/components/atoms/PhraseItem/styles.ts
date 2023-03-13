import { Colors, scaleSize } from '../../../assets';

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    borderRadius: '10px',
    padding: '1rem',
    // margin: '1rem',
    justifyContent: 'center',
    // opacity: 0.5,
    backgroundColor: Colors.secondary,
    transition: 'color 0.2s ease-in',
    flexDirection: 'column'
  },
  text: {
    fontSize: scaleSize(14)
  },
  deleteIcon: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    border: 'none',
    color: Colors.white,
  }
};

export default styles;
