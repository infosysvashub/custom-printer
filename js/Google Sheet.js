const scriptURL = 'https://script.google.com/macros/s/AKfycbyQMXcWtTmmlBoSOSkyfi44-2uFO7VA3sQ2Mdp5chGyhssD3JzFt0ne84nBImJ8R4sp/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      // alert("Thank you! Your form has been submitted successfully.")
      setTimeout(() => {
        window.location.href = 'thank.html' // Redirect after 3 seconds
      }, 1000); // 3000 milliseconds = 3 seconds
    })
    .catch(error => console.error('Error!', error.message))
})
