import { AddressBook, CurrencyDollarSimple, Gear, HouseSimple } from 'phosphor-react';
import { EPositionItemMenu, Page, SimpleNavigationProps } from '../../interfaces/ui/navigation';

export const simpleNavigation: Page[] = [
    {
      id: 1,
      name: 'home',
      label: 'Home',
      icon: <HouseSimple />,
      order:1,
      position: EPositionItemMenu.MIDDLE
    },
    {
      id: 2,
      name: 'contacts',
      label: 'Contatos',
      icon: <AddressBook />,
      order:2,
      position: EPositionItemMenu.MIDDLE
    },
    {
      id: 3,
      name: 'finance',
      label: 'Financeiro',
      icon: <CurrencyDollarSimple />,
      order:3,
      position: EPositionItemMenu.MIDDLE
    },
    {
      id: 4,
      name: 'settings',
      label: 'Ajustes',
      icon: <Gear />,
      order:3,
      position: EPositionItemMenu.BOTTOM
    }
]
  