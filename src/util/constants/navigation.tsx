import { AddressBook, CurrencyDollarSimple, Gear, HouseSimple, SignIn } from 'phosphor-react';
import { GenericPage } from '../../components/pages/GenericPage';
import { SignInPage } from '../../components/pages/Onboarding/SignInPage';
import { EPositionItemMenu, ERouteContext, ERouteStatus, Page, SimpleNavigationProps } from '../../interfaces/ui/navigation';

export const simpleNavigation: Page[] = [
    {
      id: 1,
      name: 'home',
      label: 'Home',
      icon: <HouseSimple />,
      order:1,
      position: EPositionItemMenu.MIDDLE,
      route: '/',
      element: <GenericPage text='Home' />,
      status: ERouteStatus.MAKING,
      routeContext: ERouteContext.COMMON,
      private: true
    },
    {
      id: 2,
      name: 'contacts',
      label: 'Contatos',
      icon: <AddressBook />,
      order:2,
      position: EPositionItemMenu.MIDDLE,
      route: '/contacts',
      element: <GenericPage text='Contatos' />,
      routeContext: ERouteContext.COMMON,
      private: true
    },
    {
      id: 3,
      name: 'finance',
      label: 'Financeiro',
      icon: <CurrencyDollarSimple />,
      order:3,
      position: EPositionItemMenu.MIDDLE,
      route: '/financial',
      element: <GenericPage text='Financeiro' />,
      routeContext: ERouteContext.COMMON,
      private: true
    },
    {
      id: 4,
      name: 'login',
      label: 'Login',
      route: '/signin',
      position: EPositionItemMenu.MIDDLE,
      icon: <SignIn />,
      element: <SignInPage />,
      routeContext: ERouteContext.ONBOARDING,
      private: false
    },
    {
      id: 5,
      name: 'settings',
      label: 'Ajustes',
      icon: <Gear />,
      order:3,
      position: EPositionItemMenu.BOTTOM,
      route: '/settings'
    }
]
  