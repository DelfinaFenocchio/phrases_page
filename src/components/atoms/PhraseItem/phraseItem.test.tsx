import { render, cleanup } from '@testing-library/react';
import PhraseItem from './index';

afterAll(cleanup);

const mockedProps = {
  phrase: {
    id: '1',
    text: 'Probando frases',
  },
  handleRemovePhrase: jest.fn(),
};

describe('<PhraseItem />', () => {
  it('Has a card with a phrase', async () => {
    const { getByText } = render(
      <PhraseItem phrase={mockedProps.phrase} handleRemovePhrase={mockedProps.handleRemovePhrase} />
    );
    expect(getByText(mockedProps.phrase.text)).toBeInTheDocument();
  });
});
