import { Listbox, Transition } from "@headlessui/react";
import React from "react";

import { IconChevronDown } from "../data/icon";
import SelectionIndicator from "./SelectionIndicator";

interface SelectProps {
  options: { name: string }[];
  value: { name: string };
  onChange: (value: { name: string }) => void;
}

const Select: React.VFC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <Listbox.Button className="relative w-full cursor-pointer rounded bg-white py-2 pl-3 pr-10 text-left text-sm dark:bg-dark-20">
          <span className="block truncate">{value.name}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <IconChevronDown />
          </span>
        </Listbox.Button>
        <Transition
          as={React.Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-sm dark:bg-dark-35">
            {options.map((option, optionIdx) => (
              <Listbox.Option
                key={optionIdx}
                className={({ selected }) =>
                  `${selected ? "dark:bg-dark-20" : ""}
                          relative mx-2 flex cursor-pointer select-none items-center rounded py-2 hover:dark:bg-dark-20`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <SelectionIndicator selected={selected} />
                    <div className={"block truncate"}>{option.name}</div>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default Select;
