/*
100 - Aguardar clique do botão;
200 - Capturar valor do atributo value do botão;
300 - Capturar o span que possui value equivalente ao do botão e ocultá-lo
400 - Capturar o parágrafo que possui value equivalente ao do botão e exibi-lo
500 - Ocultar o próprio botão;
600 - Exibir o botão "Ler menos";
*/
$(document).ready(function(){
	//100
 	$('button[name="but-show"]').click(function () {
 		//200
		var s = $(this).attr("value");

		//300
		$('span[value=' + s + ']').addClass('d-none');			

		//400
		$('p[value=' + s + ']').removeClass('d-none');

		//500
		$(this).addClass('d-none');

		//600
		$('button[value=' + s + ']').filter('[name="but-hide"]').removeClass('d-none');
	} );
	$('button[name="but-hide"]').click(function () {
		var s = $(this).attr("value"); 
		$('span[value=' + s + ']').removeClass('d-none');			
		$('p[value=' + s + ']').addClass('d-none');
		$(this).addClass('d-none');
		$('button[value=' + s + ']').filter('[name="but-show"]').removeClass('d-none');
	});
})