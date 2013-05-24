$(document).ready(function(){
	$("#addnew").click(function(){
		title = $('#newtitle').val();
		newval = $('#newval').val();
		isdigit = checkinput('#newval');
		
		if(isdigit == true){
			objtiket = new tiket(title,newval);
			//console.log(objtiket);
		}else{ 
			$('#newval').val('Try again!');
			alert('Please insert digit value inti the field!');
		}
	});
});

function checkinput(inputid)
{
		thisval = $(inputid).val();
		isdigit = $.isNumeric(thisval);
		return isdigit;
}

/* new object tiket */
function tiket(title,startvalue)
{
	this.title = title;
	this.stval = startvalue;
}