import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let intervalId = null;
const btnRef = document.querySelector('button[data-start]');
btnRef.disabled = true;

const valueArray = document.querySelectorAll(`.value`);
btnRef.addEventListener('click', handleStartTimer);

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
      btnRef.classList.remove('active-btn');
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
        class: 'toast',
        position: 'topRight',
        iconUrl: '../img/left-close.svg',
        titleColor: 'white',
        messageColor: 'white',
        timeout: false,
        backgroundColor: '#EF4040',
      });
    } else {
      btnRef.disabled = false;
      btnRef.classList.add('active-btn');
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
  btnRef.disabled = true;
  btnRef.classList.remove('active-btn');
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
