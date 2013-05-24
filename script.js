$(document).ready(function(){
	$(".button_add").click(function(){
		$('#newelement').css('display', 'block');
	});
	$(".ex").click(function(){
		$('#newelement').css('display', 'none');
	});
	
	$("#addnew").click(function(){
		var title = $('#newtitle').val();
		var newval = $('#newval').val();
		var isdigit = checkinput('#newval');
		
		if(isdigit == true){
			var objtiket = new tiket(title,newval);
			//console.log(objtiket);
			
			/* testing local storage */			
			if(typeof(Storage)!=="undefined")
			  {
			  	console.log('localStorage support!');
			  	//localStorage.setItem(title,newval);
			  	//SetItem(title,newval);
			  	//localStorage.removeItem(name);
			  	//localStorage.clear();
			  	alldata = Object.keys(localStorage);
			  	countdata = Object.keys(localStorage).length;
			  	
			  	//console.log(alldata);
			  	//console.log(countdata);
			  	if(title=='clear'){localStorage.clear();$('#content *').remove();}
			  	else
			  	{
				  	addTicket(title,newval);
			  	}
			  	
			  	
			  }
			else
			  {
			  	console.log('No web storage support...');
			  }
			
			  /* testing content display */			
	
		
		}else{ 
			$('#newval').val('Try again!');
			alert('Please insert digit value inti the field!');
		}
	});
	
	
});


function addTicket(name,val)
{
	var alreadyExist = localStorage.getItem(name); /* if  alreadyExist == null - it's mean that there is no such value in the storage! */
	if(alreadyExist == null)
	{
		localStorage.setItem(name,val);
		var val = localStorage.getItem(name);
		var writeticket = "<div class='ticket floleft'><p>"+name+"</p><span>"+val+"</span></div>";		
		$('#content').append(writeticket);	
	}
	else
	{
		localStorage.setItem(name,val);
		var val = localStorage.getItem(name);
		$("#content p:contains("+name+")").parent(this).children('span:first').html(val);
	}
}



/* check if input start value is digit! */
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