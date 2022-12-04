import { Meta, StoryObj } from '@storybook/react'
import { CheckboxElement, CheckboxElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/CheckboxElement',
    component: CheckboxElement,
    args: {
        id: "link-checkbox",
        type: "checkbox"
    }


} as Meta<CheckboxElementProps>

export const Default: StoryObj<CheckboxElementProps> = {}


