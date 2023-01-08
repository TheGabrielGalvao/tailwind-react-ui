import { createContext, useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { getRouteByFilter } from "../../util/helpers/ui"
import { IAuthContextData, IAuthProviderProps, SigninForm } from "./types"

interface ISession {
  user: SigninForm,
  session: {
    expiresIn: number
  }
}



export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData)

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [routeRequested, setRouteRequested] = useState("");
  const [signed, setSigned] = useState(false);
  // const [session, setSession] = useState<AxiosResponse<ISession>>()
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<SigninForm>()
  const [token, setToken] = useState<string>("")
  const navigate = useNavigate()
  const location = useLocation()
  
  
  const handleRedirect = (route: string) => {
    const lastRoute = getRouteByFilter(route)
    if(lastRoute?.private && !signed) {
      setRouteRequested(route)
    }
    navigate(route)
  }

  const handleSetToken = (data: string) => {
    setToken(data)
  }

  // const handleRedirect = (route: string) => {
  //   const lastRoute = getRouteByFilter(route)
  //   if(lastRoute?.private && !token) {
  //     setRouteRequested(route)
  //   }
  //   navigate(route)
  // }
  const loadingStoreData = async () => {
    const storageUser = localStorage.getItem("@Auth:user") 
    const storageToken = localStorage.getItem("@Auth:token")?.replace(/[\\"]/, '') as string
    
    setSigned(Boolean(storageToken.length > 0))
    
  }

  useEffect(() => {
      loadingStoreData()
      if(!signed) {
        handleRedirect("signin")
      }

  }, [])

  // const handleIdentification = async (data: IdentificationInput) => {
  //     const response = await authService.identification(data.cpf ?? "") as AxiosResponse
  //     if(response.data.isRegistered){
  //       setUser({cpf: data.cpf} as SigninForm)
  //       handleRedirect("signin")
  //     }

  //     if(!response.data.isRegistered){
  //       handleRedirect("signup")
  //     }

  // }

  const handleSignIn = async (user: SigninForm) => {
    setUser({...user, name: user.name, password: user.password})

      // const response = await authService.signIn({...user}) as AxiosResponse
      // if (response.data.error) {
      //   alert(response.data.error)
      // }

        localStorage.setItem("@Auth:user", JSON.stringify(user.name))
        localStorage.setItem("@Auth:token", JSON.stringify("asd3a5s1das35d11a"))

        loadingStoreData()

      handleRedirect(routeRequested)
  }

  const handleSignOut = async () => {
    localStorage.clear()
    setUser({} as SigninForm)
    setSigned(false)
    handleRedirect("signin")
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        handleRedirect,
        handleSetToken,
        handleSignIn,
        handleSignOut,
        signed: Boolean(signed),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext)
  return context
}