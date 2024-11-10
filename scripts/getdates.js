// Current year 
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('footer p:first-of-type'); 
if (footerYear) {
    footerYear.textContent = `© ${currentYear} Yara Hidalgo. Argentina.`;
}
// last modified date
const lastModifiedDate = document.lastModified; //last modified date of the document
const footerModified = document.querySelector('footer p:nth-of-type(2)'); 
if (footerModified) {
    footerModified.textContent = `Last modified: ${lastModifiedDate}`;
}
console.log(currentYear); 
console.log(lastModifiedDate);
