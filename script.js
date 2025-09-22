
  
    const container = document.getElementById('container');
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

document.getElementById("loginBtn").addEventListener("click", function () {
    alert("Login button clicked! You can add login logic here.");
  });
  
  document.getElementById("registerBtn").addEventListener("click", function () {
    alert("Register button clicked! You can add registration logic here.");
  });
  
toggleBtn.addEventListener('click', () => {
  container.classList.toggle('sign-up');
  container.classList.toggle('sign-in');

  
  if (container.classList.contains('sign-up')) {
    toggleText.textContent = 'Already have an account?';
    toggleBtn.textContent = 'Sign In';
  } else {
    toggleText.textContent = 'Don’t have an account?';
    toggleBtn.textContent = 'Sign Up';
  }
});
