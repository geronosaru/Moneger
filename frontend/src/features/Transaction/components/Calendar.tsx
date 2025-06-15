import type React from "react";
import { DayPicker } from 'react-day-picker';
import { ja } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';


type CalendarProps = {
  selectedDate: Date | undefined;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date | undefined>>
};

const Calendar: React.FC<CalendarProps> = ({selectedDate, setSelectedDate}) => {
  return(
    <>
      <DayPicker
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        locale={ja}
        onMonthChange={(month) => console.log(month,"に変更されました")}
        modifiersClassNames={{
          selected: 'bg-purple-200 text-blue-800 font-bold',
          today: 'bg-yellow-100 text-yellow-800',
        }}
        className="text-sm size-80"
      />
    </>
  )
};


export default Calendar;