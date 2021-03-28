// set date we're counting down to
let countDownDate = new Date('June 15, 2021 00:00:00').getTime();

//update the countdown every 1 second
let x = setInterval(function () {
  //get todays date and time
  let now = new Date().getTime();

  //find distance between now and the countdown date
  let distance = countDownDate - now;

  //time calculations for days,hours, minutes, secs
  let days = pad(Math.floor(distance / (1000 * 60 * 60 * 24)));
  let hours = pad(
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = pad(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
  let seconds = pad(Math.floor((distance % (1000 * 60)) / 1000));

  //Display result in the html elements.
  document.getElementById('days').innerHTML = days;
  document.getElementById('hours').innerHTML = hours;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('seconds').innerHTML = seconds;
});

//adds a zero if number is below 10

function pad(n) {
  return (n < 10 ? '0' : '') + n;
}
