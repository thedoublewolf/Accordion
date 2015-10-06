

$('.header1').on('click', function (event){
	var toggle1 = $(event.target);
	$('#ipsum1').removeClass('close');
	console.log(toggle1);
});

$('.header2').on('click', function (event){
	var toggle2 = $(event.target);
	$('.ipsum2').addClass('.open');
	$('.ipsum2').removeClass('.close');
	$('.ipsum3').addClass('.close');
	console.log(toggle2);
});

$('.header3').on('click', function (event){
	var toggle3 = $(event.target);
	$('.ipsum3').addClass('.open');
	$('.ipsum1').addClass('.close');
	$('.ipsum2').addClass('.close');
	console.log(toggle3);
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