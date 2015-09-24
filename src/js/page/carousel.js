(function (window) {

    var $ = require('jq');
    require('carousel');


    //焦点图特效
    var $carousel = $('#carousel');
    $carousel.carousel({
        isVertical: true,
        isAutoPlay: false
    });

    //module.exports = function ($this, isInit) {
    //    if (isInit) {
    //
    //
    //    }
    //};

})(window);