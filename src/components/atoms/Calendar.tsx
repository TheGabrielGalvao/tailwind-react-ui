import {useState} from 'react'
import { CaretLeft, CaretRight } from "phosphor-react"
import { ITime, timeAdd, timeFormat } from "../../util/helpers/datetimeFormat"

export const Calendar = () => {
  const [time, setTime] = useState<ITime>({
    hour: 8,
    minutes: 0
  })
  
  const handleSetTime = () => {
    const hours = (time.hour * 60 + 30) / 60
    const minutes = (time.hour * 60 + 30) % 60 === 0 ? 0 : 30 
    setTime({
      hour: hours,
      minutes: minutes
    })

  }

  

  return(
    <>
      <div className="text-gray-700">
        <div className="flex flex-col flex-grow">
          <div className="flex items-center mt-4">
              <div className="flex ml-6">
                  <button name='prev' title='prev'>
                      <CaretLeft size={20} weight="bold" />
                  </button>
                  <button name='next' title='next'>
                      <CaretRight size={20} weight="bold" />
                  </button>
              </div>
              <h2 className="ml-2 text-xl font-bold leading-none">Novembro, 2022</h2>
          </div>
        </div>
        <div className="grid grid-cols-7 mt-4 border border-blue-100 rounded-lg divide-x-2 divide-blue-100">
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Dom <span className="bg-blue-400 text-white rounded-lg px-2">02</span></div>
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Seg <span className="bg-yellow-500 text-black rounded-lg px-2">02</span></div>
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Ter <span className="bg-blue-400 text-white rounded-lg px-2">03</span></div>
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Qua <span className="bg-blue-400 text-white rounded-lg px-2">04</span></div>
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Qui <span className="bg-blue-400 text-white rounded-lg px-2">05</span></div>
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Sex <span className="bg-blue-400 text-white rounded-lg px-2">06</span></div>
          <div className="p-4 text-sm font-bold justify-center items-center flex gap-2 w-full">Sáb <span className="bg-blue-400 text-white rounded-lg px-2">07</span></div>
        </div>
        <div className="grid grid-cols-7 p-1 gap-1">
          {
            [...Array(7)].map(x=> (
              <div className="relative flex flex-col group gap-1">
                {
                  [...Array(10)].map(x => {
                    const timeFormated = timeFormat(time)
                    
                    return (
                    <span 
                      className="border-blue-100 border p-3 min-h-[2.5rem] rounded-sm hover:bg-gray-400/10 cursor-pointer" 
                      title={timeFormated}></span>
                  )})
                }            
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}