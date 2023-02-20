// To change background color on button click
const btn = document.querySelector('button');

function random(number) {
	return Math.floor(Math.random() * (number+1));
}

function bgChange() {
	const rndCol = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange; // assigning event listener to click event of button

// To change paragraph font size on move hover
const para = document.getElementById("demo_para");

para.onmouseover = function(){
	para.style.fontSize = "40px";
}

para.onmouseout = function(){
	para.style.fontSize = "20px";
}

// to reset background color of the page
const reset = document.getElementById('reset');

function resetBG(bgcolor){
	document.body.style.backgroundColor = bgcolor;
}

reset.onclick = () => {
	resetBG("white");
};

// To demo adding event listener and event propagation

function stopEvent(ev) {
	let cell22 = document.getElementById("c22");
	cell22.innerHTML = "hello";

	// this ought to keep tbl from getting the click.
	// ev.stopPropagation();
	// alert("event propagation halted.");
}

const tbl_clicked = function(){ // Here is an example of an anonymous function
	let tbl = document.querySelector("table");
	tbl.style.backgroundColor = "yellow";
}

document.getElementById("tr1").addEventListener("click", stopEvent);
const tr = document.getElementById("tr1");
tr.onclick = stopEvent;


document.getElementById("table1").addEventListener("click", tbl_clicked);

// Demo without callback

function serverRequestNoCallback(query){
	setTimeout(function(){
  	var response = query + "full";
    console.log(response);
  }, 5000);
}

function getResultsNoCallback(){
	console.log("response from server: ");
}

function printNoCallback(){
	console.log("printing something");
}

btn_nc.onclick = () => {
	console.log("Without callback");
	getResultsNoCallback();
	serverRequestNoCallback("The glass is half ");
	printNoCallback();
}

// Demo with callback

function serverRequest(query, callback){
	setTimeout(function(){
  	var response = query + "full";
    callback(response);
  }, 5000);
}

function getResults(results){
console.log("response from server: " + results);
}

btn_c.onclick= () => {
	console.log("with callback");
	serverRequest("The glass is half ", getResults);
}

// jQuery examples

$("#btn_c").css({"backgroundColor": "red"});

$("#btn_c").click(()=>{
	console.log("with callback");
	serverRequest("The glass is half ", getResults);
})
