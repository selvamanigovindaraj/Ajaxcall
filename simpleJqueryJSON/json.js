$(document).ready(function(){
	$("button").click(function(){
		var student={
			name: $("#name").val(),
			age:$("#age").val(),
			school:$("#school").val(),
		}
		$.post("http://59d86f30b28c460012b38945.mockapi.io/students",student)
	});
});