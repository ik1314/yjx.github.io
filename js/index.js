// 页面加载后
window.onload = function() {
	$(window).on('resize',function(){
		pageFixedSize()
	});
				
	function pageFixedSize() {
		var height = $(window).height();
		$('body').css('zoom', height / 720);
	}
	var container1 = $(".container1").offset().top;
	// 滚动条事件
	window.onscroll = function() {
		if($(document).scrollTop() >= container1){
			$(document).ready(function(){
				$('.row').each(function(){
					$(this).find('.progress').animate({
						width:$(this).find('.progress').attr('data-value')
					},6000).gradientify({
								gradients: eval($(this).find('.progress').attr('data-color')),
								angle:'45deg',
								fps:'300',
								transition_time:'1'
					});
					var num = $(this).find('.num').attr('data-value');
					var that = $(this);
					setTimeout(function(){setNumTimer(1,num,that)},50);
				});
			});
		}
	}
}