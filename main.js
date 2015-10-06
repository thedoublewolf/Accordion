$('.header1').on('click', function (event){
	var toggle1 = $(event.target);
	$('#ipsum1').removeClass('close').addClass('open');
	$('#ipsum2').removeClass('open').addClass('close');
	$('#ipsum3').removeClass('open').addClass('close');
});

$('.header2').on('click', function (event){
	var toggle1 = $(event.target);
	$('#ipsum2').removeClass('close').addClass('open');
	$('#ipsum1').removeClass('open').addClass('close');
	$('#ipsum3').removeClass('open').addClass('close');
});

$('.header3').on('click', function (event){
	var toggle1 = $(event.target);
	$('#ipsum3').removeClass('close').addClass('open');
	$('#ipsum2').removeClass('open').addClass('close');
	$('#ipsum1').removeClass('open').addClass('close');
});



// $('.ipsum2').addClass('.open');
// 	$('.ipsum1').addClass('.close');
// 	$('.ipsum3').addClass('.close');



// $('.header1').bind('click', function (event){
// 	$('.ipsum1').toggle();
// 	var toggle1 = $(event.target);
// 	toggle1.toggle('.ipsum2');
// });
// $('.header2').on('click', function (event){
// 	$('.ipsum2').toggle();
// });

// $('.header3').on('click', function (event){
// 	$('.ipsum3').toggle();
// });






// $('ul').children('li').on('click', function(){
// 	var click = $(event.target);
// 	click.addClass('minimize');
// });

// $('h2').on('click', function (event){
// 	var clickh2 = $(event.target);
// 	click.removetag('p');
// });