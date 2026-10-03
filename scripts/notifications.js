function successMessage(notification) {
  
  const message = document.createElement('div');
  if (notification === 'successful') {
    message.classList.add('success-message');
    message.textContent = 'Application added successfully.';
  } else if (notification === 'deleted') {
    message.classList.add('success-message');
    message.textContent = 'Application deleted successfully.';
  } else if (notification === 'update') {
    message.classList.add('success-message');
    message.textContent = 'Application updated successfully.';
  } else if (notification === 'add-error') {
    message.classList.add('error-message');
    message.textContent = 'Application not added successfully.';
  } else if (notification === 'update-error') {
    message.classList.add('error-message');
    message.textContent = 'Application not updated successfully.';
  } else if (notification === 'delete-error') {
    message.classList.add('error-message');
    message.textContent = 'Application not deleted successfully.';
  } 
  
  
  
  message.classList.add('fadeIn');
  
  
  document.querySelector('.message-container').prepend(message);
  
  setTimeout( () => {
    message.classList.replace('fadeIn','fadeOut');
  }, 4000);
  
  setTimeout( () => {
    message.remove();
  }, 5000)
  
}

