import { Typography } from '../../../assets';

const styles: Record<string, React.CSSProperties> = {
  containerList: {
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
    width: '100%',
    gap: '1rem'
  },
  title: {
    ...Typography.title
  }
};

export default styles;
