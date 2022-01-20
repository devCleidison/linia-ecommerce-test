import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email('Insira um e-mail válido').required('Este campo é obrigatório'),
  firstName: yup.string().required('Este campo é obrigatório').min(2, 'O nome deve ter mais de uma letra'),
  lastName: yup.string(),
  cpf: yup.string().required('Este campo é obrigatório'),
  birthDate: yup.string(),
  gender: yup.string(),
  password: yup.string().required('Este campo é obrigatório'),
  passwordConfirm: yup.string().required('Este campo é obrigatório'),
  termsUser: yup.boolean().required()
}).required();


export default schema;