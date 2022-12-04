import { Meta, StoryObj } from '@storybook/react'
import { TextareaElement, TextareaElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/TextareaElement',
    component: TextareaElement,
    args: {

        placeholder: "Escreva sua menssagem..."

    },


} as Meta<TextareaElementProps>

export const Default: StoryObj<TextareaElementProps> = {}


