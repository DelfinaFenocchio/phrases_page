export interface Input {
  key?: string
  onChangeText: (HTMLInputElement) => void
  value: string
  getRef?: () => void
  placeholder: string
}

export interface Phrase {
  text: string
  id: string
}

export type PhrasesList = Phrase[];

export interface Button extends React.HTMLProps<HTMLButtonElement> {
  text: string
  disabled?: boolean
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button';
}
