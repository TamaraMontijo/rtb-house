// Set the end date for the promo (7 days from now)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 7);
endDate.setHours(23, 59, 59, 999);

// Update the countdown every second
const countdown = setInterval(updateCountdown, 1000);

function updateCountdown() {
  const now = new Date();
  const timeLeft = endDate - now;

  // Check if the promo has ended
  if (timeLeft <= 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = 'Promo has ended!';
    return;
  }

  // Calculate the days, hours, minutes, and seconds left
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Format the countdown string
  let countdownString = "Time left: ";
  if (days > 0) {
    countdownString += `${days}-`;
  }
  if (days > 0 || hours > 0) {
    countdownString += `${hours.toString().padStart(2, '0')}-`;
  }
  countdownString += `${minutes.toString().padStart(2, '0')}-${seconds.toString().padStart(2, '0')}`;

  // Display the countdown
  document.getElementById('countdown').innerHTML = countdownString;
}