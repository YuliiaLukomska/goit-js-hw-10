import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;
let intervalId = null;
const btnRef = document.querySelector('button[data-start]');
btnRef.disabled = true;

const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    userSelectedDate = selectedDates[0];
    if (userSelectedDate - new Date() < 0) {
      btnRef.disabled = true;
      alert('Please choose a date in the future');
    } else {
      btnRef.disabled = false;
    }
  },
});

function handleStartTimer() {
  const startTime = Date.now();
  intervalId = setInterval(() => {
    const currentTime = Date.now();
    const differ = currentTime - startTime;
  }, 1000);
}

btnRef.addEventListener('click', handleStartTimer);

// const options = {
//   enableTime: true, доступність вибору часу в календарі
//   time_24hr: true,
//   defaultDate: new Date(), початкова дата - сьогоднішня
//   minuteIncrement: 1, збільшує хвилини на 1 при натисканні стрілки
//   onClose(selectedDates) {
//     console.log(selectedDates[0]);
//   },
// };
