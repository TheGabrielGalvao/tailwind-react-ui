import { Meta, StoryObj } from '@storybook/react'
import { FileSearch, User } from 'phosphor-react'
import { TextInputElement, TopbarElement, TopbarElementProps } from '../../components/atoms'

export default {
    title: 'Components/Atoms/TopbarElement',
    component: TopbarElement.Root,
    args: {
      children: [
        <TopbarElement.Nav>
            <TopbarElement.NavSection>
              <TextInputElement.Root>
                <TextInputElement.Icon>
                  <FileSearch className="cursor-text"/>
                </TextInputElement.Icon>
                <TextInputElement.Input placeholder= "Pesquisar" />
              </TextInputElement.Root>  
            </TopbarElement.NavSection>
            
            <TopbarElement.NavSection>
                <TopbarElement.NavSectionItem icon={<User size={20} />}  />
            </TopbarElement.NavSection>
        </TopbarElement.Nav>,
    ]
    },
    argTypes: {
        // control: {
        //     type: 'inline-radio'
        // }
    }

} as Meta<TopbarElementProps>

export const Default: StoryObj<TopbarElementProps> = {}

