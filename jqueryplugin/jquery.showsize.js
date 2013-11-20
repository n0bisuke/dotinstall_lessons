;(function($) {

    $.fn.showsize = function(options) {
        // this (3つのimg)
        // console.log(this);
        var elements = this;

        elements.each(function() {
            // this
            //console.log(this); // 1つのimg
            var opts = $.extend({},$.fn.showsize.default,options,$(this).data());
            $(this).click(function() {
                var msg = $(this).width() + ' x ' + $(this).height();
                $(this).wrap('<div style="position:relative;"></div>');
                var div = $('<div>')
                            .text(msg)
                            .css('position', 'absolute')
                            .css('top', '0')
                            .css('background', 'black')
                            .css('color', getRandomColor())
                            .css('font-size', opts.size+'px')
                            .css('opacity', opts.opacity)
                            .css('padding', '2px');
                $(this).after(div);
            });
        });

        return this;
    };
    //デフォルト値の設定
    $.fn.showsize.default = {
    	size: 10,
    	opacity: 0.5
    };

    //任意関数
    function getRandomColor(){
    	var colors = ['white','blue','pink','yellow'];
    	return colors[Math.floor(Math.random() * colors.length)];
    }
    
})(jQuery);
