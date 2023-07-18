function handleSubmit(event) {
    event.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Display data
    var displayData = document.getElementById('displayData');
    displayData.innerHTML = `
      <h2>Registration Details:</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Password:</strong> ${password}</p>
    `;
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }
  
