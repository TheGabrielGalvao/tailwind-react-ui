import { Meta, StoryObj } from '@storybook/react'
import { Combobox, ComboboxProps } from '../../components/molecules'

export default {
    title: 'Components/Molecules/Combobox',
    component: Combobox,
    args: {
        placeholder: "Selecione uma Opção",
        data: [
          { key: 1, value: 'Wade Cooper' },
          { key: 2, value: 'Arlene Mccoy' },
          { key: 3, value: 'Devon Webb' },
          { key: 4, value: 'Tom Cook' },
          { key: 5, value: 'Tanya Fox' },
          { key: 6, value: 'Hellen Schmidt' },
        ]
    },
    argTypes: {
        
    }

} as Meta<ComboboxProps>

export const Default: StoryObj = {}

