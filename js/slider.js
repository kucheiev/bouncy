(function($){
		function init(sliderItems){
			var 
				greencontrolHolder = $('<div class = "greencontrolHolder"/>');
		
			if(!sliderItems.length){
				return;
			}
			greencontrolHolder.appendTo(sliderItems.eq(0).parent());
			sliderItems.each(function(i,el){
				var
					$el = $(el),
					dataId = $el.data('id'),
					control = $('<div data-id = "' + dataId + '" class = "j_control greencontrol ' + (!i ? 'greencontrolActive' : '' )+ '"/>');
				control.on('click', function(e){
					var
						current = $(e.target),
						controls = current.parent().find('.j_control'),
						dataId = current.data('id');
					controls.removeClass('greencontrolActive');
					current.addClass('greencontrolActive');
					sliderItems.addClass('hidden');
					sliderItems.filter('[data-id = '+dataId+']').removeClass('hidden');
				}).appendTo(greencontrolHolder);
			});
		}	
		init($('.j_slider'));
		init($('.j_slider2'));
})(jQuery);