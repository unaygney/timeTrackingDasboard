const btnDaily = document.getElementById('daily');
const btnWeekly = document.getElementById('weekly');
const btnMonthly = document.getElementById('monthly');
let data; 

btnDaily.addEventListener('click', () => updateData(data, 'daily'));
btnWeekly.addEventListener('click', () => updateData(data, 'weekly'));
btnMonthly.addEventListener('click', () => updateData(data, 'monthly'));

async function getData() {
  try {
    const res = await fetch('data.json');
    data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData(); 

function updateData(input, timeframe) {
  const boxHours = document.querySelectorAll('.hours');
  const preHours = document.querySelectorAll('.pre-hours');

  boxHours.forEach((hour, index) => {
    hour.textContent = input[index].timeframes[timeframe].current;
  });

  preHours.forEach((preHour, index) => {
    preHour.textContent = input[index].timeframes[timeframe].previous;
  });
}
