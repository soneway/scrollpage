(function (window) {

    var $ = require('jq');
    require('base');
    require('carousel');

    //焦点图特效
    var $carousel = $('#carousel');
    $carousel.carousel({
        isVertical: true,
        isAutoPlay: false
    });

})(window);