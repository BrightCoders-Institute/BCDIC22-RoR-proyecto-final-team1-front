import { useState } from 'react';
import { DateRange } from 'react-date-range';
import './styles.css'; // main style file
import './default.css'; // theme css file

export default function Calendar() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const handleSelect = (ranges) => {
    setDateRange(ranges.selection);
  };

  return (
      <DateRange
        months={2}
        moveRangeOnFirstSelection={false}
        ranges={[dateRange]}
        onChange={handleSelect}
        rangeColors={["#000000"]}
        direction={'horizontal'}
      />
  );
}