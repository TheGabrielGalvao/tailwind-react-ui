import { Meta, StoryObj } from '@storybook/react'
import { HeadingElement, HeadingElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/HeadingElement',
    component: HeadingElement,
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

} as Meta<HeadingElementProps>

export const Default: StoryObj<HeadingElementProps> = {}

export const Small: StoryObj<HeadingElementProps> = {
    args:{
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingElementProps> = {
    args:{
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingElementProps> = {
    args:{
        asChild: true,
        children: (
            <h1>HeadingElement with H1</h1>
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