/*
	Öffnet  Mail-Formular  des  Client-Systems
  
  Parameter:
  user	...	Zeichenkette  vor  dem  @  der  Zieladresse
  user	...	Zeichenkette  hinter  dem  @  der  Zieladresse
*/
function  sendamail(user,  host,  toplevel)
{
//	window.location  =  "mailto:"  +  user  +  "@"  +  host  +  "."  +  toplevel
	sendamail(user,  host,  toplevel,  "",  "")
}

function  sendamail(user,  host,  toplevel,  subject,  content)
{
	window.location  =  "mailto:"  +  user  +  "@"  +  host  +  "."  +  toplevel  +
  									"?subject="  +  subject
}

function  submit_message()
{
	user  =  "bmg-hausbau"
  host  =  "gmx"
  toplevel  =  "de"

	window.location  =  "mailto:"  +  user  +  "@"  +  host  +  "."  +  toplevel  +  "?subject"
}