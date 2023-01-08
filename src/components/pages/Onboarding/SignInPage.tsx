import { Envelope, Lock, User } from 'phosphor-react'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { ButtonElement, CheckboxElement, HeadingElement, TextElement, TextInputElement } from '../../atoms'
import { useAuth } from '../../../contexts/AuthContext'
import { SigninForm } from '../../../contexts/AuthContext/types'
import { userSignInValidation } from './validations'
import { TextInput } from '../../molecules'

export const SignInPage = () => {
  const data = [
    { key: 1, value: 'Wade Cooper' },
    { key: 2, value: 'Arlene Mccoy' },
    { key: 3, value: 'Devon Webb' },
    { key: 4, value: 'Tom Cook' },
    { key: 5, value: 'Tanya Fox' },
    { key: 6, value: 'Hellen Schmidt' },
  ]

  const {handleSignIn, user} = useAuth()
    const { 
        formState: { errors }, 
        handleSubmit, 
        register,
    } = useForm<SigninForm>({resolver: yupResolver(userSignInValidation), defaultValues: {}})
    
    const handleSubmitUser = async (data: SigninForm) => {
        const dataSave = {
            name: data?.name ?? "",
            password: data.password,
            
        }
        if(dataSave.name.length > 2){
            handleSignIn(dataSave)
        }
    } 

  return (
      <form action="" className='flex flex-col items-stretch w-80 gap-4' onSubmit={handleSubmit(handleSubmitUser)}>
        <TextInput 
          type='text'
          id='name'
          name='name'
          label='Nome' 
          placeholder='Digite o seu Nome' 
          icon={<User />} 
          register={register('name')} 
          helperText={errors.name?.message} 
        />
        <TextInput 
          type='password'
          id='password'
          name='password'
          label='Senha' 
          placeholder='Digite sua Senha' 
          icon={<Lock />} 
          register={register('password')} 
          helperText={errors.password?.message} 
        />
        {/* <label htmlFor="remember" className='flex items-center gap-2'>
          <CheckboxElement id='remember' />
          <TextElement className='text-gray-200 cursor-pointer' size='sm'>Lembrar de mim por 30 dias</TextElement>
        </label> */}
        {/* <label htmlFor="user" className='flex flex-col gap-2'>
          <TextElement className='text-gray-200' size='sm'>Seleção</TextElement>
          <Combobox data={data} />
        </label> */}

        <ButtonElement variant='primary' type="submit" >Entrar na Plataforma</ButtonElement>
      </form>
  )
}