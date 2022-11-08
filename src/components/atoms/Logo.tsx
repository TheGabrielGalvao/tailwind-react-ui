import clsx from "clsx"
import { HtmlHTMLAttributes } from "react"


export const Logo = ({children, className}: HtmlHTMLAttributes<HTMLElement>) => {
  return (
    <span className={clsx(
      'bg-blue-500 p-3 rounded-lg',
      className
    )}>
      {children}
    </span>
  )
}