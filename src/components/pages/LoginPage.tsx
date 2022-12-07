import { Envelope, Lock } from 'phosphor-react'
import { ButtonElement, CheckboxElement, HeadingElement, TextElement, TextInputElement } from '../atoms'
import { Combobox } from '../molecules'
import { OnBoarding } from '../templates'

export const LoginPage = () => {
  const data = [
    { key: 1, value: 'Wade Cooper' },
    { key: 2, value: 'Arlene Mccoy' },
    { key: 3, value: 'Devon Webb' },
    { key: 4, value: 'Tom Cook' },
    { key: 5, value: 'Tanya Fox' },
    { key: 6, value: 'Hellen Schmidt' },
  ]

  return (
    <OnBoarding headerText='Sistema de Gestão' secondaryText='Faça login e comece a usar!'>
      <form action="" className='flex flex-col items-stretch w-80 gap-4'>
        <label htmlFor="email" className='flex flex-col gap-3'>
          <TextElement className='font-semibold'>Endereço de Email</TextElement>
          <TextInputElement.Root>
            <TextInputElement.Icon>
              <Envelope />
            </TextInputElement.Icon>
            <TextInputElement.Input id="email" name="email" placeholder='Digite seu Email' />
          </TextInputElement.Root>
        </label>
        <label htmlFor="password" className='flex flex-col gap-3'>
          <TextElement className='font-semibold'>Sua Senha</TextElement>
          <TextInputElement.Root>
            <TextInputElement.Icon>
              <Lock />
            </TextInputElement.Icon>
            <TextInputElement.Input id="password" name="password" type="password" placeholder='Digite sua Senha' />
          </TextInputElement.Root>
        </label>
        <label htmlFor="remember" className='flex items-center gap-2'>
          <CheckboxElement id='remember' />
          <TextElement className='text-gray-200 cursor-pointer' size='sm'>Lembrar de mim por 30 dias</TextElement>
        </label>
        {/* <label htmlFor="user" className='flex flex-col gap-2'>
          <TextElement className='text-gray-200' size='sm'>Seleção</TextElement>
          <Combobox data={data} />
        </label> */}

        <ButtonElement variant='primary' type="submit" >Entrar na Plataforma</ButtonElement>
      </form>
    </OnBoarding>
  )
}