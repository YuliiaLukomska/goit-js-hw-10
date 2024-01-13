import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

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
      iziToast.error({
        title: 'Error',
        message: 'Illegal operation',
        backgroundColor: 'red',
      });
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
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function handleStartTimer() {
  intervalId = setInterval(() => {
    const startTime = Date.now();

    const differ = userSelectedDate - startTime;

    if (differ < 1000) {
      clearInterval(intervalId);
    }
    const convertedTime = convertMs(differ);

    valueArray[0].textContent = addLeadingZero(convertedTime.days);
    valueArray[1].textContent = addLeadingZero(convertedTime.hours);
    valueArray[2].textContent = addLeadingZero(convertedTime.minutes);
    valueArray[3].textContent = addLeadingZero(convertedTime.seconds);
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
