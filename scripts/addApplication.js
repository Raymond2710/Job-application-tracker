const addApplicationBtn = document.getElementById('addApplication');

const formContainer = document.createElement('section');
formContainer.id = 'form';


addApplicationBtn.addEventListener('click', () => {
  
  formContainer.innerHTML = '';
  
  const form = document.createElement('form');
  
  const button = document
 .createElement('button');
 button.classList.add('closeForm');
 button.type = 'button';
  
  const closeFormBtn = document.createElement('img');
  closeFormBtn.id = 'closeForm';
  closeFormBtn.src = 'images/x2.png';
  
  button.addEventListener('click', () => {
  
    formContainer.remove();
    
  });
  
  button.appendChild(closeFormBtn)
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Add job application';
  
  const inputContainer1 = document.createElement('div');
  
  const companyInput = document.createElement('input');
  companyInput.type = 'text';
  companyInput.placeholder = 'Company name';
  companyInput.addEventListener('input', () => {
    if (companyInput.value !== '') {
      p1.textContent = '';
    } else {
      p1.textContent = 'Company name is required.'
    };
  });
  
  const p1 = document.createElement('p');
  
  inputContainer1.appendChild(companyInput);
  inputContainer1.appendChild(p1);
  
  const inputContainer2 = document.createElement('div');
  
  const positionInput = document.createElement('input');
  positionInput.type = 'text';
  positionInput.placeholder = 'Position';
  positionInput.addEventListener('input', () => {
    if (positionInput.value.length > 1) {
      p2.textContent = '';
    } else {
      p2.textContent = 'Position is required.'
    };
  });
  
  const p2 = document.createElement('p');
  
  inputContainer2.appendChild(positionInput);
  inputContainer2.appendChild(p2);
  
  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.placeholder = 'Location';
  
  const salaryInput = document.createElement('input');
  salaryInput.type = 'number';
  salaryInput.placeholder = 'Salary';
  
  const inputContainer3 = document.createElement('div');
  const urlInput = document.createElement('input');
  urlInput.type = 'text';
  urlInput.placeholder = 'Job URL';
  const p3 = document.createElement('p');
  inputContainer3.appendChild(urlInput);
  inputContainer3.appendChild(p3);
  
  const select = document.createElement('select');
  
  
  const appliedStatus = document.createElement('option');
  appliedStatus.value = 'applied';
  appliedStatus.textContent = 'Applied';
  
  const interviewStatus = document.createElement('option');
  interviewStatus.value = 'interview';
  interviewStatus.textContent = 'Interview';
  
  const offerStatus = document.createElement('option');
  offerStatus.value = 'offer';
  offerStatus.textContent = 'Offer';
  
  const rejectedStatus = document.createElement('option');
  rejectedStatus.value = 'rejected';
  rejectedStatus.textContent = 'Rejected';
  
  const wishlistStatus = document.createElement('option');
  wishlistStatus.value = 'wishlist';
  wishlistStatus.textContent = 'Wishlist';
  
  select.appendChild(appliedStatus);
  select.appendChild(interviewStatus);
  select.appendChild(offerStatus);
  select.appendChild(rejectedStatus);
  select.appendChild(wishlistStatus);
  
  const inputContainer4 = document.createElement('div');
  
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.placeholder = 'Application date';
  dateInput.addEventListener('input', () => {
    if (dateInput.value !== '') {
      p4.textContent = '';
    } else {
      p4.textContent = 'Date is required.'
    };
  });
  
  const p4 = document.createElement('p');
  
  inputContainer4.appendChild(dateInput);
  inputContainer4.appendChild(p4);
  
  const notesInput = document.createElement('textarea');
  notesInput.placeholder = 'Write some notes';
  
  
  const formBtn  = document.createElement('button');
  formBtn.id = 'submitBtn';
  formBtn.textContent = 'Add Application'
  
  form.appendChild(button);
  form.appendChild(h2);
  form.appendChild(inputContainer1);
  form.appendChild(inputContainer2);
  form.appendChild(locationInput);
  form.appendChild(salaryInput);
  form.appendChild(inputContainer3);
  form.appendChild(select);
  form.appendChild(inputContainer4);
  form.appendChild(notesInput);
  form.appendChild(formBtn);
  
  form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    if (companyInput.value === '') {
      p1.textContent = 'Company name is required.';
      return;
    } 
    
    if (positionInput.value === '' || positionInput.value.length < 2) {
      p2.textContent = 'Position is required.';
      return;
    }
    
    
    
    const url = urlInput.value.trim();

    if (url !== '') {
      try {
        const parsedUrl = new URL(url);

        if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
          throw new Error();
        }

         p3.textContent = '';
      } catch {
        p3.textContent = 'Please enter a valid URL.';
        return;
      }
    }
      
    if (dateInput.value === '') {
      p4.textContent = 'Date is required.';
      return;
    }
  
      
    try {
     
      let application = {
        id: Date.now().toString(), 
        companyName: companyInput.value, 
        position: positionInput.value, 
        location: locationInput.value, 
        salary: salaryInput.value ? Number(salaryInput.value) : null, 
        url: urlInput.value, 
        status: select.value, 
        date: dateInput.value, 
        note: notesInput.value
      }
      
      applications.push(application);
      saveToLocalstorage();
      initializeApp();
      form.reset();
      formContainer.remove();
      
      successMessage('successful');
       
    } catch (e) {
      throw e
      successMessage('add-error')
    }
    
    
      
  });
  
  formContainer.appendChild(form);
  document.body.prepend(formContainer);
  
});



