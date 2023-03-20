const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent form submission
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // perform login validation
  if (username === 'example_user' && password === 'example_password') {
    alert('Login successful!');
    // redirect to home page or dashboard
  } else {
    alert('Invalid username or password. Please try again.');
  }
});