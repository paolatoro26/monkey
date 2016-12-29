function monoA()
{
	var img=document.getElementById("img_mono_a");
	var checkA=document.getElementById("mono_a");

	if(checkA.checked){
		img.innerHTML= "<img src='../img/feliz.jpg'>";
	}else{
		img.innerHTML= "<img src='../img/triste.jpg'>";
	}
}


function monoB()
{
	var img=document.getElementById("img_mono_b");
	var checkB=document.getElementById("mono_b");

	if(checkB.checked){
		img.innerHTML= "<img src='../img/feliz.jpg'>";
	}else{
		img.innerHTML= "<img src='../img/triste.jpg'>";
	}	
}

function evaluar()
{
	var asmile = document.getElementById("mono_a").checked;
	var bsmile = document.getElementById("mono_b").checked;
	var salida = document.getElementById("salida");

	if(asmile == bsmile)
	{
		salida.innerHTML = "1";
	}else{		
		salida.innerHTML = "0";
	}
}

