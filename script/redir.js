
function redirect()
{
	var target = document.getElementById("redirLink").href
  window.location = target
}

window.setTimeout("redirect()", 3000)

