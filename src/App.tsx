import { BrowserRouter } from 'react-router-dom'
import { DefaultLayout } from './components/templates/DefaultLayout'
import { AppProvider } from './contexts/AppContext'
import { AuthProvider } from './contexts/AuthContext'
import './util/styles/global.css'

export const App = () => {
  
  return (
    <BrowserRouter>
        <AuthProvider>
          <AppProvider />
        </AuthProvider>
    </BrowserRouter>
  )
}
