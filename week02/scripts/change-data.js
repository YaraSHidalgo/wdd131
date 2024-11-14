const input = document.querySelector('#favchap');// the querySelector is getting the id element on line 12 , #id to use on css file
const button = document.querySelector('button'); //the querySelector is getting the "button element" line 13 on the html file
const list = document.querySelector('__________'); //list reference that will be hold the reference elemenetd

// create a new <li> (list) ELEMENT on the html file. The JS function "document.createElement("the element go here")"
let chapterList = document.createElement("li"); 
// create a new <button> ELEMENT on the hmtl file
const deleteButton = document.createElement("button");

//list.appendChild(chapterList); 
list.textContent = input.value; //Populate the li element variable's textContent or innerHTML with the input value.
deleteButton.textContent = ' ❌'; // Populate the button textContent with a X
chapterList.append(deleteButton); // Append the li element variable with the delete button.
//chapterList.innerHTML = list.join("");
list.append(chapterList);//Append the li element variable to the unordered list in your HTML



