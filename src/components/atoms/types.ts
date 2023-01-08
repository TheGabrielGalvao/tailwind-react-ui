import { ChangeEventHandler, HtmlHTMLAttributes } from 'react';

export interface BaseComponentProps extends HtmlHTMLAttributes<HTMLBaseElement> { }

// export interface BaseInputProps extends InputProps {
//   handleChange?: ChangeEventHandler<HTMLInputElement>
//   register?: any
// }

export interface ComposedInputProps extends BaseComponentProps {
  input: BaseInputProps
  helperText?: string
  error?: boolean
}