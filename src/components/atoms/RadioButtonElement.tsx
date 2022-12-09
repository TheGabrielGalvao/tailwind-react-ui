import clsx from 'clsx'
import { InputHTMLAttributes } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { useState } from 'react';

export interface RadioButtonElementProps extends InputHTMLAttributes<HTMLInputElement> { }

const starters = [
    { id: "red", title: "option 1" },
    { id: "green", title: "option 2" },
    { id: "blue", title: "option 3" },
    { id: "grey", title: "option 4" },

];

export const RadioButtonElement = ({ className, ...props }: RadioButtonElementProps) => {

    const [value, setValue] = useState(starters[0].title);

    return (
        <form>
            <RadioGroupPrimitive.Root
                aria-label="Options starters"
                defaultValue={"option 1"}
                onValueChange={setValue}
                {...props}
            >
                <div className="mt-3 space-y-3">
                    {starters.map((option) => (
                        <div key={option.id} className="flex items-center">
                            <RadioGroupPrimitive.Item
                                id={option.id}
                                value={option.title}
                                className={clsx(
                                    "relative w-5 h-5 rounded-full",
                                    "border border-transparent text-black border-grey-400 cursor-pointer",
                                    "bg-white",
                                )}
                            >
                                <RadioGroupPrimitive.Indicator className="absolute inset-0 flex items-center justify-center leading-0">
                                    <div className="w-2.5 h-2.5 rounded-full bg-blue-400"></div>
                                </RadioGroupPrimitive.Indicator>
                            </RadioGroupPrimitive.Item>
                            <label
                                htmlFor={option.id}
                                className="ml-2 block text-sm font-medium text-gray-400 text-gray-400"
                            >
                                {option.title}
                            </label>
                        </div>
                    ))}
                </div>
            </RadioGroupPrimitive.Root>
        </form>

    )
}