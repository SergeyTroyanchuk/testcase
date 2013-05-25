
$(document).ready(function(){
	$(".button_add").click(function(){
		$('#newelement').css('display', 'block');
	});
	$(".ex").click(function(){
		$('#newelement').css('display', 'none');
	});
	/*
$(".ex").click(function(){
		showAllTickets();
	});
*/
	
	
	
	$("input[name=search]").keyup(function() {
		var search = $(this).val();
		//var n = str.search(search); /* if we get 0 then everithing is ok */
		var list = activeSearch(search);
		if(list == false)
		{
			console.log('NO matches for search!');
		}
		else
		{
			showMatchedTickets(list);	
		}
  	});
	
	showAllTickets();
	
	$("#addnew").click(function(){
		var title = $('#newtitle').val();
		var newval = $('#newval').val();
		var isdigit = checkinput('#newval');
		
		if(isdigit == true){
			var objtiket = new tiket(title,newval);
			
			/* testing local storage */			
			if(typeof(Storage)!=="undefined")
			{
			  	console.log('localStorage support!');
			  	if(title=='clear'){localStorage.clear();$('#content *').remove();}
			  	else
			  	{
				  	addTicket(title,newval);
			  	}
			}
			else
			{
				alert('Ahtung! Can\'t work in such condition! Look into console!');
				console.log('No web storage support... Install normal browser please!');
			}
		}
		else
		{ 
			$('#newval').val('Try again!');
			alert('Please insert digit value inti the field!');
		}
	});
});



function activeSearch(search)
{
	var key = '';
	var listofkeys = Array();
	var iszero = ''; /* it means that values are matching */
	if(Object.keys(localStorage).length != 0)
	{
		for(var i=0; i<Object.keys(localStorage).length; i++)
		{
			key = Object.keys(localStorage)[i];
			iszero = key.search(search);
			if(iszero == 0)
			{
				listofkeys[i] = key;
			}
		}
	}
	if(listofkeys.length == 0)
	{
		return false;
	}
	else
	{
		return listofkeys;
	}
}


function showMatchedTickets(arrticket)
{
	$('#content').empty();
	console.log(arrticket);
	var countarr = arrticket.length;
	var key = '';
	var val = '';
	
	for(var i=0; i<countarr; i++)
	{
		key = arrticket[i];
		console.log(key);
		if(key != undefined)
		{
			val = localStorage.getItem(key);
			drawTicket(key,val);
		}
	}
}

/* if there exist some tickets in storage we will show them! */
function showAllTickets()
{
	var key = '';
	var val = '';
	if(Object.keys(localStorage).length != 0)
	{
		for(var i=0; i<Object.keys(localStorage).length; i++)
		{
			key = Object.keys(localStorage)[i];
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