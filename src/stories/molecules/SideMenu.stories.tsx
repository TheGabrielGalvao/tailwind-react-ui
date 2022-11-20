import { Meta, StoryObj } from '@storybook/react'
import { SideMenu, SideMenuProps } from '../../components/molecules'

export default {
    title: 'Components/Molecules/SideMenu',
    component: SideMenu,
    args: {},
    argTypes: {
        control: {
            type: 'inline-radio'
        }
    }

} as Meta<SideMenuProps>

export const Default: StoryObj<SideMenuProps> = {}

