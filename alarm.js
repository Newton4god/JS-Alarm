var alarmTime = "07:00"; // The alarm time
var alarm = new Audio("Oma Igala Nite.mp3"); // Set the alarm sound

function setAlarm() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var currentTimeString = hours + ":" + minutes;

  if (currentTimeString === alarmTime) {
    alarm.play();
    alert("Wake up! It's " + alarmTime);
  }
}

setInterval(setAlarm, 1000); // Check the time every second

