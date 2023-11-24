const celsiusInput = document.getElementById('celsius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  if (celsiusInput.value) {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultDiv.innerText = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
  } else if (fahrenheitInput.value) {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
    resultDiv.innerText = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
  } else {
    resultDiv.innerText = 'Please enter a temperature.';
  }
});
