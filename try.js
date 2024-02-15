// Simulating PHP's $_SERVER['PHP_SELF']
const PHP_SELF = window.location.pathname;

if (/config\.js\/?$/i.test(PHP_SELF)) {
  document.body.textContent = "That's all you got, try even more harder :)";
  throw new Error("PHP_SELF ends with '/config.php'");
}

if (new URLSearchParams(window.location.search).has('source')) {
  // In JavaScript, we can't highlight the file as PHP does, but we can redirect to the file itself.
  window.location.href = PHP_SELF.split('/').pop();
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
      if (secret === guess) { // hash_equals is not necessary in JS as === does not suffer from timing attacks
        message = 'The flag is: ' + FLAG;
      } else {
        message = 'NICE TRY!!!';
      }
      document.body.textContent = message;
    }
  });
}
