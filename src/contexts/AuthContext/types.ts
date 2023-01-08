import { ReactNode } from "react"

export interface SigninForm {
    name: string
    password: string
  }

export interface IAuthContextData {
    user?: SigninForm
    handleRedirect: (route: string) => void
    handleSetToken: (data: string) => void
    handleSignIn: (user: SigninForm) => void
    handleSignOut: () => void
    signed: boolean
    loading: boolean
}

// export type IdentificationInput = Omit<IUser, 'id, email,password,passwordCheck,name,tel,cep,address,birthdate,isRegistered,'> 

export interface IAuthProviderProps {
    children?: ReactNode
}