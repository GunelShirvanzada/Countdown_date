const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
// ------------------------------------------------

const today = new Date();
const someDay = new Date('06/11/2026');
const totalTime = someDay - today;

const daysTime = Math.floor(totalTime / (1000 * 60 * 60 * 24));
const hoursTime = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutesTime = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
const secondsTime = Math.floor((totalTime % (1000 * 60)) / 1000);

days.textContent = daysTime;
hours.textContent = hoursTime;
minutes.textContent = minutesTime;
seconds.textContent = secondsTime;
