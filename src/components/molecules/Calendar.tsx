import { CalendarElement } from "../atoms"


export const Calendar = () => {
  return(
    <CalendarElement.Root>
      <CalendarElement.Controls />
      <CalendarElement.Header />
      <CalendarElement.Content />
    </CalendarElement.Root>
  )
}