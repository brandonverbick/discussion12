window.addEventListener("load", function() {
	console.log("Good job opening the window");
	document.querySelector("h1").style.color = "BlueViolet";
});

window.addEventListener("dblclick", function() {
    
    let d = new Date();
    let day = d.toUTCString();
    alert(day);
});

document.getElementById("#checkbox").addEventListener("click", function() {
    
    if(document.getElementById("#checkbox").checked==true){
        console.log('chec');
        document.getElementById("#emailBox").style.display="block";
    } else {
        document.getElementById("#emailBox").style.display="none";
    }
});