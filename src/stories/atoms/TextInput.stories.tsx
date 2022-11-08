import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps } from '../../components/atoms/TextInput'
import { Envelope } from 'phosphor-react'

export default {
    title: 'Components/Atoms/TextInput',
    component: TextInput.Root,
    args: {
         children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder= "Seu email" />
         ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputInputProps> = {}

export const WithoutIcon: StoryObj<TextInputInputProps> = {
    args: {
        children: <TextInput.Input placeholder= "Seu email" />
    }
}    

