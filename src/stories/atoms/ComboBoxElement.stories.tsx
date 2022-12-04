import { Meta, StoryObj } from '@storybook/react'
import { ComboBoxElement, ComboBoxElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/ComboBoxElement',
    component: ComboBoxElement.Root,
    args: {
         children: [
            <ComboBoxElement.Input />,
            <ComboBoxElement.Options />,
         ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta<ComboBoxElementProps>

export const Default: StoryObj<ComboBoxElementProps> = {}

