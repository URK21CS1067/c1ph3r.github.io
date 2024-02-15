// Check if the URL contains the 'source' query parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('source')) {
  // Perform actions specific to when the 'source' parameter is present
  // For example, display the source code of the page
  fetch(window.location.href)
    .then(response => response.text())
    .then(data => {
      // Display the source code in an alert box (you can customize this as needed)
      alert('Page Source:\n\n' + data);
    });
}

const secret = Array.from(window.crypto.getRandomValues(new Uint8Array(64)), val => val.toString(16)).join('');

const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    if (formData.has('guess')) {
      const guess = formData.get('guess');
      let message;
      if (secret === guess) {
        message = 'The flag is: ' + FLAG;
      } else {
        message = 'NICE TRY!!!';
      }
      document.body.textContent = message;
    }
  });
}
