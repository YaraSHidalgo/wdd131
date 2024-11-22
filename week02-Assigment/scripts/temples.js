// Store the selected elements that we are going to use. 
const navBar = document.querySelector('.nav-list')
const hambuguerButton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambuguerButton.addEventListener('click', () => {
	navBar.classList.toggle('show');
	hambuguerButton.classList.toggle('show');
});


//var to hold the current year
const thisYear = new Date().getFullYear();
//var to hold the las modify on the page
const lastModify = document.lastModified;

//span message with the current year
document.querySelector('#currentYear').textContent = `© ${thisYear} Yara Hidalgo - Argentina`;
// the last update of the page
document.querySelector('#lastUpdate').textContent = `Last Update: ${lastModify}`;

window.onload = updateInfo;



