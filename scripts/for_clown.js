var myClownImage = document.getElementById('clown_pepega');
var rollButton = document.getElementById('Pog');
var killButton = document.getElementById('BibleThump');
var backImage = document.querySelector('html');

var alive = true;

rollButton.onclick = function() {
	if (alive) {
    	myClownImage.setAttribute('src', 'images/rolling_pepega.gif');
	}
	else {
		alert('pepega is dead');
	}
}

killButton.onclick = function() {
    myClownImage.setAttribute('src', 'images/dead_clown.jpeg');
    backImage.style.backgroundImage = "url('https://static-cdn.jtvnw.net/emoticons/v1/117709/3.0')";
    alive = false;
}