$('ul').children('li').on('click', function(){
	var click = $(event.target);
	click.addClass('minimize');
});