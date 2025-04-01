window.addEventListener("load", function() {
	
	let text = document.getElementById("billing").textContent;
    console.log(text);
});

document.getElementsByName("useBilling").addEventListener("change", function(event){
    console.log('check');

});