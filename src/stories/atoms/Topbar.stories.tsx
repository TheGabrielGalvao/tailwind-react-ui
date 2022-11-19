import { Meta, StoryObj } from '@storybook/react'
import { FileSearch, User } from 'phosphor-react'
import { TextInput } from '../../components/atoms/TextInput'
import { Topbar, TopbarProps } from '../../components/atoms/TopBar'

export default {
    title: 'Components/Atoms/Topbar',
    component: Topbar.Root,
    args: {
      children: [
        <Topbar.Nav>
            <Topbar.NavSection>
              <TextInput.Root>
                <TextInput.Icon>
                  <FileSearch className="cursor-text"/>
                </TextInput.Icon>
                <TextInput.Input placeholder= "Pesquisar" />
              </TextInput.Root>  
            </Topbar.NavSection>
            
            <Topbar.NavSection>
                <Topbar.NavSectionItem icon={<User size={20} />}  />
            </Topbar.NavSection>
        </Topbar.Nav>,
    ]
    },
    argTypes: {
        // control: {
        //     type: 'inline-radio'
        // }
    }

} as Meta<TopbarProps>

export const Default: StoryObj<TopbarProps> = {}

