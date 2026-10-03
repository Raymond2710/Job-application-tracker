const applicationsContainer = document.getElementById('applications');
const searchBox = document.getElementById('searchBox');
const filterSelect = document.getElementById('filter');
const sortSelect = document.getElementById('sort');

function refreshPage() {
  initializeApp(getFilteredApplication());
}

searchBox.addEventListener('input', () => {
    
    let data = getFilteredApplication();
    
    renderApplications(data);
    
  });
  
filterSelect.addEventListener('change', (e) => {
    
    
    let data = getFilteredApplication();
    
    renderApplications(data);
   
    
  });
  
sortSelect.addEventListener('change', (e) => {
    
    let data = getFilteredApplication();
    
    renderApplications(data);
    
  });
  
function getFilteredApplication() {
  
  let result = [...applications];
  let search = searchBox.value.trim().toLowerCase();
  let filteredValue = filterSelect.value.trim().toLowerCase();
  let sortValue = sortSelect.value.trim().toLowerCase();
  
  if (search) {
    result = result.filter( application => application.companyName.toLowerCase(). includes(search) || application.position.toLowerCase().includes(search) || application.location.toLowerCase().includes(search) );
  }
  
  if (filteredValue !== 'all') {
    result = result.filter( application => application.status === filteredValue);
  }
  
  if (sortValue === 'newest') {
      result.sort( (a, b) => 
        new Date(b.date) - new Date(a.date)
      );
  } else if (sortValue === 'oldest') {
    result.sort( (a, b) => 
      new Date(a.date) - new Date(b.date)
    );
  } else if (sortValue === 'a-z') {
    result.sort( (a, b) => 
      a.companyName.localeCompare(b.companyName)
    );
  } else if (sortValue === 'z-a') {
    result.sort( (a, b) => 
      b.companyName.localeCompare(a.companyName)
    );
  }
    
  return result;
  
}



function renderStatistics() {
  
  document.querySelector('.total-value').textContent = applications.length;
  
  document.querySelector('.wishlist-value').textContent = applications.filter(application => application.status === 'wishlist').length;

  document.querySelector('.applied-value').textContent = applications.filter(application => application.status === 'applied').length;
  
  document.querySelector('.interview-value').textContent = applications.filter(application => application.status === 'interview').length;
  
  document.querySelector('.offer-value').textContent = applications.filter(application => application.status === 'offer').length;
  
  document.querySelector('.rejected-value').textContent = applications.filter(application => application.status === 'rejected').length;
  
}

function renderApplications(data = applications) {
  
  applicationsContainer.innerHTML = '';
  
  if (data.length === 0) {
  const p = document.createElement('p');
  applicationsContainer.classList.add('empty');

  if (applications.length === 0) {
    p.textContent = "You don't have any job applications yet.";
  } else {
    p.textContent = 'No applications match your search or filter.';
  }

  applicationsContainer.appendChild(p);
} else {
    applicationsContainer.classList.remove('empty');
  };
  
  data.forEach( application => {
      
    const applicationContainer = document.createElement('div');
    applicationContainer.classList.add('application');
      
    const badge = document.createElement('div');
    badge.classList.add('badge');
    badge.classList.add(`${application.status}`)
      
    const itemContainer1 = document.createElement('div');
    itemContainer1.classList.add('item-container');
    const companyH3 = document.createElement('h3');
    companyH3.textContent = `Company:`;
    const companyName = document.createElement('p');
    companyName.classList.add('company-name');
    companyName.textContent = application.companyName;
    itemContainer1.appendChild(companyH3);
    itemContainer1.appendChild(companyName);
      
    const itemContainer2 = document.createElement('div');
    itemContainer2.classList.add('item-container');
    const positionH3 = document.createElement('h3');
    positionH3.textContent = `Position:`;
    const positionValue = document.createElement('p');
    positionValue.classList.add('value');
    positionValue.textContent = application.position;
    itemContainer2.appendChild(positionH3);
    itemContainer2.appendChild(positionValue);
      
    const itemContainer3 = document.createElement('div');
    itemContainer3.classList.add('item-container');
    const locationH3 = document.createElement('h3');
    locationH3.textContent = `Location:`;
    const locationValue = document.createElement('p');
    locationValue.classList.add('value');
    locationValue.textContent = application.location;
    itemContainer3.appendChild(locationH3);
    itemContainer3.appendChild(locationValue);
      
    const itemContainer4 = document.createElement('div');
    itemContainer4.classList.add('item-container');
    const salaryH3 = document.createElement('h3');
    salaryH3.textContent = `Salary:`;
    const salaryValue = document.createElement('p');
    salaryValue.classList.add('value');
    salaryValue.textContent = application.salary ?'$' + application.salary : 'Not specified';
    itemContainer4.appendChild(salaryH3);
    itemContainer4.appendChild(salaryValue);
      
    const itemContainer5 = document.createElement('div');
    itemContainer5.classList.add('item-container');
    const urlH3 = document.createElement('h3');
    urlH3.textContent = `Job URL:`;
    const urlValue = document.createElement('p');
    urlValue.classList.add('value');
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
    
    itemContainer5.appendChild(urlH3);
    itemContainer5.appendChild(urlValue);
      
    const itemContainer6 = document.createElement('div');
    itemContainer6.classList.add('item-container');
    const statusH3 = document.createElement('h3');
    statusH3.textContent = `Status:`;
    const statusValue = document.createElement('p');
    statusValue.classList.add('value');
    statusValue.textContent = application.status;
    itemContainer6.appendChild(statusH3);
    itemContainer6.appendChild(statusValue);
      
    const itemContainer7 = document.createElement('div');
    itemContainer7.classList.add('item-container');
    const dateH3 = document.createElement('h3');
    dateH3.textContent = `Application date:`;
    const dateValue = document.createElement('p');
    dateValue.classList.add('value');
    dateValue.textContent = formatDate(application.date);
    itemContainer7.appendChild(dateH3);
    itemContainer7.appendChild(dateValue);
      
    const itemContainer8 = document.createElement('div');
    itemContainer8.classList.add('item-container');
    const notesH3 = document.createElement('h3');
    notesH3.textContent = `Notes:`;
    const notesValue = document.createElement('p');
    notesValue.classList.add('value');
    notesValue.textContent = formatNote(application.note);
    itemContainer8.appendChild(notesH3);
    itemContainer8.appendChild(notesValue);
      
    const editDeleteContainer = document.createElement('div');
    editDeleteContainer.classList.add('edit-delete');
      
    const editBtn = document.createElement('button');
    editBtn.classList.add('editBtn');
    editBtn.textContent = 'Edit';
    editBtn.addEventListener('click', () => {
        
      updateApplication(application.id);
        
    });
      
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
        
      deleteApplication(application.id);
          
    });
      
    const moreBtn = document.createElement('button');
    moreBtn.classList.add('moreBtn');
    const eyeIcon = document.createElement('img');
    eyeIcon.classList.add('eyeIcon');
    eyeIcon.src = 'images/eye.png';
    moreBtn.appendChild(eyeIcon);
    moreBtn.addEventListener('click', () => {
      showMore(application);
      });
      
      
    editDeleteContainer.appendChild(editBtn);
    editDeleteContainer.appendChild(deleteBtn);
    editDeleteContainer.appendChild(moreBtn);
     
    applicationContainer.appendChild(badge);
    applicationContainer.appendChild(itemContainer1);
    applicationContainer.appendChild(itemContainer2);
    applicationContainer.appendChild(itemContainer3);
    applicationContainer.appendChild(itemContainer4);
    applicationContainer.appendChild(itemContainer5);
    applicationContainer.appendChild(itemContainer6);
    applicationContainer.appendChild(itemContainer7);
    applicationContainer.appendChild(itemContainer8);
    applicationContainer.appendChild(editDeleteContainer);
      
      
    applicationsContainer.appendChild(applicationContainer);
      
  });
    
  
}