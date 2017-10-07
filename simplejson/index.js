function objFunction(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var obj=this.responseText;
			 txt += "<table border='1'>"
			for(i in obj){
				
			}
			document.getElementById("name").innerHTML = obj.name;
		}
	};
	xhttp.open("GET", "http://59d86f30b28c460012b38945.mockapi.io/students", true);
	xhttp.send();
	
}