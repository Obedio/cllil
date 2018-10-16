$(document).ready(function () {
	let img = $('#news').data("img");
	let not = $('#news').data("not");;

	let news = [
	{
		"img": "curso-intensivo.jpg",
		"altImg": "Curso Intensivo",
		"ahref": "curso-intensivo.html",
		"titulo": "Lançamento do Curso Intensivo de Inglês"
	},
	{
		"img": "informativo.jpg",
		"altImg": "informativo",
		"ahref": "aviso-de-aula-13-10.html",
		"titulo": "Aviso de Aula!"
	},
	{
		"img": "clube-da-conversacao.jpg",
		"altImg": "Clube da Convesação",
		"ahref": "clube-da-conversacao.html",
		"titulo": "Lançamento do Clube da Convesação em Inglês"
	},
	{
		"img": "aula-inaugural-libras.jpeg",
		"altImg": "Aula Inaugural de Libras",
		"ahref": "aula-inaugural-libras.html",
		"titulo": "Aula Inaugural de Libras"
	},
	];

	let noticias = '';

	for(var noticia in news){
		noticias += 
		'<div class="card w-100 mb-3">' +
			'<img class="card-img-top" src="' + (img + news[noticia].img) + '" alt="' + news[noticia].altImg + '">' +
			'<div class="card-body">' +
				'<a href="' + (not + news[noticia].ahref) + '"><h6 class="card-title text-center text-padrao2">' + news[noticia].titulo + '</h6></a>' +
			'</div>' +
		'</div>';

		if (noticia == 3)
			break;
	}

	$('#news').html(noticias);

});