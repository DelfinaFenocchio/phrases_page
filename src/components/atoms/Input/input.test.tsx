import { render, cleanup, fireEvent } from '@testing-library/react';
import Input from './index';

afterAll(cleanup);

describe('<Input />', () => {
  test('Test change value', () => {
    const newValue = 'test value';
    const onChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <Input onChangeText={onChangeText} placeholder="Buscar frase" value={''} />
    );

    const inputElement = getByPlaceholderText('Buscar frase');
    fireEvent.change(inputElement, { target: { value: newValue } });

    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(onChangeText).toHaveBeenCalledWith(newValue);
  });
});
