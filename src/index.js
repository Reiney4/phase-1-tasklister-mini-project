document.addEventListener("DOMContentLoaded", () => {
  const myForm = document.getElementById('create-task-form')

  myForm.addEventListener('submit', function(event) {
    event.preventDefault();
  })
});