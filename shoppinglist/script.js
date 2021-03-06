// # Add input value when to list 	button is submit
// # Add input value to list when enter key is press

// get element from form
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

/*
// event lisentner.trigger action when button is click
// whenbutton click, add a new li in the form ul
button.addEventListener("click", function(){
	if ( input.value.length > 0 ) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})

// event lisentner.trigger action when enter key is click
// when enter key is click, add a new li in the form ul
input.addEventListener("keypress", function(){
	if ( input.value.length > 0 && event.keyCode === 13 ) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value = "";
	}
})
*/

/* # Refactoring above Codes */

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		
		li.innerHTML = li.innerHTML + " ";
		li.appendChild(btn);
		
		ul.appendChild(li);
		input.value = "";
}

function addListAfterClick(){
	if ( inputLength() > 0 ) {
		createListElement();
	}
}

function addListAfterKeypress(event){
	if ( inputLength() > 0 && event.keyCode === 13 ) {
		var li = document.createElement("li");
		createListElement();
	}
}

// event lisentner.trigger action when button is click
// whenbutton click, add a new li in the form ul
button.addEventListener("click", addListAfterClick);

// event lisentner.trigger action when enter key is click
// when enter key is click, add a new li in the form ul
input.addEventListener("keypress", addListAfterKeypress);



// check list
// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
		event.target.classList.toggle('done');
  }
}, false);


var deleteBtns = document.getElementsByClassName("delete");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
}


//delete list
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}