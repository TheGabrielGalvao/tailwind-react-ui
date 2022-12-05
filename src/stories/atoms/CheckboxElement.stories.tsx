import { Meta, StoryObj } from '@storybook/react'
import { CheckboxElement, CheckboxElementProps, TextElement } from '../../components/atoms'

export default {
    title: 'Components/Atoms/CheckboxElement',
    component: CheckboxElement,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2 text-white'>
                    {Story()}
                    <TextElement size='sm'>Lembrar por 30 dias</TextElement>
                </div>
            )
        }
    ]
} as Meta<CheckboxElementProps>

export const Default: StoryObj<CheckboxElementProps> = {}


