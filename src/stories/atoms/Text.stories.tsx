import { Meta, StoryObj } from '@storybook/react'
import { TextElement, TextElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/TextElement',
    component: TextElement,
    args: {
         children: 'Lorem Ipsum',
         size: 'md'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }
    }

} as Meta<TextElementProps>

export const Default: StoryObj<TextElementProps> = {}

export const Small: StoryObj<TextElementProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<TextElementProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextElementProps> = {
    args:{
        asChild: false,
        children: (
            <p>TextElement with P tag</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}