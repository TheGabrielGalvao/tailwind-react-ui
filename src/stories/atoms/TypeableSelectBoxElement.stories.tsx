import { Meta, StoryObj } from '@storybook/react'
import { TypeableSelectBoxElement } from '../../components/atoms'

export default {
    title: 'Components/Atoms/TypeableSelectBoxElement',
    component: TypeableSelectBoxElement,
    args: {
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }

} as Meta

export const Default: StoryObj = {}


