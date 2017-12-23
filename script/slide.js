var curr = 0;
var next = 0;
var images = 4;
var img = new Array();

// Bilder vorladen
for (var i = 1; i <= images; i++)
{
	name = (i < 10) ? "0" + i : i;
	img[i-1] = new Image(); img[i-1].src = "images/slide/" + name + ".jpg";
}

// einfache Bildwechselfunktion
function stdSlideNext()
{
	next = (curr + 1) % images;
	var slideImg = document.getElementById("slide2");
	
	if (slideImg != null)
	{
		curr = next;
		slideImg.src = img[curr].src;
	}
	
	window.setTimeout("stdSlideNext()", 3000);
}

// Bildwechselfunktion mit weichem Übergang (slide1 und slide2 müssen im
// Dokument übereinander liegen!)
function smoothSlideNext()
{
	next = (curr + 1) % images;
	var inFrontImg = document.getElementById("slide2");	// hat curr
	var behindImg = document.getElementById("slide1");	// hat next
	
	if (inFrontImg != null && behindImg != null)
	{
		inFrontImg.src = img[curr].src;
		inFrontImg.style.opacity = 1.0;
		
		behindImg.src = img[next].src;		
		smoothSlideProcess();
	}
	else
	{
		// warten bis Seite vollständig
		window.setTimeout("smoothSlideNext()", 1000);
	}
}

// realisiert weichen Bildwechsel für smoothSlideNext()
function smoothSlideProcess()
{
	var inFrontImg = document.getElementById("slide2");
	inFrontImg.style.opacity -= 0.05;
	
	if (inFrontImg.style.opacity < 0.01)
	{
		curr = next;
		window.setTimeout("smoothSlideNext()", 3000);
	}
	else
	{
		window.setTimeout("smoothSlideProcess()", 50);
	}
}

// starten wenn Seite geladen wird
window.setTimeout("smoothSlideNext()", images*500);