import { Meta, StoryObj } from '@storybook/react'
import { RadioButtonElement, RadioButtonElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/RadioButtonElement',
    component: RadioButtonElement,
    args: {
        type: "radio",
        name: "flexRadioDefault",
        id: "flexRadioDefault1"
    }


} as Meta<RadioButtonElementProps>

export const Default: StoryObj<RadioButtonElementProps> = {}


