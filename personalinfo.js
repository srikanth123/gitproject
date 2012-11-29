function formValidation()
{
var fname = document.forms["registration"]["firstname"];
var lname = document.registration.lastname;
var emerg = document.registration.emergency;
var ph = document.registration.phonenumber;
/*if(alphabets(fname))
{
if(alphabets1(lname))
{
if(numeric(emerg))
{
if(numeric1(ph))
{

}
}
}
}
	return false; */
	
	if(alphabets(fname))
	{
		if(alphabets1(lname))
		{
			if(numeric(emerg))
			{
				if(numeric1(ph))
				{
					return true;
				}
				else
				return false;
			}
			else
			return false;
		}
		else
		return false;
	}
	else
	return false;
}
function alphabets(fname)
{ 
var letters = /^[A-Za-z]+$/;

if(fname.value.match(letters))
{
return true;
}
else
{
alert('First name should not be empty and must have alphabet characters only');
fname.focus();
return false;
}
}
function alphabets1(lname)
{ 
var letters = /^[A-Za-z]+$/;
if(lname.value.match(letters))
{
return true;
}
else
{
alert('LastName Should not be empty and must have alphabet characters only');
lname.focus();
return false;
}
}
function numeric(emerg)
{ 
var numbers = /^[0-9]+$/;
if(emerg.value.match(numbers))
{
return true;
}
else
{
alert('emergency should not be empty and must have numeric characters only');
emerg.focus();
return false;
}
}
function numeric1(ph)
{ 
x=0;
var numbers = /^[0-9]+$/;
if(ph.value.match(numbers))
{
x++;


return true;
}
if(x==0)
{
alert('phone number should not be empty and must have numeric characters only');
ph.focus();
return false;
}
 
}
function alphanumeric()
{ 
var emp= document.registration.employee;
var letters = /^[0-9a-zA-Z\d\s]+$/;
if(emp.value.match(letters))
{
return true;
}
else
{
alert('Employee Number must have alphanumeric characters only');
return false;
}
}
function alphanumeric1()
{ 
var add= document.registration.address;
var letters = /^[0-9a-zA-Z\d\s]+$/;
if(add.value.match(letters))
{
return true;
}
else
{
alert('Address must have alphanumeric characters only');
return false;
}
}
function alphanumeric2()
{ 
var vis= document.registration.visas;
var letters = /^[0-9a-zA-Z\d\s]+$/;
if(vis.value.match(letters))
{
return true;
}
else
{
alert('visas must have alphanumeric characters only');
return false;
}
}
function alphanumeric3()
{ 
var about= document.registration.aboutyou;
var letters = /^[0-9a-zA-Z\d\s]+$/;
if(about.value.match(letters))
{
return true;
}
else
{
alert('About you must have alphanumeric characters only');
return false;
}
}
function alphanumeric4()
{ 
var edu= document.registration.education;
var letters = /^[0-9a-zA-Z\d\s]+$/;
if(edu.value.match(letters))
{
return true;
}
else
{
alert('Education must have alphanumeric characters only');
return false;
}
}
function ValidateEmail()
{
var uemail= document.registration.email;
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}
function validsex(umsex,ufsex)  
{  
x=0;  
  
if(umsex.checked)   
{  
x++;  
} if(ufsex.checked)  
{  
x++;   
}  
if(x==0)  
{  
alert('Select Male/Female');  
umsex.focus();  
return false;  
}  
else  
{  
alert('Form Succesfully Submitted');  
window.location.reload()  
return true;  
}  
}  
