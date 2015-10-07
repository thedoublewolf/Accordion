$('.header1').on('click', function (event){
	$('#ipsum1').removeClass('close').addClass('open');
	$('#ipsum2').removeClass('open').addClass('close');
	$('#ipsum3').removeClass('open').addClass('close');
});

$('.header2').on('click', function (event){
	$('#ipsum2').removeClass('close').addClass('open');
	$('#ipsum1').removeClass('open').addClass('close');
	$('#ipsum3').removeClass('open').addClass('close');
});

$('.header3').on('click', function (event){
	$('#ipsum3').removeClass('close').addClass('open');
	$('#ipsum2').removeClass('open').addClass('close');
	$('#ipsum1').removeClass('open').addClass('close');
});

$('.reset').on('click', function (event){
	$('#ipsum1').removeClass('open').addClass('close');
	$('#ipsum2').removeClass('open').addClass('close');
	$('#ipsum3').removeClass('open').addClass('close');
})