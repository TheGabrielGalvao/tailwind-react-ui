import { Meta, StoryObj } from '@storybook/react'
import {AddressBook, CurrencyDollarSimple, Gear, HouseSimple, TiktokLogo} from 'phosphor-react'
import { SidebarElement, SidebarElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/SidebarElement',
    component: SidebarElement.Root,
    args: {
         open: false,
         children: [
            <SidebarElement.Nav>
                <SidebarElement.NavSection>
                    <SidebarElement.NavSectionItem className='text-white bg-blue-500 hover:bg- hover:text-blue-500 text-lg' icon={<TiktokLogo className='text-white' />} label="Sistema" />
                </SidebarElement.NavSection>

                <SidebarElement.NavSection>
                    <SidebarElement.NavSectionItem icon={<HouseSimple />} label="Home" />
                    <SidebarElement.NavSectionItem icon={<AddressBook />} label="Contatos" />
                    <SidebarElement.NavSectionItem icon={<CurrencyDollarSimple />} label="Financeiro" />
                </SidebarElement.NavSection>

                <SidebarElement.NavSection>
                    <SidebarElement.NavSectionItem icon={<Gear />} label="Ajustes" />
                </SidebarElement.NavSection>
            </SidebarElement.Nav>,
        ]
    },
    argTypes: {
        open: [true, false],
        control: {
            type: 'inline-radio'
        }
    }

} as Meta<SidebarElementProps>

export const Default: StoryObj<SidebarElementProps> = {}

