import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { TwitterLogo, User } from "phosphor-react";
import React, { ReactNode, useState } from "react";
import { ButtonElement } from "./ButtonElement";

interface RadixMenuItem {
  label: string;
  shortcut?: string;
  icon?: ReactNode;
}

interface User {
  name: string;
  url?: string;
}

const generalMenuItems: RadixMenuItem[] = [
  {
    label: "New File",
    shortcut: "⌘+N",
  },
  {
    label: "Settings",
    shortcut: "⌘+,",
  },
];

const regionToolMenuItems: RadixMenuItem[] = [
  {
    label: "Frame",
    shortcut: "⌘+F",
  },
  {
    label: "Crop",
    shortcut: "⌘+S",
  },
];

const users: User[] = [
  {
    name: "Adam",
    url: "https://github.com/adamwathan.png",
  },
  {
    name: "Steve",
    url: "https://github.com/steveschoger.png",
  },
  {
    name: "Robin",
    url: "https://github.com/robinmalfait.png",
  },
];

interface Props {}

export const DropdownMenuElement = (props: Props) => {
  const [showGrid, setShowGrid] = useState(false);
  const [showUi, setShowUi] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          <ButtonElement>Click</ButtonElement>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={clsx(
              " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white dark:bg-gray-800"
            )}
          >
            {generalMenuItems.map(({ label, icon, shortcut }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {icon}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
                {shortcut && <span className="text-xs">{shortcut}</span>}
              </DropdownMenuPrimitive.Item>
            ))}

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

            <DropdownMenuPrimitive.CheckboxItem
              checked={showGrid}
              onCheckedChange={(state: boolean) => {
                if (state) {
                  setShowGrid(state);
                }
              }}
              className={clsx(
                "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
              )}
            >
              <span className="flex-grow text-gray-700 dark:text-gray-300">
                Show Grid
              </span>
              <DropdownMenuPrimitive.ItemIndicator>
              </DropdownMenuPrimitive.ItemIndicator>
            </DropdownMenuPrimitive.CheckboxItem>

            <DropdownMenuPrimitive.CheckboxItem
              checked={showUi}
              onCheckedChange={(state: boolean) => {
                if (state) {
                  setShowUi(state);
                }
              }}
              className={clsx(
                "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
              )}
            >
              <span className="flex-grow text-gray-700 dark:text-gray-300">
                Show UI
              </span>
              <DropdownMenuPrimitive.ItemIndicator>
              </DropdownMenuPrimitive.ItemIndicator>
            </DropdownMenuPrimitive.CheckboxItem>

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

            <DropdownMenuPrimitive.Label className="select-none px-2 py-2 text-xs text-gray-700 dark:text-gray-200">
              Region Tools
            </DropdownMenuPrimitive.Label>

            {regionToolMenuItems.map(({ label, icon, shortcut }, i) => (
              <DropdownMenuPrimitive.Item
                key={`${label}-${i}`}
                className={clsx(
                  "flex cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {icon}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  {label}
                </span>
                {shortcut && <span className="text-xs">{shortcut}</span>}
              </DropdownMenuPrimitive.Item>
            ))}

            <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />

            <DropdownMenuPrimitive.Sub>
              <DropdownMenuPrimitive.SubTrigger
                className={clsx(
                  "flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none",
                  "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                )}
              >
                {showGrid ? (
                <User className="mr-2 h-4 w-4" />
              ) : (
                <TwitterLogo className="mr-2 h-3.5 w-3.5 text-gray-700 dark:text-gray-300" />
              )}
                <span className="flex-grow text-gray-700 dark:text-gray-300">
                  Share
                </span>
              </DropdownMenuPrimitive.SubTrigger>
              <DropdownMenuPrimitive.Portal>
                <DropdownMenuPrimitive.SubContent
                  className={clsx(
                    "origin-radix-dropdown-menu radix-side-right:animate-scale-in",
                    "w-full rounded-md px-1 py-1 text-xs shadow-md",
                    "bg-white dark:bg-gray-800"
                  )}
                >
                  {users.map(({ name, url }, i) => (
                    <DropdownMenuPrimitive.Item
                      key={`${name}-${i}`}
                      className={clsx(
                        "flex w-28 cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none md:w-32",
                        "text-gray-400 focus:bg-gray-50 dark:text-gray-500 dark:focus:bg-gray-900"
                      )}
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {name}
                      </span>
                    </DropdownMenuPrimitive.Item>
                  ))}
                </DropdownMenuPrimitive.SubContent>
              </DropdownMenuPrimitive.Portal>
            </DropdownMenuPrimitive.Sub>
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};