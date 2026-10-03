# Job Application Tracker

A responsive, browser-based Job Application Tracker built with **HTML, CSS, and vanilla JavaScript**. The application helps users record, organize, search, filter, sort, update, and delete job applications while keeping their data saved in the browser using `localStorage`.

## Live Demo

**GitHub Pages:** `https://raymond2710.github.io/Job-application-tracker/`

## Screenshots

Screenshots for the project are stored in the `Screenshots` folder.

## Project Description

The Job Application Tracker is a frontend JavaScript project designed to make it easier to keep track of job applications in one place.

Users can:

- Add new job applications
- Record company, position, location, salary, URL, status, date, and notes
- View application statistics
- Search applications by company, position, or location
- Filter applications by status
- Sort applications by newest or oldest date
- View complete application details
- Edit existing applications
- Delete applications with confirmation
- Switch between light and dark mode
- Use the application on desktop and smaller screens
- Keep application data after refreshing the browser through `localStorage`

## Features

### Application Management

- **Create** — Add a new job application through a form.
- **Read** — Display saved applications and detailed application information.
- **Update** — Edit an existing application.
- **Delete** — Remove an application after confirmation.

### Search, Filter, and Sort

- Search by company name
- Search by job position
- Search by location
- Filter by application status
- Sort applications by newest, oldest, A-Z and Z-A
- Combine search, filter, and sort operations

### Dashboard Statistics

The dashboard calculates the number of applications in each status:

- Total applications
- Wishlist
- Applied
- Interview
- Offer
- Rejected

### Data Persistence

Application data is stored in the browser using `localStorage`. JavaScript objects are converted to JSON when saving and parsed back into JavaScript data when the application loads.

### Form Validation

The application validates required fields and checks optional job URLs to ensure that non-empty URLs use HTTP or HTTPS.

### Responsive Design

The interface includes responsive layouts for different screen sizes and a mobile navigation menu.

### Theme Support

Users can switch between light and dark mode. The selected theme is also saved using `localStorage`.

## Technologies Used

- **HTML5** — Page structure and semantic elements
- **CSS3** — Layout, responsive design, styling, dark mode, and form presentation
- **JavaScript (ES6+)** — Application logic, DOM manipulation, event handling, data processing, validation, and CRUD operations
- **Web Storage API (`localStorage`)** — Persistent browser storage
- **JSON** — Serialization and deserialization of application data
- **Git & GitHub** — Version control and project hosting
- **GitHub Pages** — Live deployment

## JavaScript Concepts Demonstrated

This project demonstrates the following concepts required for the project:

### 1. DOM Manipulation

The application creates, modifies, removes, and updates HTML elements dynamically using JavaScript DOM APIs such as:

- `document.createElement()`
- `appendChild()`
- `remove()`
- `textContent`
- `classList`
- `querySelector()`
- `getElementById()`

Application cards, forms, notifications, confirmation dialogs, and the details view are generated or updated through JavaScript.

### 2. Event Handling

The project responds to user actions using event listeners, including:

- `click`
- `input`
- `change`
- `submit`

Examples include adding applications, editing, deleting, searching, filtering, sorting, changing the theme, and opening the mobile menu.

### 3. JavaScript Data Structures

Application records are represented as JavaScript objects and stored inside an array.

Example structure:

```js
{
  id: "123456",
  companyName: "Google",
  position: "Frontend Developer",
  location: "Remote",
  salary: 85000,
  url: "https://careers.google.com/",
  status: "interview",
  date: "2026-09-25",
  note: "Technical interview scheduled."
}
```

### 4. Array Methods

The project uses array methods including:

- `filter()` — search, filter by status, and delete applications
- `find()` — locate an application for editing
- `sort()` — sort by application date
- `forEach()` — render application records
- `splice()` — replace an edited application

### 5. Form Handling

The application creates forms dynamically and handles form submission with `submit` event listeners. It validates required fields and prevents invalid submissions.

### 6. LocalStorage

Application records and the selected theme are persisted with the browser's `localStorage` API.

```js
localStorage.setItem('application', JSON.stringify(applications));
```

### 7. JSON

The project uses JSON to convert JavaScript data into strings for storage and then restore it as JavaScript data when the application starts.

```js
JSON.stringify(applications);
JSON.parse(localStorage.getItem('application'));
```

### 8. Modular JavaScript

The JavaScript code is divided into separate files according to responsibility:

```text⇝
scripts/
├── addApplication.js
├── app.js
├── applications.js
├── notifications.js
├── storage.js
└── utility.js
```

This keeps application logic, storage, utilities, notifications, and form functionality separated instead of placing everything in one JavaScript file.

### 9. CRUD Operations

The project demonstrates the four CRUD operations:

| Operation | Implementation |
|---|---|
| Create | Add a new job application |
| Read | Display saved applications |
| Update | Edit an existing application |
| Delete | Delete an application after confirmation |

### 10. Responsive Design

CSS media queries and responsive layouts allow the application to adapt to desktop and mobile screen sizes.

### 11. Error Handling

The project handles common user-input errors, including:

- Missing company name
- Missing or invalid position
- Missing application date
- Invalid non-empty job URL
- Empty search/filter results
- Delete confirmation before removing an application

## Project Structure

```text
job-application-tracker/
│
├── index.html
├── README.md
│
├── Screenshots/
│   └── README.md
│
├── images/
│   ├── eye.png
│   ├── eye-off.png
│   ├── text-align-justify.png
│   └── x2.png
│
├── scripts/
│   ├── addApplication.js
│   ├── app.js
│   ├── applications.js
│   ├── notifications.js
│   ├── storage.js
│   └── utility.js
│
└── styles/
    ├── application-form.css
    ├── header.css
    ├── notifications.css
    └── statistics.css
```

## What I Learned

Building this project helped me understand how JavaScript can be used to create a complete interactive frontend application instead of isolated coding exercises.

Key lessons include:

- How to manipulate the DOM dynamically
- How event listeners connect user actions to application logic
- How arrays and objects can represent real-world application data
- How `filter()`, `find()`, `sort()`, `forEach()`, and `splice()` solve practical problems
- How to handle and validate form input
- How to create and manage dynamic forms
- How `localStorage` can persist data between browser sessions
- How JSON is used to store JavaScript data as text
- How to split JavaScript into multiple modules/files by responsibility
- How CRUD operations work in a frontend application
- How to build search, filtering, and sorting functionality
- How to create responsive interfaces with CSS
- How to handle invalid input and empty states
- How to structure a larger JavaScript project so it is easier to maintain

## Future Improvements

Possible future improvements include:

- Export applications to JSON or CSV
- Import a previously exported backup
- Add application reminders and follow-up dates
- Add pagination for large application lists
- Add more advanced analytics and charts
- Add keyboard accessibility improvements
- Add stronger form validation and reusable validation utilities
- Add drag-and-drop status management
- Add a dedicated settings panel
- Add optional cloud/database synchronization
- Improve automated testing

## License

This project was created as a learning project. You may adapt the code for personal learning and development.
