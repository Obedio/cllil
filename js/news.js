$(document).ready(function () {
	let news = [
	{
		"img": "https://via.placeholder.com/350x150",
		"altImg": "noticia",
		"ahref": "",
		"titulo": "Teste"
	},
	{
		"img": "https://via.placeholder.com/350x150",
		"altImg": "noticia",
		"ahref": "",
		"titulo": "Aberta as Incrições para 2019"
	},
	{
		"img": "https://via.placeholder.com/350x150",
		"altImg": "noticia",
		"ahref": "",
		"titulo": "Aberta as Incrições para 2019"
	},
	{
		"img": "https://via.placeholder.com/350x150",
		"altImg": "noticia",
		"ahref": "",
		"titulo": "Aberta as Incrições para 2019"
	},
	{
		"img": "https://via.placeholder.com/350x150",
		"altImg": "noticia",
		"ahref": "",
		"titulo": "Aberta as Incrições para 2019"
	}
	];

	let noticias = '';

	for(var noticia in news){
		noticias += 
		'<div class="card w-100 mb-3">' +
			'<img class="card-img-top" src="' + news[noticia].img + '" alt="' + news[noticia].altImg + '">' +
			'<div class="card-body">' +
				'<a href="' + news[noticia].ahref + '"><h6 class="card-title text-center text-padrao2">' + news[noticia].titulo + '</h6></a>' +
			'</div>' +
		'</div>';

		if (noticia == 3)
			break;
	}

	$('#news').html(noticias);

});