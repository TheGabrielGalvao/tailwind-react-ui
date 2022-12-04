import { filter, find, head } from "lodash"
import { KeyboardEvent, useState } from "react"
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
      setOpen(Boolean(filtered?.length > 0 ? true : false))
  } 

  const handleKeyPressed = (event: KeyboardEvent<HTMLOListElement>) => {
      let index = selectedIndex ?? -1 
      if(event.key === 'ArrowDown' && index < data?.length) {
         index = index + 1 
      }

      if(event.key === 'ArrowUp' && index >= 0) {
        index = index - 1 
      }
    const selection = handleSerchByIndex(index)
    setSelectedIndex(index)
    setSelected(selection) 

  }
        
  return (
    <ComboBoxElement.Root>
      <ComboBoxElement.Input value={selected?.value} onChange={handleChange} onKeyPressed={handleKeyPressed} placeholder={placeholder} onClick={() => setOpen(!open)} onFocus={() => setOpen(true)} />
      <ComboBoxElement.Options selected={selected} data={query ? filteredData : data} open={open} />
    </ComboBoxElement.Root>
  )
}