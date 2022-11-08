import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '../../components/atoms/Button'

export default {
    title: 'Components/Atoms/Button',
    component: Button,
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

} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    args: {
        variant: 'default',
    }
}

export const Primary: StoryObj<ButtonProps> = {
    args: {
        variant: 'primary',
    }
}

export const Success: StoryObj<ButtonProps> = {
    args: {
        variant: 'success'
    }
}

export const Danger: StoryObj<ButtonProps> = {
    args: {
        variant: 'danger'
    }
}

export const Warning: StoryObj<ButtonProps> = {
    args: {
        variant: 'warning'
    }
}
