var myCoffin = document.getElementById('pls');
var backImage = document.querySelector('html');

myCoffin.onclick = function() {
	myCoffin.textContent = "WHY";
    backImage.style.backgroundImage = "url('images/coffin.gif')";
    console.log('123');
}