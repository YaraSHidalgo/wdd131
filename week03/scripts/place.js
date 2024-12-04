//var to hold the current year
const thisYear = new Date().getFullYear();
//var to hold the las modify on the page
const lastModify = document.lastModified;

//span message with the current year
document.querySelector('#currentYear').textContent = `© ${thisYear} Yara Hidalgo - Argentina`;
// the last update of the page
document.querySelector('#lastUpdate').textContent = `Last Update: ${lastModify}`;

window.onload = updateInfo;