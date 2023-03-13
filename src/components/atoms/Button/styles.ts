import { Colors, scaleSize } from '../../../assets';

const styles: Record<string, React.CSSProperties> = {
  button: {
    width: '100%',
    color: '#fff',
    backgroundColor: Colors.secondary,
    borderRadius: '8px',
    height: scaleSize(30)
  },
  buttonDisabled: {
    width: '100%',
    color: '#fff',
    backgroundColor: Colors.secondary,
    borderRadius: '8px',
    height: scaleSize(30),
    opacity: 0.3
  }
};

export default styles;
