'use client'

import * as React from 'react'
import { Check, ChevronsUpDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from './command'

export function MultiSelect({
    options,
    selected = [],
    onChange,
    className,
    name,
    placeholder = 'Select options',
}) {
    const [open, setOpen] = React.useState(false)

    const handleSelect = (option) => {
        const isSelected = selected.find((item) => item.value === option.value)
        if (isSelected) {
            onChange?.(selected.filter((item) => item.value !== option.value))
        } else {
            onChange?.([...selected, option])
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={`w-full justify-between ${selected.length > 0 ? 'h-full' : ''
                        }`}
                >
                    <div className="flex gap-1 flex-wrap">
                        {selected.length > 0 ? (
                            selected.map((option) => (
                                <div
                                    key={option.value}
                                    className="bg-secondary text-secondary-foreground rounded-sm px-1 py-0.5 text-sm"
                                >
                                    {option.label}
                                </div>
                            ))
                        ) : (
                            <span>{placeholder}</span>
                        )}
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command className={className}>
                    <CommandInput placeholder="Search..." />
                    <CommandEmpty>No option found.</CommandEmpty>
                    <CommandGroup>
                        {options.map((option) => (
                            <CommandItem
                                key={option.value}
                                onSelect={() => handleSelect(option)}
                            >
                                <Check
                                    className={cn(
                                        'mr-2 h-4 w-4',
                                        selected.find((item) => item.value === option.value)
                                            ? 'opacity-100'
                                            : 'opacity-0'
                                    )}
                                />
                                {option.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
            {selected.map((option) => (
                <input
                    key={option.value}
                    type="hidden"
                    name={name}
                    value={option.value}
                />
            ))}
        </Popover>
    )
}

