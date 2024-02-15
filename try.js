// Assuming 'config.js' defines FLAG similarly to 'config.php'
import { FLAG } from './config.js';

// Simulating PHP's $_SERVER['PHP_SELF']
const PHP_SELF = window.location.pathname;

if (/config\.php\/*$/i.test(PHP_SELF)) {
  document.body.textContent = "Thats's all you got, try even more harder :)";
  window.stop();
}

if (new URLSearchParams(window.location.search).has('source')) {
  // In JavaScript, we can't highlight the file as PHP does, but we can redirect to the file itself.
  window.location.href = PHP_SELF.split('/').pop();
}

const secret = window.crypto.getRandomValues(new Uint8Array(64)).reduce((acc, val) => acc + val.toString(16), '');

if (new FormData(document.querySelector('form')).has('guess')) {
  const guess = new FormData(document.querySelector('form')).get('guess');
  if (secret === guess) { // hash_equals is not necessary in JS as === does not suffer from timing attacks
    const message = 'The flag is: ' + FLAG;
  } else {
    const message = 'NICE TRY!!!';
  }
}

