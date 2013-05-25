/* global vars */
var alldata   = Object.keys(localStorage);
var countdata = Object.keys(localStorage).length;

$(document).ready(function(){
	$(".button_add").click(function(){
		$('#newelement').css('display', 'block');
	});
	$(".ex").click(function(){
		$('#newelement').css('display', 'none');
	});
	
	showAllTickets();
	
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
			  	//alldata = Object.keys(localStorage);
			  	//countdata = Object.keys(localStorage).length;
			  	
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

/* if there exist some tickets in storage we will show them! */
function showAllTickets()
{
	//console.log('what in the storage? - '+countdata+'; all data - '+alldata);
	var key = '';
	var val = '';
	if(countdata != 0)
	{
		for(var i=0; i<countdata; i++)
		{
			key = alldata[i];
			val = localStorage.getItem(key);
			drawTicket(key,val);
		}
	}
}

function addTicket(name,val)
{
	var alreadyExist = localStorage.getItem(name); /* if  alreadyExist == null - it's mean that there is no such value in the storage! */
	if(alreadyExist == null)
	{
		localStorage.setItem(name,val);
		var val = localStorage.getItem(name);
		drawTicket(name,val);
	}
	else
	{
		localStorage.setItem(name,val);
		var val = localStorage.getItem(name);
		$("#content p:contains("+name+")").parent(this).children('span:first').html(val);
	}
}

function drawTicket(name,val)
{
	var writeticket = "<div class='ticket floleft'><p>"+name+"</p><span>"+val+"</span></div>";		
	$('#content').append(writeticket);	
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