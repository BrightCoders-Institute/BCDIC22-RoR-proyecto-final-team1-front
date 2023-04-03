import { useState } from 'react';
import { DateRange } from 'react-date-range';
import './styles.css'; // main style file
import './default.css'; // theme css file

export default function Calendar({details}) {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const days = () => {
    const startMs = dateRange.startDate.getTime();
    const endMs = dateRange.endDate.getTime();
    const diffMs = endMs - startMs;
    return diffMs >= 1 ? Math.floor(diffMs / (1000 * 60 * 60 * 24)+1)+" noches" : "1 noche"
  }
  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
    <>
    <div className='ml-10'>
      <h5 className='font-bold'>{days()} en {details.place.city}</h5>
      <span>{dateRange.startDate.toLocaleDateString('en-US', options)} - {dateRange.endDate.toLocaleDateString('en-US', options)}</span>
    </div>
      <DateRange
        months={2}
        ranges={[dateRange]}
        onChange={handleSelect}
        rangeColors={["#000000"]}
        direction={'horizontal'}
      />
    </>
  );
}