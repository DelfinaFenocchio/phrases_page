import { Colors } from '../../assets';

const styles: Record<string, React.CSSProperties> = {
  container: {
    textAlign: 'center',
    backgroundColor: Colors.backgroundPage,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 'calc(10px+2vmin)',
    color: Colors.white,
    padding: '2rem'
  },
  container2: {
    backgroundColor: Colors.backgroundPage,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 'calc(10px+2vmin)',
    color: Colors.white,
    padding: '2rem'
  }
};

export default styles;