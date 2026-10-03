const editFormContainer = document.createElement('section');
editFormContainer.id = 'updateForm';



function updateApplication(id) {
  
  
  let index;
  let update = applications.find( (application, i) => {
    
    if (application.id === id) {
      index = i;
      return application;
    }
    
  });
  
  
  editFormContainer.innerHTML = '';
  
  const formEl = document.createElement('form');
  
  const button = document
 .createElement('button');
 button.classList.add('closeForm');
 button.type = 'button';
 
  const removeBtn = document.createElement('img');
  removeBtn.id = 'removeBtn';
  removeBtn.src = 'images/x2.png';
  button.addEventListener('click', () => {
    
    editFormContainer.remove();
    
  });
  
  button.appendChild(removeBtn);
  
  const h2 = document.createElement('h2');
  h2.textContent = 'Update job application';
  
  const inputContainer1 = document.createElement('div');
  const companyInput = document.createElement('input');
  companyInput.type = 'text';
  companyInput.placeholder = 'Company name';
  companyInput.value = update.companyName;
  const p1 = document.createElement('p');
  companyInput.addEventListener('input', () => {
    if (companyInput.value !== '') {
      p1.textContent = '';
    } else {
      p1.textContent = 'Company name is required.'
    };
  });
  
  inputContainer1.appendChild(companyInput);
  inputContainer1.appendChild(p1);
  
  const inputContainer2 = document.createElement('div');
  const positionInput = document.createElement('input');
  positionInput.type = 'text';
  positionInput.placeholder = 'Position';
  positionInput.value = update.position;
  const p2 = document.createElement('p');
  positionInput.addEventListener('input', () => {
    if (positionInput.value.length > 1) {
      p2.textContent = '';
    } else {
      p2.textContent = 'Position is required.'
    };
  });
  
  inputContainer2.appendChild(positionInput);
  inputContainer2.appendChild(p2);
  
  
  const locationInput = document.createElement('input');
  locationInput.type = 'text';
  locationInput.placeholder = 'Location';
  locationInput.value = update.location;
  
  
  const salaryInput = document.createElement('input');
  salaryInput.type = 'number';
  salaryInput.placeholder = 'Salary';
  salaryInput.value = update.salary;
  
  const inputContainer3 = document.createElement('div');
  const urlInput = document.createElement('input');
  urlInput.type = 'text';
  urlInput.placeholder = 'Job URL';
  urlInput.value = update.url;
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
  
  select.value = update.status;
  
  const inputContainer4 = document.createElement('div');
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.placeholder = 'Application date';
  dateInput.value = update.date;
  const p4 = document.createElement('p');
  dateInput.addEventListener('input', () => {
    if (dateInput.value !== '') {
      p4.textContent = '';
    } else {
      p4.textContent = 'Date is required.'
    };
  });
  
  inputContainer4.appendChild(dateInput);
  inputContainer4.appendChild(p4);
  
  
  
  const notesInput = document.createElement('textarea');
  notesInput.placeholder = 'Write some notes';
  notesInput.value = update.note;
  
  const formBtn  = document.createElement('button');
  formBtn.id = 'formBtn';
  formBtn.textContent = 'Edit Application'
  
  formEl.appendChild(button);
  formEl.appendChild(h2);
  formEl.appendChild(inputContainer1);
  formEl.appendChild(inputContainer2);
  formEl.appendChild(locationInput);
  formEl.appendChild(salaryInput);
  formEl.appendChild(inputContainer3);
  formEl.appendChild(select);
  formEl.appendChild(inputContainer4);
  formEl.appendChild(notesInput);
  formEl.appendChild(formBtn);
  
  formEl.addEventListener('submit', (e) => {
    
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
        id: update.id, 
        companyName: companyInput.value, 
        position: positionInput.value, 
        location: locationInput.value, 
        salary: salaryInput.value ? Number(salaryInput.value) : null, 
        url: urlInput.value, 
        status: select.value, 
        date: dateInput.value, 
        note: notesInput.value
      }
      
      applications.splice(index,1,application);
      saveToLocalstorage();
      formEl.reset();
      editFormContainer.remove();
      initializeApp();
      successMessage('update')
        
    } catch (e) {
      throw e
      successMessage('update-error')
    }
    
  });
  
  editFormContainer.appendChild(formEl);
  document.body.prepend(editFormContainer)
  
}




function showMore(application) {
 
  const more = document.createElement('section');
  more.classList.add('more');
  more.innerHTML = '';
  
  const moreContainer = document.createElement('div');
  moreContainer.classList.add('more-container');
  
  const detailContainer1 = document.createElement('div');
  detailContainer1.classList.add('detail-container');
  const companyTitle = document.createElement('h3');
  companyTitle.textContent = 'Company name:';
  const companyValue = document.createElement('p');
  companyValue.classList.add('detail-value1');
  companyValue.textContent = application.companyName;
  detailContainer1.appendChild(companyTitle);
  detailContainer1.appendChild(companyValue);
  
  const detailContainer2 = document.createElement('div');
  detailContainer2.classList.add('detail-container');
  const positionTitle = document.createElement('h3');
  positionTitle.textContent = 'Position:';
  const positionValue = document.createElement('p');
  positionValue.classList.add('detail-value');
  positionValue.textContent = application.position;
  detailContainer2.appendChild(positionTitle);
  detailContainer2.appendChild(positionValue);
  
  const detailContainer3 = document.createElement('div');
  detailContainer3.classList.add('detail-container');
  const locationTitle = document.createElement('h3');
  locationTitle.textContent = 'Location:';
  const locationValue = document.createElement('p');
  locationValue.classList.add('detail-value');
  locationValue.textContent = application.location;
  detailContainer3.appendChild(locationTitle);
  detailContainer3.appendChild(locationValue);
  
  const detailContainer4 = document.createElement('div');
  detailContainer4.classList.add('detail-container');
  const salaryTitle = document.createElement('h3');
  salaryTitle.textContent = 'Salary:';
  const salaryValue = document.createElement('p');
  salaryValue.classList.add('detail-value');
  salaryValue.textContent = application.salary ? `$${application.salary}` : 'Not specified';
  detailContainer4.appendChild(salaryTitle);
  detailContainer4.appendChild(salaryValue);
  
  const detailContainer5 = document.createElement('div');
  detailContainer5.classList.add('detail-container');
  const urlTitle = document.createElement('h3');
  urlTitle.textContent = 'Job URL:';
  const urlValue = document.createElement('p');
  urlValue.classList.add('detail-value');
  const urlLink = document.createElement('a');
  if (application.url) {
      urlLink.href = application.url;
      urlLink.target = '_blank';
      urlLink.rel = 'noopener noreferrer';
      urlLink.textContent = formatUrl(application.url);
      urlValue.appendChild(urlLink);
    } else {
      urlValue.textContent = 'No URL provided';
    }
    
  detailContainer5.appendChild(urlTitle);
  detailContainer5.appendChild(urlValue);
  
  const detailContainer6 = document.createElement('div');
  detailContainer6.classList.add('detail-container');
  const statusTitle = document.createElement('h3');
  statusTitle.textContent = 'Status:';
  const statusValue = document.createElement('p');
  statusValue.classList.add('detail-value');
  statusValue.textContent = application.status;
  detailContainer6.appendChild(statusTitle);
  detailContainer6.appendChild(statusValue);
  
  const detailContainer7 = document.createElement('div');
  detailContainer7.classList.add('detail-container');
  const dateTitle = document.createElement('h3');
  dateTitle.textContent = 'Application date:';
  const dateValue = document.createElement('p');
  dateValue.classList.add('detail-value');
  dateValue.textContent = formatDate(application.date);
  detailContainer7.appendChild(dateTitle);
  detailContainer7.appendChild(dateValue);
  
  const detailContainer8 = document.createElement('div');
  detailContainer8.classList.add('detail-container');
  const notesTitle = document.createElement('h3');
  notesTitle.textContent = 'Notes:';
  const notesValue = document.createElement('p');
  notesValue.classList.add('detail-value');
  notesValue.textContent = application.note ? application.note : 'No notes';
  detailContainer8.appendChild(notesTitle);
  detailContainer8.appendChild(notesValue);
  
  const detailContainer9 = document.createElement('div');
  detailContainer9.classList.add('detail-container');
  const closeMoreBtn = document.createElement('button');
  const eyeOffIcon = document.createElement('img');
  eyeOffIcon.src = 'images/eye-off.png'
  closeMoreBtn.addEventListener('click', () => {
    more.remove();
  });
  closeMoreBtn.appendChild(eyeOffIcon);
  detailContainer9.appendChild(closeMoreBtn);
  
  moreContainer.appendChild(detailContainer1);
  moreContainer.appendChild(detailContainer2);
  moreContainer.appendChild(detailContainer3);
  moreContainer.appendChild(detailContainer4);
  moreContainer.appendChild(detailContainer5);
  moreContainer.appendChild(detailContainer6);
  moreContainer.appendChild(detailContainer7);
  moreContainer.appendChild(detailContainer8);
  moreContainer.appendChild(detailContainer9);
  
  more.appendChild(moreContainer);
  document.body.prepend(more);
  
}