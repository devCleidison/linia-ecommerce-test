import './style.scss'

import schema from './validation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useEffect, useState, useRef } from "react";

export function Form() {
  const { register, handleSubmit, formState: { errors }, setError, watch, clearErrors } = useForm({
    resolver: yupResolver(schema)
  });

  const [passLength, setPassLength] = useState('')
  const [checkTerms, setCheckTerms] = useState(false)

  const termsUser = useRef(null)

  const password = watch('password')
  const passwordConfirm = watch('passwordConfirm')

  const handleChecked = (e) => {

    const checkbox = document.querySelectorAll('.check')

    if (e.target.id === 'checkInfo') {
      checkbox[0].classList.toggle('checked')
    }
    if (e.target.id === 'checkNotifications') {
      checkbox[1].classList.toggle('checked')
    }
    if (e.target.id === 'checkTermUser') {
      setCheckTerms(!checkTerms)
      checkbox[2].classList.toggle('checked')
    }
  }


  useEffect(() => {
    if (password === passwordConfirm && passLength >= 8) {
      clearErrors('passwordError')
      setError('passwordMessage', { message: 'Sua senha está ótima!' })
    } else {
      clearErrors('passwordMessage')
    }
  }, [password, passwordConfirm])


  const onSubmit = (data) => {
    console.log(data)
    clearErrors('termsUser')

    if (password !== passwordConfirm) {
      setError('passwordError', { message: 'Senha incorreta' })
    }

    if (!checkTerms) {
      setError('termsUser', { message: 'Aceite os termos de uso' })
    } else{
      alert('Usuário cadastrado com sucesso')
    }
  }

  const onBlurCPF = (ev) => {
    const { value } = ev.target;

    clearErrors('isCPF')

    const cpf = /^[0-9]+$/.test(value)

    if (value?.length !== 11 || !cpf) {
      setError('isCPF', { message: 'CPF inválido' })
    }
  }

  const onBlurDate = (ev) => {
    const { value } = ev.target

    const date = value.replace(/[/]/g, '')

    if(!/[0-9]+$/.test(date)){
      setError('myDate', { message: 'Data inválida' })
    }
  }

  const onBlurPass = (ev) => {
    const { value } = ev.target;

    setPassLength(value.length)

    if (value.length < 8) {
      setError('passwordError', { message: 'A senha deve ter mais de 7 caracteres' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <input {...register('email')} placeholder="E-mail* :" />

        {errors.email && <span className="span-error">{errors.email?.message}</span>}
      </label>

      <label>
        <input {...register('firstName')} placeholder="Nome* :" />

        {errors.firstName && <span className="span-error">{errors.firstName?.message}</span>}
      </label>

      <label>
        <input {...register('lastName')} placeholder="Sobrenome :" />
      </label>

      <label>
        <input {...register('cpf')} placeholder="CPF* :" maxLength={11} onBlur={onBlurCPF} />

        {errors.cpf && <span className="span-error">{errors.cpf?.message}</span>}
        {errors.isCPF && <span className="span-error">{errors.isCPF?.message}</span>}
      </label>

      <label>
        <input {...register('birthDate')} placeholder="Data de nascimento: DD/MM/AAAA :" onBlur={onBlurDate}/>
        {errors.myDate && <span className="span-error">{errors.myDate?.message}</span>}
      </label>

      <label>
        <span>Gênero: </span>
        <select {...register("gender")}>
          <option value="female">Feminino</option>

          <option value="male">Masculino</option>

          <option value="other">Prefiro não informar</option>

        </select>
      </label>

      <label>
        <input {...register('password')} placeholder="Senha* :" type='password' onBlur={onBlurPass} />

        {errors.password && <span className="span-error">{errors.password?.message}</span>}
      </label>

      <label>
        <input {...register('passwordConfirm')} placeholder="Confirmar senha* :" type='password' onBlur={onBlurPass} />

        {errors.passwordConfirm && <span className="span-error">{errors.passwordConfirm?.message}</span>}
      </label>

      {errors.passwordError && <span className="password-error">{errors.passwordError?.message}</span>}
      {errors.passwordMessage && <span className="password-accepted" >{errors.passwordMessage?.message}</span>}


      <div className="check-container">
        <label onClick={handleChecked}>
          <span className="check" />
          <input type="checkbox" id="checkInfo" className="checkbox" name="info" />
          <span>Desejo receber promoções, novidades e <br /> informações da LINEA</span>
        </label>

        <label onClick={handleChecked}>
          <span className="check" />
          <input type="checkbox" id="checkNotifications" className="checkbox" name="notifications" />
          <span>Quero receber notificações pelo whatsappe</span>
        </label>

        <label onClick={handleChecked}>
          <span className="check" />
          <input type="checkbox" id="checkTermUser" className="checkbox" {...register('termsUser', { value: (checkTerms && (termsUser.current = checkTerms)) })} />
          <span>Li e aceito a <a href="#">Política de Privacidade e <br /> Proteção de dados</a> da LINEA e os <a href="#">Termos de uso</a></span>
        </label>

        {errors.termsUser && <span className="checkTermUser">{errors.termsUser?.message}</span>}
      </div>

      <button type="submit">Criar conta</button>
    </form>
  )
}