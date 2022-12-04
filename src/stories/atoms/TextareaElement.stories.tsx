import { Meta, StoryObj } from '@storybook/react'
import { TextareaElelmet, TextareaElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/TextareaElement',
    component: TextareaElelmet,
    args: {

        placeholder: "Escreva sua menssagem..."

    },


} as Meta<TextareaElementProps>

export const Default: StoryObj<TextareaElementProps> = {}


