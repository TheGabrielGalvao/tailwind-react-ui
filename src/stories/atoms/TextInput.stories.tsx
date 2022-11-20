import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInputElement, TextInputRootElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/TextInputElement',
    component: TextInputElement.Root,
    args: {
         children: [
            <TextInputElement.Icon>
                <Envelope />
            </TextInputElement.Icon>,
            <TextInputElement.Input placeholder= "Seu email" />
         ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta<TextInputRootElementProps>

export const Default: StoryObj<TextInputRootElementProps> = {}

export const WithoutIcon: StoryObj<TextInputRootElementProps> = {
    args: {
        children: <TextInputElement.Input placeholder= "Seu email" />
    }
}    

