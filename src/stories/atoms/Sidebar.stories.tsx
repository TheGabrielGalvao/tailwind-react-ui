import { Meta, StoryObj } from '@storybook/react'
import { Sidebar, SidebarProps } from '../../components/atoms/SideBar'
import {AddressBook, CurrencyDollarSimple, Gear, HouseSimple, TiktokLogo} from 'phosphor-react'

export default {
    title: 'Components/Atoms/Sidebar',
    component: Sidebar.Root,
    args: {
         open: false,
         children: [
            <Sidebar.Nav>
                <Sidebar.NavSection>
                    <Sidebar.NavSectionItem className='text-white bg-blue-500 hover:bg- hover:text-blue-500 text-lg' icon={<TiktokLogo className='text-white' />} label="Sistema" />
                </Sidebar.NavSection>

                <Sidebar.NavSection>
                    <Sidebar.NavSectionItem icon={<HouseSimple />} label="Home" />
                    <Sidebar.NavSectionItem icon={<AddressBook />} label="Contatos" />
                    <Sidebar.NavSectionItem icon={<CurrencyDollarSimple />} label="Financeiro" />
                </Sidebar.NavSection>

                <Sidebar.NavSection>
                    <Sidebar.NavSectionItem icon={<Gear />} label="Ajustes" />
                </Sidebar.NavSection>
            </Sidebar.Nav>,
        ]
    },
    argTypes: {
        open: [true, false],
        control: {
            type: 'inline-radio'
        }
    }

} as Meta<SidebarProps>

export const Default: StoryObj<SidebarProps> = {}

