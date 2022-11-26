import '@fullcalendar/react/dist/vdom'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import timeGridPlugin from '@fullcalendar/timegrid' // a plugin!
import { CalendarElement } from "../atoms"


export const Calendar = () => {
  return(
    <FullCalendar
        plugins={[ timeGridPlugin ]}
        initialView="timeGridDay"
      />
    // <CalendarElement.Root>
    //   <CalendarElement.Controls />
    //   <CalendarElement.Header />
    //   <CalendarElement.Content />
    // </CalendarElement.Root>
  )
}