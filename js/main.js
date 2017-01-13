function monoA()
{
	var img=document.getElementById("img_mono_a");
	var checkA=document.getElementById("mono_a");

	if(checkA.checked){
		img.innerHTML= "<img src='https://s-media-cache-ak0.pinimg.com/564x/0d/74/d1/0d74d1cfb2dd9172b8a606e508d5cab9.jpg'>";
	}else{
		img.innerHTML= "<img src='https://cdn.pixabay.com/photo/2014/04/02/10/17/monkey-303353_960_720.png'>";
	}
}


function monoB()
{
	var img=document.getElementById("img_mono_b");
	var checkB=document.getElementById("mono_b");

	if(checkB.checked){
		img.innerHTML= "<img src='https://s-media-cache-ak0.pinimg.com/564x/0d/74/d1/0d74d1cfb2dd9172b8a606e508d5cab9.jpg'>";
	}else{
		img.innerHTML= "<img src='https://cdn.pixabay.com/photo/2014/04/02/10/17/monkey-303353_960_720.png'>";
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

