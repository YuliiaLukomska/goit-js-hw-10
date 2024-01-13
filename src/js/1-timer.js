import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let userSelectedDate;
let intervalId = null;
const btnRef = document.querySelector('button[data-start]');
btnRef.disabled = true;
const valueArray = document.querySelectorAll(`.value`);

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
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function handleStartTimer() {
  intervalId = setInterval(() => {
    const startTime = Date.now();

    const differ = userSelectedDate - startTime;
    console.log(differ);
    if (differ <= 1000) {
      clearInterval(intervalId);
    }
    const convertedTime = convertMs(differ);

    valueArray[0].textContent = convertedTime.days.toString().padStart(2, '0');
    valueArray[1].textContent = convertedTime.hours.toString().padStart(2, '0');
    valueArray[2].textContent = convertedTime.minutes
      .toString()
      .padStart(2, '0');
    valueArray[3].textContent = convertedTime.seconds
      .toString()
      .padStart(2, '0');
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
