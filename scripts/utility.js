const menu = document.getElementById('menu');
const middle = document.querySelector('ul');
const right = document.querySelector('.right');
const themeBtn = document.getElementById('toggleBtn');
const body = document.querySelector('body');

let theme = JSON.parse(localStorage.getItem('theme'));

if (theme === 'dark') {
  body.classList.add('dark');
  themeBtn.checked = true;
};

menu.addEventListener('click', () => {
  
  middle.classList.toggle('middle-display');
  right.classList.toggle('right-display');
  
});

themeBtn.addEventListener('change', () => {
  
  if (themeBtn.checked) {
    body.classList.add('dark');
    saveTheme('dark');
  } else {
    body.classList.remove('dark');
    saveTheme('light');
  };
  
});

function saveTheme(theme) {
  localStorage.setItem('theme', JSON.stringify(theme));
};

function formatDate(date) {
  
  const appDate = new Date(date);
  let month;
  let day;
  
  switch (appDate.getMonth()) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
      break;
  };
  
  let applicationDate = month + ' ' + appDate.getDate() + ', '  + appDate.getFullYear();
  
  return applicationDate;
  
}

function formatUrl (url) {
  
  if (url === '') {
    return 'No URL Provided.';
  } else if (url.length === 20) {
    return url;
  } else {
    return url.slice(0,20) + '...';
  }
  
}

function formatNote(note) {
  
  if (!note) {
    return 'No notes';
  }
  
  let noteArr = note.split(' ');
  if (noteArr.length > 1) {
    return `${noteArr[0]} ${noteArr[1]}...`;
  } else {
    return `${noteArr[0]}`;
  }
  
  
}

