import React, { useState } from 'react';
import { Box, Calendar, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const CalendarForm = () => {
  const [dates, setDates] = useState([]);

  return (
    <Grommet theme={grommet}>
      <Box align="center">
        <Calendar
          dates={dates}
          onSelect={date => {
            const nextDates = [...dates];
            const index = nextDates.indexOf(date);
            if (index === -1) {
              nextDates.push(date);
            } else {
              nextDates.splice(index, 1);
            }
            setDates(nextDates);
            console.log('Select', date, nextDates);
          }}
          bounds={['2020-09-08', '2022-12-13']}
          animate={false}
          size="small"
          locale="ko"
        />
      </Box>
    </Grommet>
  );
};

export default CalendarForm;