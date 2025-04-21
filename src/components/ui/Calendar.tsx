"use client"

import { cn } from '@/utils/utils';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import * as React from 'react'
import { sizeIcon } from '../layout/Sidebar';

function CalendarHead({ currentDate, setCurrentDate }: { currentDate: Date, setCurrentDate: (date: Date) => void }) {

    const mapMonths: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    const toggleChangeYear = (direction: "next" | "previus") => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        newDate.setFullYear(direction === "next" ? currentDate.getFullYear() + 1 : currentDate.getFullYear() - 1);
        setCurrentDate(newDate);
    }
    const toggleChangeMonth = (direction: "next" | "previus") => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        newDate.setMonth(direction === "next" ? currentDate.getMonth() + 1 : currentDate.getMonth() - 1);
        setCurrentDate(newDate);
    }


    return <div className="flex text-center items-center justify-center gap-2 w-full">

        <button type="button" onClick={() => toggleChangeYear("previus")}>
            <ChevronsLeft size={sizeIcon} />
        </button>
        <button type="button" onClick={() => toggleChangeMonth("previus")}>
            <ChevronLeft size={sizeIcon} />
        </button>

        <span>
            {currentDate.getFullYear()}
        </span>
        <span>
            {mapMonths[currentDate.getMonth()]}
        </span>

        <button type="button" onClick={() => toggleChangeMonth("next")}>
            <ChevronRight size={sizeIcon} />
        </button>
        <button type="button" onClick={() => toggleChangeYear("next")}>
            <ChevronsRight size={sizeIcon} />
        </button>
    </div>
}

function CalendarGrid({ daysInMonth, firstDayOfMonth, setCurrentDate, currentDate }: { daysInMonth: number, firstDayOfMonth: number, setCurrentDate: (date: Date) => void, currentDate: Date }) {

    const mapDays: string[] = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

    const toggleSelectedDay = (day: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setCurrentDate(newDate);
    }

    return <div>
        <div className="grid grid-cols-7 gap-2 text-gray-300 text-center items-center">
            {mapDays.map(day => (
                <span key={day}>{day}</span>
            ))}
        </div>

        <div className="grid grid-cols-7 text-center items-center">

            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <span key={`empty-${index}`}></span>
            ))}

            {Array.from({ length: daysInMonth }).map((_, index) => (
                <button className="cursor-pointer hover:bg-gray-900 p-2 rounded-sm" type="button" onClick={() => toggleSelectedDay(index + 1)} key={index}>{index + 1}</button>
            ))}
        </div>
    </div>
}

export default function Calendar() {

    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [selectedDate, setSelectedDate] = React.useState<Date>(currentDate);

    React.useEffect(() => {
        if (currentDate) setSelectedDate(currentDate);
    }, [selectedDate, currentDate]);

    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    return <div className={cn("border-2 flex flex-col w-fit h-fit p-2")}>
        <CalendarHead currentDate={currentDate} setCurrentDate={setCurrentDate} />
        <CalendarGrid daysInMonth={daysInMonth} firstDayOfMonth={firstDayOfMonth} setCurrentDate={setCurrentDate} currentDate={currentDate} />
        <div>
            <span>Dia Seleccionado | {selectedDate.toLocaleDateString()}</span>
        </div>
    </div>
}
