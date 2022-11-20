import { Meta, StoryObj } from '@storybook/react'
import { ButtonElement, ButtonElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/Button',
    component: ButtonElement,
    args: {
         children: 'Create Account',
         size: 'md',
    },
    argTypes: {
        variant: ['default', 'primary', 'success', 'danger', 'warning'],
        control: {
            type: 'inline-radio'
        }
    }

} as Meta<ButtonElementProps>

export const Default: StoryObj<ButtonElementProps> = {
    args: {
        variant: 'default',
    }
}

export const Primary: StoryObj<ButtonElementProps> = {
    args: {
        variant: 'primary',
    }
}

export const Success: StoryObj<ButtonElementProps> = {
    args: {
        variant: 'success'
    }
}

export const Danger: StoryObj<ButtonElementProps> = {
    args: {
        variant: 'danger'
    }
}

export const Warning: StoryObj<ButtonElementProps> = {
    args: {
        variant: 'warning'
    }
}
