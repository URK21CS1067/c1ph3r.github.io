const PHP_SELF = window.location.pathname;

if (/config\.js\/?$/i.test(PHP_SELF)) {
  document.body.textContent = "That's all you got, try even more harder :)";
  throw new Error("PHP_SELF ends with '/config.js'");
}

if (new URLSearchParams(window.location.search).has('source')) {
  // Redirect to the source file (config.js)
  window.location.href = 'config.js';
}

let secret = Array.from(window.crypto.getRandomValues(new Uint8Array(64)), val => val.toString(16)).join('');

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

const sourceLink = document.getElementById('sourceLink');
if (sourceLink) {
  sourceLink.addEventListener('click', (event) => {
    event.preventDefault();
    // Redirect to the source file (config.js)
    window.location.href = 'config.js';
  });
}
