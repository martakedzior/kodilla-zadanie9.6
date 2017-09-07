// scripts.js
// Excercise 9.6
var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var n = document.getElementsByTagName('li').length; 
	element.innerHTML = 'Item ' + (n - 4); // 4 - hardcoded value of menu li items
	list.appendChild(element);
});