$(document).ready(function(){
	$("#addnew").click(function(){
		title = $('#newtitle').val();
		newval = $('#newval').val();
		isdigit = checkinput('#newval');
		
		if(isdigit == true){
			objtiket = new tiket(title,newval);
			//console.log(objtiket);
			
			
if(typeof(Storage)!=="undefined")
  {
  	console.log('Yes! localStorage and sessionStorage support!');
  	localStorage.setItem(title,newval);
  	//SetItem(title,newval);
  	the1 = localStorage.getItem('the1');
  	//localStorage.removeItem(name);
  	//localStorage.clear();
  	alldata = Object.keys(localStorage);
  	countdata = Object.keys(localStorage).length;
  	
  	console.log(alldata);
  	console.log(countdata);
  }
else
  {
  	console.log('Sorry! No web storage support..');
  }
			
			
			
			
			
		}else{ 
			$('#newval').val('Try again!');
			alert('Please insert digit value inti the field!');
		}
	});
	
	
	

	
	
	
	
	
	
	
	
});





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