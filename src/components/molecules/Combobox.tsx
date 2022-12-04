import clsx from "clsx"
import { filter, find, head } from "lodash"
import { KeyboardEvent, MouseEvent, useState } from "react"
import { KeyValuePair } from "../../util/interfaces"
import { ComboBoxElement } from "../atoms"


export interface ComboboxProps {
  placeholder?:  string
  data?: KeyValuePair[]
}



export const Combobox = ({placeholder, data}: ComboboxProps) => {
  const [selected, setSelected] = useState<KeyValuePair>()
  const [selectedIndex, setSelectedIndex] = useState<number>()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [filteredData, setFilteredData] = useState<KeyValuePair[]>()

  const handleSerchByIndex = (arg: number) => {
    const filtered =
       head(data?.filter((item, index) =>
       index === arg
     ) )
    return filtered    
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    const filtered =
    query === ''
      ? data
      : data?.filter((item) =>
          item.value
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        ) as KeyValuePair[]
      setFilteredData(filtered)  
      setOpen(Boolean(filtered?.length ? true : false))
  } 

  const handleKeyPressed = (event: KeyboardEvent<HTMLOListElement>) => {
      let index = selectedIndex ?? -1 
      if(event.key === 'ArrowDown' && data?.length && data.length > index) {
         index = index + 1 
      }

      if(event.key === 'ArrowUp' && index >= 0) {
        index = index - 1 
      }

      if(event.key === 'Enter' && index >= 0) {
        const selection = handleSerchByIndex(index)
        setSelectedIndex(index)
        setSelected(selection)     
        setOpen(false)
      }
    const selection = handleSerchByIndex(index)
    setSelectedIndex(index)
    setSelected(selection) 

  }

  const handleSelectionbyClick = (item: KeyValuePair) => {
      setSelected(item)
      setOpen(false)
  }
        
  return (
    <ComboBoxElement.Root>
      <ComboBoxElement.Input 
        value={selected?.value} 
        onChange={handleChange} 
        onKeyPressed={handleKeyPressed} 
        placeholder={placeholder} 
        onIconClick={() => setOpen(!open)} 
        onFocus={() => setOpen(true)} 
        onBlur={() => setOpen(false)} 
      />
      <ComboBoxElement.Options 
        selected={selected} 
        data={query ? filteredData : data} 
        open={open} 
      >
        {
          filteredData  
          ? filteredData?.map(item => (
            <ComboBoxElement.OptionItem 
              key={item.key}
              label={item.value}
              itemClick={() => setSelected(item)}
              className={clsx(
              {
                'bg-blue-100 text-blue-400': item.key === selected?.key,
                'text-gray-500': item.key !== selected?.key
              }
            )} />
          ))
          : data?.map(item => (
            <ComboBoxElement.OptionItem 
              key={item.key}
              label={item.value}
              itemClick={() => handleSelectionbyClick(item)}
              className={clsx(
              {
                'bg-blue-100 text-blue-400': item.key === selected?.key,
                'text-gray-500': item.key !== selected?.key
              }
            )} />
          ))
        }
      </ComboBoxElement.Options>
    </ComboBoxElement.Root>
  )
}