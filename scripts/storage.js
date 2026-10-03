let applications = JSON.parse(localStorage.getItem('application')) || [];

function saveToLocalstorage() {
  localStorage.setItem('application', JSON.stringify(applications))
}

function deleteApplication(id) {
  
  try {
    
    const deleteMsgContainer = document.createElement('div');
    deleteMsgContainer.classList.add('delete-msg-container');
          
    const deleteMsg = document.createElement('div');
    deleteMsg.classList.add('delete-msg');
          
    const pMsg = document.createElement('p');
    pMsg.textContent = 'Are you sure you want to delete this application';
          
    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.textContent = 'Cancel';
    cancel.addEventListener('click', () => {
      deleteMsgContainer.style.display = 'none';
    });
          
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('confirm');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
            
      applications = applications.filter( application => application.id !== id);
      saveToLocalstorage();
      deleteMsgContainer.style.display = 'none';
      successMessage('deleted');
      
      refreshPage();
    
    });
    
    deleteMsg.appendChild(pMsg);
    deleteMsg.appendChild(cancel);
    deleteMsg.appendChild(deleteBtn);
    deleteMsgContainer.appendChild(deleteMsg);
          
    document.body.appendChild(deleteMsgContainer)
    
      
  } catch (e) {
    throw e
    successMessage('delete-error')
  }
  
}


