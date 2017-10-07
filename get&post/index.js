$(document).ready(function(){
		$.ajax({
			type:"GET",
			url:"http://59d86f30b28c460012b38945.mockapi.io/students",
			dataType:"json",
			success:function(result){
				var txt=""
				for(i=0;i<result.length;i++){
					txt+="<tr><td>"+result[i].id+"</td><td>"+result[i].name+"</td><td>"+result[i].age+"</td><td>"+result[i].school+"</td></tr>"
				}
				$("#tbody").html(txt)
			}
		});

	$("#button").click(function(){
		var student={
			name: $("#name").val(),
			age:$("#age").val(),
			school:$("#school").val(),
		}
		var sno=$("#tbody tr").length+1;
		$.post("http://59d86f30b28c460012b38945.mockapi.io/students",student,function(result){
			var len=result.length
			$("#tbody").append("<tr><td>"+sno+"</td><td>"+student.name+"</td><td>"+student.age+"</td><td>"+student.school+"</td></tr>")
		})
		
	});
});