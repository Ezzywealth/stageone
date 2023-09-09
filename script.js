const time = document.getElementById('utc_time');
const day = document.getElementById('day_of_week');

const utcTime = Date.now();
const currentDate = new Date();
const options = { weekday: 'long' };
const dayOfWeek = currentDate.toLocaleDateString(undefined, options);

day.innerHTML = dayOfWeek;
time.innerHTML = utcTime;
setInterval(() => {
	const utcTime = Date.now();
	time.innerHTML = utcTime;
}, 1000);
