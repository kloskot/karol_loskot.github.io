  const scriptURL = 'https://script.google.com/macros/s/AKfycbxaCehceGkCo1Vutp7V7iZGyuOT_I81zZYCq9hqjdqC6mmowmrH_YG2xLdoo8aDKlNO/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })