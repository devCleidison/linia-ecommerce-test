import './style.scss'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().email('Insira um e-mail válido').required('Este campo é obrigatório'),
  password: yup.string().required('Este campo é obrigatório'),
}).required();

export function CardLogin() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = () => {
    alert('Login efetuado')
  }

  return (
    <div className="login-container">
      <span className='title-login'>Entrar com e-mail e senha</span>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input {...register('email')} placeholder="E-mail* :" />

        </label>
        {errors.email && <span className="span-error">{errors.email?.message}</span>}

        <label>
          <input {...register('password')} placeholder="Senha* :" type='password' />

        </label>
        {errors.password && <span className="span-error">{errors.password?.message}</span>}

        <div className="buttons-login-container">
          <button className='btn-login' type="submit">Entrar</button>
          <button className='btn-login btn-outline'>Esqueci a senha</button>
        </div>
      </form>

      <div className="login-social">
        <p>
          Ou entre com <br /> suas redes sociais
        </p>
        <div className="buttons-social-container">
          <a href="#" className="btn-social">
            <i className="ri-google-fill"></i>
          </a>
          <a href="#" className="btn-social">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#" className="btn-social">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="#" className="btn-social">
            <i className="ri-twitter-fill"></i>
          </a>
        </div>
      </div>

      <div className="create-account">
        <a href="" className="create-account-link">Criar uma conta</a>
      </div>
    </div>
  )
}