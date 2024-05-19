//create one method parse shift to time example shift 1 => start 6:30 end 9:00
// i have 6 shift 1,2,3,4,5,6
// create one method parse shift to time example shift 1 => start 6:30 end 9:00

export const parseShiftToTime = (shift, time) => {
  const start = timeStart[shift]
  const end = timeEnd[shift]
  // time is a string like "time": "5/14/2024",MM/DD/YYYY
  //i wanna format to start: '2024-05-04T18:00:00', end '2024-05-04T20:40:00'

  const [month, day, year] = time.split('/')
  const timeFormat = `${year}-${month}-${day}`
  return {
    start: `${timeFormat}T${start}`,
    end: `${timeFormat}T${end}`,
    shift: shifts[shift],
  }
}

const timeStart = ['06:30:00', '09:10:00', '12:30:00', '15:10:00', '18:00:00']

const timeEnd = ['09:00:00', '11:40:00', '15:00:00', '17:40:00', '20:40:00']
const shifts = ['1-3', '4-6', '7-9', '10-12', '13-15']
