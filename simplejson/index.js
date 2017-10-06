function objFunction(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj=JSON.parse(this.responseText);
			document.getElementById("name").innerHTML = obj.name;
		}
	};
	xhttp.open("GET", "sample.txt", true);
	xhttp.send();
	
}