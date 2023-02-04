var answer=document.getElementById("answer");

function number(num){
	answer.value+=num;
}

function calculation(){
	answer.value=eval(answer.value);
}

function clearValue(){
	answer.value="";
	console.log("hello")
}

