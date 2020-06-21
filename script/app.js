(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),
				puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');

	const pieceNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

function changeImageSet() {
	dropZones.forEach(zone => {
		 if (zone.children.length > 0) {
		 	document.querySelector(".puzzle-pieces").appendChild(zone.firstElementChild);
		 }
	})
	// change all the image elements on the page -> draggable image sources
	// change the image elements on the left to match the selected puzzle
	pieceNames.forEach((piece, index) => {
		puzzlePieces[index].src = `images/${piece + this.dataset.puzzleref}.jpg`;
		puzzlePieces[index].id = `${piece + this.dataset.puzzleref}`;
	});


	// and set the drop zone background image based on the puzzle the user selects
	gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleref}.jpg)`;
	// debugger;
}


function allowDrag(event) {
	console.log('started draggin an image');

	event.dataTransfer.setData("text/plain", this.id);
}

function allowDragOver(event) {
	event.preventDefault();
	console.log('dragged over a drop zone');
}

function allowDrop(event) {
	// event.preventDefault();
	console.log('dropped on drop zone');
	if (this.children.length > 0) { return false;}

//go and get the dragged elements's ID from the data trnasfer object
	let currentImage = event.dataTransfer.getData("text/plain");
	// add that image to whatever drop zone we're dropping our image on
	event.target.appendChild(document.querySelector(`#${currentImage}`));
}

	// add event handling here -> how is the user going to use our app
	// what triggers do we need?

	// click on the bottom buttons to change the puzzle image we're working with
	puzzleButtons.forEach(button => button.addEventListener('click', changeImageSet));


	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
	zone.addEventListener('dragover', allowDragOver);
	zone.addEventListener('drop', allowDrop);
});

	// call the function and pass in the first nav button as a reference
	// research call, apply and bind -> look at MDN
	changeImageSet.call(puzzleButtons[0]);
	const foo = function() {
   console.log("foobar");
}
// Invoke it using the variable
foo();
})();
