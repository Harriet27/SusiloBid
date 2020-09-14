const { useState } = require("react");

const converter = arr => {
  const arrOfObj = [
    {day: 'Sunday', count: 0},
    {day: 'Monday', count: 0},
    {day: 'Tuesday', count: 0},
    {day: 'Wednesday', count: 0},
    {day: 'Thursday', count: 0},
    {day: 'Friday', count: 0},
    {day: 'Saturday', count: 0}
  ];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 6; j > i; j--) {
      if (arr[i].day === arrOfObj[j].day) {
        arrOfObj[j].count += arr[i].count
      }
    }
  }
  return arrOfObj;
};

const coba1 = converter([
  {day: 'Monday', count: 2},
  {day: 'Thursday', count: 5},
  {day: 'Saturday', count: 9}
]);

const coba2 = converter([
  {day: 'Monday', count: 2},
  {day: 'Thursday', count: 5},
  {day: 'Saturday', count: 9}
]);

// console.log(coba1);
// console.log(coba2);

const INIT_STATE = {
  id: 0,
}
const [data, setData] = useState(INIT_STATE)
console.log(data);
