import { FormMessages } from './../../../util/constants/msg';
import * as yup from 'yup';

export const userSignInValidation = yup.object().shape({
  name: yup.string().required(() => FormMessages.requiredMessage('Nome')),
  password: yup.string().required(() => FormMessages.requiredMessage('Senha')),
})