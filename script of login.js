document.addEventListener('DOMContentLoaded', (event) => {
  const loginForm = document.getElementById('loginForm');
  
  const handleLogin = (event) => {
      event.preventDefault(); // Prevent the form from submitting the default way
      
      // Call the validateForm function
      if (validateForm()) {
          // If validation passes, you can optionally do something here
          // or just let the validation function handle the redirection
      }
  };

  const validateForm = () => {
      var username = document.getElementById('username').value.trim();
      var password = document.getElementById('password').value.trim();

      if (username === '' || password === '') {
          Swal.fire({
              icon: 'error',
              title: 'Input Error',
              text: 'Please enter both username and password.'
          });
          return false;
      } else if (username === 'Admin' && password === 'Admin') {
          Swal.fire({
              icon: 'success',
              title: 'Login successful!',
              text: 'Please wait for a moment.',
              showConfirmButton: false,
              timer: 1500,
              willClose: () => {
                  window.location.href = 'Senior Secondary Course.html'; 
              }
          });
          return true; // Allow form submission
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Invalid Username or Password',
              text: 'Please try again.'
          });
          return false;
      }
  };

  loginForm.addEventListener('submit', handleLogin);
});