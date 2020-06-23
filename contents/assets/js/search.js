(function($)
{
	$.fn.extend({
		'searchBox'	: function(opt) {
		
			var opt = $.extend({}, $.searchBox.defaults, opt);
			
			addText(this, opt);
			
			var click = false;
			
			//Hover
			$(this).hover(function () 
			{
				if (!click)
					$(this).removeClass().addClass(opt.hover);
			}, function () 
			{
				if (!click)
					$(this).removeClass().addClass(opt.normal);
			});
			
			$(this).blur(function () 
			{
				var elem = $(this);
				
				if (elem.val() === '' || elem.val() === opt.text) {
					elem.removeClass().addClass(opt.normal);
					addText(this, opt);
					click = false;
				}
			});
			
			//Focus
			$(this).focus(function () 
			{
				var elem = $(this);
				
				elem.removeClass().addClass(opt.active);
				
				if (elem.val() === opt.text)
					elem.val('');
				
				click = true;
				
			});
			
			//Keyup
			$(this).keyup(function () 
			{
				searchForIt($(this).val());
			});
			
			return this;
		}
	
	});
	
	/**
	 * Adds text when search box empty.
	 * 
	 * @param object elem Object that gets text
	 * @param object opt Options
	 */
	function addText(elem, opt)
	{
		elem = $(elem);
		
		if (elem.val() === '')
			elem.val(opt.text);
	}
	
	/**
	 * Searchs for text.
	 * 
	 * @param string query String that we search for
	 */
	function searchForIt(query)
	{
		$('#exampTable tr').each(function () 
		{
			$(this).children('td').each(function () 
			{
				var elem = $(this);
				
				//console.log(val.match(/.*?a.*?/i));
				
				if (!elem.html().match(new RegExp('.*?' + query + '.*?', 'i'))) {
					$(this).parent('tr').css('display', 'none');
					//console.log(query);
				} else {
					$(this).parent('tr').css('display', '');
					return false;
				}
				
				return ;
			});
		});
	}
	
	$.searchBox = function () {};
	
	$.searchBox.defaults = {
		'hover'		: 'hover',
		'active'	: 'active',
		'normal'	: 'normal',
		'text'		: 'Search for ...'
	};
	
})(jQuery);