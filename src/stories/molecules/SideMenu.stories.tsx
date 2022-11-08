import { Meta, StoryObj } from '@storybook/react'
import { SideMenu, SideMenuProps } from '../../components/molecules/SideMenu'

export default {
    title: 'Components/Molecules/SideMenu',
    component: SideMenu,
    args: {
         open: false,
    },
    argTypes: {
        open: [true, false],
        control: {
            type: 'inline-radio'
        }
    }

} as Meta<SideMenuProps>

export const Default: StoryObj<SideMenuProps> = {}

